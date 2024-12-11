import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSingleRecordContext } from "../../../context/singleRecordContext";
import { customFetch } from "../../../util/http";
import TabComp from "../../tabs/TabComp";

const SingleIndi = () => {
  const { id } = useParams();
  const { setQuestionnaires, setSocials, setLoading } =
    useSingleRecordContext();

  useEffect(() => {
    fetchSingleUserRecord(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const fetchSingleUserRecord = async (id) => {
    setLoading(true);
    try {
      const { data } = await customFetch.post(
        `getv2nindividualRecords?search=${id}`
      );

        // console.log(data);

      //   console.log(data?.data?.message[0]);
      setQuestionnaires(data?.data?.message[0]?.pepStatus);
      setSocials(data?.data?.message[0]?.socialMedias);
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
          <TabComp mode="indi" />
        </div>
      </div>
    </section>
  );
};

export default SingleIndi;
