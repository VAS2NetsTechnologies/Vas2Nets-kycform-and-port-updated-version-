import React, { useEffect } from "react";
import { useSingleRecordContext } from "../../../context/singleRecordContext";
import { useParams } from "react-router-dom";
import { customFetch } from "../../../util/http";
import TabComp from "../../tabs/TabComp";

const SingleSole = () => {
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
        `getv2nbusinessRecords?search=${id}`
      );

      // console.log(data?.data?.message[0]);
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
          <TabComp mode="sole" />
        </div>
      </div>
    </section>
  );
};

export default SingleSole;
