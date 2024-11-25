import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { customFetch } from "../util/http";
import { useSingleRecordContext } from "../context/singleRecordContext";
import Docs from "../components/documents/Docs";
import { IoMdArrowRoundBack } from "react-icons/io";

const OldDoc = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const { documents, setDocuments } = useSingleRecordContext();

  useEffect(() => {
    fetchDocuments(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const fetchDocuments = async (id) => {
    setLoading(true);
    try {
      const { data } = await customFetch.post(`oldkycformfiles/${id}`);
      setDocuments(data);
    } catch (error) {
      console.error("Error fetching documents:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="px-8">
      <Link
        to={"/admin/old-records"}
        className="flex items-center rounded-full bg-black h-10 w-10 p-2 text-end fixed right-4"
      >
        <IoMdArrowRoundBack className="text-white" size={32} />
      </Link>
      <section className="text-center mt-8 py-20">
        <h2 className="text-2xl font-bold mb-4">Documents</h2>
        {loading ? (
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-blue-500 border-solid"></div>
          </div>
        ) : documents?.length ? (
          <table className="w-full bg-white border border-gray-200">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="py-2">File Name</th>
                <th className="py-2">Download</th>
              </tr>
            </thead>
            <tbody>
              {documents.map((doc) => (
                <Docs key={doc.id} doc={doc} />
              ))}
            </tbody>
          </table>
        ) : (
          <p>No documents found</p>
        )}
      </section>
    </section>
  );
};

export default OldDoc;
