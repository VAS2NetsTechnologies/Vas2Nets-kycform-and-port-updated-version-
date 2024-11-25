import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { FaDownload } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdDelete, MdLink } from "react-icons/md";
import { customFetch } from "../../../util/http";
import { customStyles } from "../styles/customStyle";
import useDeleteRecord from "../../../hooks/useDeleteRecord";
import SearchInput from "../../searchInput/SearchInput";
import Csv from "../csv/Csv";
import ExpandableComp from "../expandable/indi/ExpandableComp";
import Status from "../llc/approval_status/Status";

const IndiTable = () => {
  const [recordsData, setRecordsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);

  const { handleDelete, isDeleting } = useDeleteRecord();

  const fetchRecord = async (page) => {
    setLoading(true);
    const { data } = await customFetch.get(
      `getv2nindividualRecords?size=${perPage}&page=${page}`
    );

    // console.log(data);
    // setRecordsData([]);

    setRecordsData(data?.data?.message);
    setTotalRows(data?.data?.totalCount);
    setLoading(false);
  };

  useEffect(() => {
    fetchRecord(1);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  const columns = [
    { name: "Name", selector: (row) => row?.name, width: "250px" },
    {
      name: "Email",
      selector: (row) => row?.email,
      width: "250px",
    },
    // {
    //   name: "Employer_Name",
    //   selector: (row) => row?.employer_name,
    //   width: "250px",
    // },
    {
      name: "Gender",
      selector: (row) => row?.gender,
      width: "250px",
    },
    // {
    //   name: "Phone_Number",
    //   selector: (row) => row?.phone_number,
    //   width: "250px",
    // },
    {
      name: "Actions",
      cell: (row) => (
        <>
          <div className="rounded-full bg-gray-800 p-2">
            <Link
              to={`/admin/individual/records/${row?.name}`}
              className="text-white"
            >
              <MdLink className="w-4 h-4" />
            </Link>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => handleDelete("indi", row?.user_id)}
              className="text-red-600 hover:text-red-700 cursor-pointer"
              disabled={isDeleting}
            >
              <MdDelete className="w-6 h-6" />
            </button>
          </div>
          <div className="rounded-full bg-gray-800 p-2">
            <Link
              to={`/admin/individual/documents/${row?.user_id}?mode=indi`}
              className="text-white"
            >
              <FaDownload className="w-4 h-4" />
            </Link>
          </div>
        </>
      ),
    },
    {
      name: "",
      cell: (row) => {
        return (
          <div className="flex justify-evenly space-x-10">
            <Status email={row?.email} status="approve" />
            <Status email={row?.email} status="decline" />
          </div>
        );
      },
      width: "230px",
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
      const data = await customFetch.post(
        `getv2nindividualRecords?search=${name}`
      );

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

  let downloadBtn;

  if (recordsData?.length > 0) {
    downloadBtn = <Csv recordsData={recordsData} />;
  }

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
          expandableRowsComponent={ExpandableComp}
          expandableRowComponentProps={{ data: recordsData }}
          progressComponent={
            <h1 className="font-bold text-4xl">Loading records...</h1>
          }
          customStyles={customStyles}
          actions={[downloadBtn]}
        />
      </main>
    </div>
  );
};

export default IndiTable;
