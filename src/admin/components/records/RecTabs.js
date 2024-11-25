import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import IndiTable from "../tables/individual/IndiTable";
import LllcTable from "../tables/llc/LllcTable";
import SoleTable from "../tables/sole/SoleTable";

const RecTabs = () => {
  return (
    <>
      <section className="py-14 ">
        <Tabs selectedTabClassName="active-tabs">
          <TabList className="flex space-x-2">
            <Tab className="tab-card">Limited Liability Companies (LLCs)</Tab>
            <Tab className="tab-card">Individuals</Tab>
            <Tab className="tab-card">Sole proprietorships</Tab>
          </TabList>

          <section className="pt-20">
            <TabPanel>
              <LllcTable />
            </TabPanel>
            <TabPanel>
              <IndiTable />
            </TabPanel>
            <TabPanel>
              <SoleTable />
            </TabPanel>
          </section>
        </Tabs>
      </section>
    </>
  );
};

export default RecTabs;
