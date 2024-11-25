import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { FaDownload } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdDelete, MdLink } from "react-icons/md";
import useDeleteRecord from "../../../hooks/useDeleteRecord";
import Csv from "../csv/Csv";
import SearchInput from "../../searchInput/SearchInput";
import { customStyles } from "../styles/customStyle";
import { customFetch } from "../../../util/http";
import ExpandableComp from "../expandable/llc/ExpandableComp";
import Status from "./approval_status/Status";

const LllcTable = () => {
  const [recordsData, setRecordsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);

  const { handleDelete, isDeleting } = useDeleteRecord();

  const fetchRecord = async (page) => {
    setLoading(true);
    const { data } = await customFetch.get(
      `v2nclientDetailsResponse?size=${perPage}&page=${page}`,
      {
        cors: "cors",
      }
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

  const handlePageChange = (page) => {
    fetchRecord(page);
  };

  const handlePerRowsChange = async (newPerPage, page) => {
    setLoading(true);
    const { data } = await customFetch.get(
      `v2nclientDetailsResponse?page=${page}&size=${newPerPage}`
    );

    setRecordsData(data?.data?.message);
    setPerPage(newPerPage);
    setLoading(false);
  };

  // {
  //   No_of_employee yes
  // beneficiary_details
  // board_member_details
  // company_email yes
  // company_phonenumber
  // company_website
  // country_of_reg yes
  // date_created
  // date_of_incorporation
  // id
  // industryRegulator
  // legal_name yes
  // point_of_contact_details
  // prim_business_address
  // questionnaires
  // reg_address
  // registration_number
  // signatory_details
  // tax_regNo
  // trade_name
  // type_of_business
  // type_of_incorporation
  // user_id yes}

  const columns = [
    { name: "LegalName", selector: (row) => row?.legal_name, width: "250px" },
    {
      name: "Company_Email",
      selector: (row) => row?.company_email,
      width: "300px",
    },
    // {
    //   name: "No_of_employee",
    //   selector: (row) => row?.No_of_employee,
    //   width: "250px",
    // },
    {
      name: "Country of Registration",
      selector: (row) => row?.country_of_reg,
      width: "250px",
    },
    // {
    //   name: "date_of_incorporation",
    //   selector: (row) => row?.date_of_incorporation,
    //   width: "250px",
    // },
    {
      name: "Actions",
      cell: (row) => (
        <>
          <div className="rounded-full bg-gray-800 p-2">
            <Link
              to={`/admin/llc/records/${row?.legal_name}`}
              className="text-white"
            >
              <MdLink className="w-4 h-4" />
            </Link>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => handleDelete("llc", row?.user_id)}
              className="text-red-600 hover:text-red-700 cursor-pointer"
              disabled={isDeleting}
            >
              <MdDelete className="w-6 h-6" />
            </button>
          </div>
          <div className="rounded-full bg-gray-800 p-2">
            <Link
              to={`/admin/llc/documents/${row?.user_id}`}
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
            <Status email={row?.company_email} status="approve" />
            <Status email={row?.company_email} status="decline" />
          </div>
        );
      },
      width:"230px"
    },
  ];

  const handleSearch = async () => {
    try {
      setLoading(true);

      if (!searchValue.trim()) {
        setLoading(false);
        return;
      }

      const legalName = searchValue.trim();
      const data = await customFetch.post(
        `v2nclientDetailsResponse?search=${legalName}`
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
    downloadBtn = <Csv mode="llc" recordsData={recordsData} />;
  }

  return (
    <div className="w-full z-50 py-10 shadow-xl">
      <div className="py-4 px-4">
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
          noDataComponent={<p>No Records found</p>}
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

export default LllcTable;
