import { TabsContent } from "@radix-ui/react-tabs";
import React from "react";
import { Separator } from "~/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "~/components/ui/tabs";
import MusicCard from "./MusicCard";
import { Button } from "~/components/ui/button";
import { Podcast } from "lucide-react";
import { listenNowData, madeForYouData, musicMenuBarData } from "./data/data";

type Props = {};

const MusicTabs = (props: Props) => {
  return (
    <Tabs defaultValue="music" className="w-full h-full">
      <div className="flex flex-row justify-between items-center">
        <TabsList>
          {musicMenuBarData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center"
            >
              <TabsTrigger
                value={item.id}
                className="data-[state=active]:shadow-none border-0"
                disabled={item.isDisabled}
              >
                <p className="hover:text-black">{item.name}</p>
              </TabsTrigger>
            </div>
          ))}
        </TabsList>
      </div>
      <TabsContent value="music" className="w-full h-full">
        <div className="my-2 py-2">
          <p className="text-2xl font-semibold tracking-tight">Listen Now</p>
          <p className="text-sm text-gray-500">
            Top picks for you. Updated daily.
          </p>
        </div>
        <Separator className="mt-2 mb-4" />
        <div className="flex gap-x-4">
          {listenNowData.map((item) => (
            <MusicCard
              key={item.title}
              src={item.src}
              title={item.title}
              subtitle={item.subtitle}
              alt={item.title}
              height={333}
              width={250}
            />
          ))}
        </div>
        <div className="my-2 py-2">
          <p className="text-2xl font-semibold tracking-tight">Made For You</p>
          <p className="text-sm text-gray-500">
            Your personal playlists. Updated daily.
          </p>
        </div>
        <Separator className="mt-2 mb-4" />
        <div className="flex gap-x-4">
          {madeForYouData.map((item) => (
            <MusicCard
              key={item.title}
              src={item.src}
              title={item.title}
              subtitle={item.subtitle}
              alt={item.title}
              height={150}
              width={150}
            />
          ))}
        </div>
      </TabsContent>
      <TabsContent value="podcasts" className="w-full h-full">
        <div className="my-2 py-2">
          <p className="text-2xl font-semibold tracking-tight">New Episodes</p>
          <p className="text-sm text-gray-500">
            Your favorite podcasts. Updated daily.
          </p>
        </div>
        <Separator className="mt-2 mb-4" />
        <div className="w-full h-full flex justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <Podcast size={40} />
            <p className="mt-4 text-lg font-semibold">No episodes added</p>
            <p className="mb-4 mt-2 text-sm text-gray-500">
              You have not added any podcasts. Add one below.
            </p>
            <Button>Add Podcast</Button>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default MusicTabs;
