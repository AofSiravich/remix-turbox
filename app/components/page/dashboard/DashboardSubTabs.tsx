import React from "react";
import { Label } from "~/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { subTabsData } from "./data/data";

type Props = {};

const DashboardSubTabs = (props: Props) => {
  return (
    <div>
      <Tabs defaultValue="overview" className="w-[400px]">
        <TabsList>
          {subTabsData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center"
            >
              <TabsTrigger value={item.id}>
                <p className="hover:text-black">{item.name}</p>
              </TabsTrigger>
            </div>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};

export default DashboardSubTabs;
