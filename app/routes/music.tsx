import { PlusCircle } from "lucide-react";
import React from "react";
import MusicCard from "~/components/page/music/MusicCard";
import MusicMenuBar from "~/components/page/music/MusicMenuBar";
import MusicSidebar from "~/components/page/music/MusicSidebar";
import MusicTabs from "~/components/page/music/MusicTabs";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";

type Props = {};

export default function MusicPage(props: Props) {
  return (
    <Card className="flex flex-col items-center justify-center p-4 m-2 w-full h-full">
      <div className="w-full">
        <MusicMenuBar />
      </div>

      <div className="grid lg:grid-cols-5 h-full w-full border-b border-l border-r border-slate-200">
        <div className="h-full">
          <MusicSidebar />
        </div>

        <div className="col-span-3 lg:col-span-4 lg:border-l w-full h-full p-8">
          <div className="flex justify-between items-start h-full w-full">
            <MusicTabs />
            <Button className="flex gap-x-2">
              <PlusCircle size={14} /> Add music
            </Button>
          </div>
          {/* <div className="my-2 py-2">
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
            <p className="text-2xl font-semibold tracking-tight">
              Made For You
            </p>
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
          </div> */}
        </div>
      </div>
    </Card>
  );
}
