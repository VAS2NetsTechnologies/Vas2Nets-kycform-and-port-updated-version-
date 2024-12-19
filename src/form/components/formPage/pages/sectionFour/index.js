import React, { useEffect, useState } from "react";
import { IoDocumentSharp } from "react-icons/io5";
import Heading from "../../../utils/Heading";
import { useNavigate } from "react-router-dom";
import { useFormCtx } from "../../../../context/formContext/formContext";
import Controls from "../../../controls/Control";
import Documents from "./Documents";
import { toast } from "react-toastify";
import Footer from "../../../footer/Footer";
import Declaration from "./Declaration";
import { customFetch } from "../../../../utils/http";
import Modal from "./Modal";

const SectionFour = () => {
  const [loading, setLoading] = useState(false);
  const [errorModal, setErrorModal] = useState(false);

  const navigate = useNavigate();

  const { state, coporateInfo, hasFileErrors } = useFormCtx();

  const {
    authorizedSignatory1,
    designation1,
    authorizedSignatory2,
    designation2,
    signatoryDate,
    nameOfDeclarator,
    declaratorDate,
    declaratorPosition,
  } = coporateInfo[0];

  const { documents } = state;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const signatories = [
    {
      authorizedSignatory1: {
        name: authorizedSignatory1,
        designation: designation1,
      },
      authorizedSignatory2: {
        name: authorizedSignatory2,
        designation: designation2,
      },
      signatoryDate: signatoryDate,
    },
  ];

  const declarator = [
    {
      declaration: {
        name: nameOfDeclarator,
        date: declaratorDate,
        position: declaratorPosition,
      },
    },
  ];

  const handleFileErrors = () => {
    const fileErrors = {};

    Object.entries(documents[0]).forEach(([key, value]) => {
      if (key !== "otherRelevantLicenseDoc" && !value) {
        fileErrors[key] = true;
      }
    });

    return fileErrors;
  };

  const handleSubmitHere = async (e) => {
    e.preventDefault();

    setLoading(true);

    const fileErrors = handleFileErrors();

    if (Object.keys(fileErrors).length > 0) {
      toast.error("Please fill all required fields in the Documents section", {
        position: "top-center",
        autoClose: 5000,
        closeOnClick: true,
        draggable: true,
      });
      setLoading(false);
      return;
    }

    if (hasFileErrors()) {
      toast.error("UPLOAD ALL REQUIRED FILES", {
        position: "top-center",
        autoClose: 5000,
        closeOnClick: true,
        draggable: true,
        theme: "dark",
      });
      setLoading(false);
      return;
    }

    // formData instance for documents and declarators
    const formDataDocSig = new FormData();
    const legalName = localStorage.getItem("ln");
    formDataDocSig.append("legalName", legalName);
    formDataDocSig.append("signatories", JSON.stringify(signatories));
    formDataDocSig.append("declarator", JSON.stringify(declarator));

    Object.entries(documents[0]).forEach(([key, value]) => {
      formDataDocSig.append(key, value);
    });

    // end of instance

    try {
      const { data } = await customFetch.post(
        "v2nclientspostAndUploadFiles",
        formDataDocSig
      );

      if (!data?.message || data.message !== "sent successfully") {
        toast.error("Something went wrong. Please try again.", {
          position: "top-center",
          autoClose: 5000,
          closeOnClick: true,
          draggable: true,
        });
        setErrorModal(true);
      } else {
        toast.success("Successfully submitted!", {
          position: "top-center",
          autoClose: 4000,
          closeOnClick: true,
          draggable: true,
        });
        setTimeout(() => {
          navigate("/success");
        }, 4000);
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.", {
        position: "top-center",
        autoClose: 5000,
        closeOnClick: true,
        draggable: true,
      });
      setErrorModal(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      {errorModal && (
        <Modal title="Error Occurred" onClose={() => setErrorModal(false)}>
          <p>There was an error during submission. Please try again later.</p>
        </Modal>
      )}
      <div className="heading flex items-center space-x-2">
        <IoDocumentSharp className="text-2xl text-red-600 font-bold" />
        <Heading text="Documents" />
      </div>
      <section className="documents ">
        <header>
          <h1 className="text-red-600 font-bold py-8 text-xl">
            Maximum size of documents to be uploaded should be 5MB (in PDF &
            DOCX)
          </h1>
        </header>
        <form onSubmit={handleSubmitHere} encType="multipart/form-data">
          <div className="sections">
            <div className="px-6 md:px-2">
              <Documents />
            </div>

            <Declaration />
          </div>

          <Controls back={4} loading={loading} />
          <Footer />
        </form>
      </section>
    </section>
  );
};

export default SectionFour;
