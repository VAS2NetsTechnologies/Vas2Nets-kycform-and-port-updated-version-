import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import DataTable from "react-data-table-component";
import { customFetch } from "../../util/http";
import { MdDelete } from "react-icons/md";
import { customStyles } from "../tables/styles/customStyle";

const NinTable = () => {
  const [ninRecord, setNinRecord] = useState([]);
  const [loading, setLoading] = useState(false);
  

  const fetchRecord = async (page) => {
    setLoading(true);
    const { data } = await customFetch.get(
      `getv2nNINrecords?page=${page}`
    );

    if (data) {
      setNinRecord(data);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchRecord(1);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = async (id) => {
    const { data } = await customFetch.get(`gdeleNINInfo/${id}`);

    if (data.message === "Records successfully deleted") {
      window.location.reload();
    }
  };

  const columns = [
    { name: "NIN", selector: (row) => row.ID_number, width: "200px" },
    { name: "Firstname", selector: (row) => row.firstname, width: "200px" },
    { name: "Surname", selector: (row) => row.surname, width: "200px" },
    { name: "Middlename", selector: (row) => row.middlename, width: "200px" },
    { name: "Msisdn", selector: (row) => row.msisdn, width: "200px" },
    {
      name: "Residential_Address",
      selector: (row) => row.residential_address,
      width: "200px",
    },
    {
      name: "Delete",
      cell: (row) => (
        <>
          <div className="flex items-center">
            <button
              onClick={() => handleDelete(row.ID_number)}
              className="text-red-600 hover:text-red-700 cursor-pointer"
              //   disabled={isDeleting}
            >
              <MdDelete className="w-6 h-6" />
            </button>
          </div>
        </>
      ),
    },
  ];

  return (
    <section>
      <main className="py-4">
        <DataTable
          columns={columns}
          data={ninRecord}
          progressPending={loading}
          noDataComponent={<p>No NIN Record Available</p>}
          //   onChangeRowsPerPage={handlePerRowsChange}
          //   onChangePage={handlePageChange}
          fixedHeader
          className="w-full"
          progressComponent={
            <h1 className="font-bold text-4xl">Getting NIN Data...</h1>
          }
          customStyles={customStyles}
        />
      </main>
    </section>
  );
};

export default NinTable;
