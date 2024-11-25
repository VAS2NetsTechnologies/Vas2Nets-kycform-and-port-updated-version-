import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router";
import { customFetch } from "../util/http";
import { useSingleRecordContext } from "../context/singleRecordContext";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import Docs from "../components/documents/Docs";
import { useState } from "react";

const Documents = () => {
  const { id } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const mode = searchParams.get("mode");
  const { documents, setDocuments } = useSingleRecordContext();
  const [loading, setLoading] = useState();

  

  useEffect(() => {
    fetchDocuments(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const fetchDocuments = async (id) => {
    setLoading(true);
    try {
      const { data } = await customFetch.post(
        `${
          mode === "sole"
            ? "downloadv2nBusinessFiles"
            : mode === "indi"
            ? "downloadv2nindividualfiles"
            : "getv2nUploads"
        }/${id}`
      );

      setDocuments(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching documents:", error);
    }
  };

  return (
    <section className="px-8">
      <Link
        to={"/admin"}
        className="flex items-center rounded-full bg-black h-10 w-10 p-2 text-end fixed right-4"
      >
        <IoMdArrowRoundBack className="text-white " size={32} />
      </Link>
      <section className="text-center mt-8 py-20">
        <h2 className="text-2xl font-bold mb-4">Documents</h2>
        {loading ? (
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-blue-500 border-solid"></div>
          </div>
        ) : (
          <table className="w-full bg-white border border-gray-200">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="py-2">File Name</th>
                <th className="py-2">Download</th>
              </tr>
            </thead>
            <tbody>
              {documents?.map((doc) => (
                <Docs key={doc.id} doc={doc} />
              ))}
            </tbody>
          </table>
        )}
      </section>
    </section>
  );
};

export default Documents;
