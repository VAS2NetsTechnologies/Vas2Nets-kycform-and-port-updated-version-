import React, { useEffect, useState } from "react";
import { customFetch } from "../../util/http";
import { customStyles } from "../tables/styles/customStyle";
import DataTable from "react-data-table-component";
import SearchInput from "../searchInput/SearchInput";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
import ExpandableComp from "../tables/expandable/sole/ExpandableComp";

const Old = () => {
  const [recordsData, setRecordsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);

  const fetchRecord = async (page) => {
    setLoading(true);
    const { data } = await customFetch.get(
      `oldkycformdata?size=${perPage}&page=${page}`
    );

    // console.log(data);

    setRecordsData(data?.data?.message);
    setTotalRows(data?.data?.totalCount);
    setLoading(false);
  };

  useEffect(() => {
    fetchRecord(1);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const columns = [
    { name: "LegalName", selector: (row) => row?.legal_name, width: "250px" },
    {
      name: "Company_Email",
      selector: (row) => row?.company_email,
      width: "250px",
    },
    {
      name: "No_of_employee",
      selector: (row) => row?.No_of_employee,
      width: "250px",
    },
    {
      name: "Country of Registration",
      selector: (row) => row?.country_of_reg,
      width: "250px",
    },
    {
      name: "date_of_incorporation",
      selector: (row) => row?.date_of_incorporation,
      width: "250px",
    },
    {
      name: "Files",
      cell: (row) => (
        <>
          <div className="rounded-full bg-gray-800 p-2">
            <Link
              to={`/admin/old-records/documents/${row?.user_id}`}
              className="text-white"
            >
              <FaDownload className="w-4 h-4" />
            </Link>
          </div>
        </>
      ),
    },
  ];

  const handleSearch = async () => {
    try {
      setLoading(true);

      if (!searchValue.trim()) {
        setLoading(false);
        return;
      }

      const name = searchValue.trim();
      const data = await customFetch.post(`oldkycformdata?search=${name}`);

      if (data?.data?.message === "Records is not available") {
        setRecordsData([]);
        window.location.reload();
      } else {
        setRecordsData(data?.data?.data?.message || []);
      }

      setSearchValue("");
    } catch (error) {
      console.error("An error occurred:", error);
      setRecordsData([]);
      window.location.reload();
    } finally {
      setLoading(false);
    }
  };
  const handlePageChange = (page) => {
    fetchRecord(page);
  };

  const handlePerRowsChange = async (newPerPage, page) => {
    setLoading(true);
    const { data } = await customFetch.get(
      `getv2nindividualRecords?page=${page}&size=${newPerPage}`
    );

    setRecordsData(data?.data?.message);
    setPerPage(newPerPage);
    setLoading(false);
  };

  return (
    <div className="w-full z-50">
      <div className="py-10 px-4">
        <SearchInput
          value={searchValue}
          handleSearch={handleSearch}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <main className="py-4">
        <DataTable
          columns={columns}
          data={recordsData}
          progressPending={loading}
          pagination
          paginationServer
          paginationTotalRows={totalRows}
          noDataComponent={
            <p className="capitalize font-bold text-xl text-red-500">
              No Records found
            </p>
          }
          onChangeRowsPerPage={handlePerRowsChange}
          onChangePage={handlePageChange}
          fixedHeader
          expandableRows
          expandableRowDisabled={(row) => row.disabled}
          className="w-full"
          expandableRowComponentProps={{ data: recordsData }}
          expandableRowsComponent={ExpandableComp}
          progressComponent={
            <h1 className="font-bold text-4xl">Loading records...</h1>
          }
          customStyles={customStyles}
        />
      </main>
    </div>
  );
};

export default Old;
