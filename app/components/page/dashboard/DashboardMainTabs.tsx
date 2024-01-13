import React from "react";
import { Label } from "~/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { mainTabsData } from "./data/data";

type Props = {};

const DashboardTabs = (props: Props) => {
  return (
    <Tabs
      defaultValue="overview"
      className="w-[400px] bg-transparent shadow-none"
    >
      <TabsList className="bg-transparent">
        {mainTabsData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center"
          >
            <TabsTrigger
              value={item.id}
              className="data-[state=active]:shadow-none border-0"
            >
              <p className="hover:text-black">{item.name}</p>
            </TabsTrigger>
          </div>
        ))}
      </TabsList>
    </Tabs>
  );
};

export default DashboardTabs;
