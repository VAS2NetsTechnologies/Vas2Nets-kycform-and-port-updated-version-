import React, { useState, useEffect } from "react";
import Ownership from "./ownership/Ownership";
import Controls from "../../../controls/Control";
import Footer from "../../../footer/Footer";
import { useStepContext } from "../../../../context/stepContext/stepContext";
import Board from "./board/Board";
import { useFormCtx } from "../../../../context/formContext/formContext";
import { customFetch } from "../../../../utils/http";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

const SectionTwo = () => {
  const { handleStep } = useStepContext();
  const { state } = useFormCtx();
  const [loading, setLoading] = useState(false);

  const { boards, shareHolders } = state;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmitHere = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formDataBS = new FormData();
    const legalName = localStorage.getItem("ln");
    formDataBS.append("legalName", legalName);
    formDataBS.append("boards", JSON.stringify(boards));
    formDataBS.append("shareHolders", JSON.stringify(shareHolders));

    try {
      const { data } = await customFetch.post(
        "getv2nClientsBoardInfo",
        formDataBS
      );
      if (data?.status === "successful") {
        toast.success("Successfully submitted!", {
          position: "top-center",
          autoClose: 4000,
          closeOnClick: true,
          draggable: true,
        });
        setTimeout(() => {
          handleStep(3);
        }, 4000);
      } else {
        toast.error("Something went wrong. Please try again.", {
          position: "top-center",
          autoClose: 5000,
          closeOnClick: true,
          draggable: true,
        });
        setLoading(false);
      }
    } catch (error) {
      console.error("Something went wrong:", error);
      toast.error("Something went wrong. Please try again.", {
        position: "top-center",
        autoClose: 5000,
        closeOnClick: true,
        draggable: true,
      });
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmitHere}>
      <Board />
      <Ownership />

      <div className="">
        <Controls loading={loading} back={1} />
      </div>
      <Footer />
    </form>
  );
};

export default SectionTwo;
