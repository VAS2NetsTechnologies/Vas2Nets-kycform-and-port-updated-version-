import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Link } from "react-router-dom";
import Ques from "./customQues/Ques";
import Ben from "./Ben";
import Board from "./Board";
import Sig from "./Sig";

const CustomTabComp = () => {
  return (
    <>
      <Link
        to={"/admin"}
        className="flex items-center rounded-full bg-black h-10 w-10 p-2 text-end fixed right-4"
      >
        <IoMdArrowRoundBack className="text-white" size={32} />
      </Link>
      <section className="py-14">
        <Tabs selectedTabClassName="active-tab">
          <TabList>
            <Tab>Questionnaires</Tab>
            <Tab>Beneficiaries</Tab>
            {<Tab>Boad Members</Tab>}
            <Tab>Signatories</Tab>
          </TabList>

          <TabPanel>
            <Ques />
          </TabPanel>
          <TabPanel>
            <Ben />
          </TabPanel>

          <TabPanel>
            <Board />
          </TabPanel>

          <TabPanel>
            <Sig />
          </TabPanel>
        </Tabs>
      </section>
    </>
  );
};

export default CustomTabComp;
