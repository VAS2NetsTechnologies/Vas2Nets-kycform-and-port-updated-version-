import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import One from "./one/One";
import Two from "./two/Two";
import Three from "./three/Three";

const Preview = () => {
  return (
    <div>
      <Tabs selectedTabClassName="active-tab">
        <TabList>
          <Tab>COMPANY INFORMATION</Tab>
          <Tab>SHAREHOLDERS & BENEFICIARIES</Tab>
          <Tab>QUESTIONAIRES</Tab>
        </TabList>

        <TabPanel>
          <One />
        </TabPanel>
        <TabPanel>
          <Two />
        </TabPanel>
        <TabPanel>
         <Three/>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Preview;
