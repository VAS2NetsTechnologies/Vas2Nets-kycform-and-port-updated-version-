import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Questionnaires from "./questionnaires/Questionnaires";
import Directors from "./directors/Directors";
import Signatories from "./signatories/Signatories";
import Declarator from "./declarator/Declarator";
import { Link } from "react-router-dom";
import Socials from "./socials/Socials";

const TabComp = ({ mode }) => {
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
            {mode !== "sole" && mode !== "indi" && <Tab>Directors</Tab>}
            {mode !== "sole" && mode !== "indi" && <Tab>Signatories</Tab>}
            {mode !== "sole" && mode !== "indi" && <Tab>Declarator</Tab>}
            <Tab>Social Media Platform(s)</Tab>
          </TabList>

          <TabPanel>
            <Questionnaires />
          </TabPanel>
          {mode !== "sole" && mode !== "indi" && (
            <TabPanel>
              <Directors />
            </TabPanel>
          )}
          {mode !== "sole" && mode !== "indi" && (
            <TabPanel>
              <Signatories />
            </TabPanel>
          )}
          {mode !== "sole" && mode !== "indi" && (
            <TabPanel>
              <Declarator />
            </TabPanel>
          )}
          <TabPanel>
            <Socials />
          </TabPanel>
        </Tabs>
      </section>
    </>
  );
};

export default TabComp;
