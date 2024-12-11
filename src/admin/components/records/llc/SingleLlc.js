import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { customFetch } from "../../../util/http";
import CustomTabComp from "../../customLlcTables/CustomTabComp";
import { usesingleLlcContext } from "../../../context/customSllc";

const SingleLlc = () => {
  const { id } = useParams();
  const {
    modifyQues,
    setBeneficiaries,
    setBoardMemberDetails,
    modifySig,
    setLoading,
  } = usesingleLlcContext();

  useEffect(() => {
    fetchSingleUserRecord(id);
  }, [id]);

  const fetchSingleUserRecord = async (id) => {
    setLoading(true);
    try {
      const { data } = await customFetch.post(
        `v2nclientDetailsResponse?search=${id}`
      );

      // console.log(data?.data?.message[0]);

      const rawQuestionnaires = data?.data?.message[0]?.questionnaires || [];
      const rawBeneficiaries =
        data?.data?.message[0]?.beneficiary_details || [];
      const rawBoard = data?.data?.message[0]?.board_member_details || [];
      const rawSignatories = data?.data?.message[0]?.signatory_details || {};

      modifyQues(rawQuestionnaires);
      setBeneficiaries(rawBeneficiaries);
      setBoardMemberDetails(rawBoard);

      const formattedSignatories = Object.values(rawSignatories);
      modifySig(formattedSignatories);

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <section className="bg-white w-full h-full mx-auto px-10 py-4">
      <div>
        <div>
          <CustomTabComp />
        </div>
      </div>
    </section>
  );
};

export default SingleLlc;
