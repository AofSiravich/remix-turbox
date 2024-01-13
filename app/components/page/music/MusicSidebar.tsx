import React from "react";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "~/components/ui/command";
import {
  discoverSidebarData,
  librarySidebarData,
  playlistsSidebarData,
} from "./data/data";
import { ScrollArea } from "~/components/ui/scroll-area";

type Props = {};

const MusicSidebar = (props: Props) => {
  return (
    <Command className="h-full p-2" defaultValue="Listen Now">
      <CommandList className="min-h-[780px]">
        <CommandGroup
          heading={
            <p className="text-lg font-semibold tracking-tight text-black">
              Discover
            </p>
          }
        >
          {discoverSidebarData.map((item) => (
            <CommandItem
              key={item.name}
              className="flex gap-x-2 rounded-lg"
              value={item.name}
            >
              {item.icon}
              <span>{item.name}</span>
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandGroup
          heading={
            <p className="text-lg font-semibold tracking-tight text-black">
              Library
            </p>
          }
        >
          {librarySidebarData.map((item) => (
            <CommandItem key={item.name} className="flex gap-x-2">
              {item.icon}
              <span>{item.name}</span>
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandGroup
          heading={
            <p className="text-lg font-semibold tracking-tight text-black">
              Playlists
            </p>
          }
        >
          <ScrollArea className="h-72 mt-1">
            <div className="py-4">
              {playlistsSidebarData.map((item) => (
                <CommandItem key={item.name} className="flex gap-x-2">
                  {item.icon}
                  <span>{item.name}</span>
                </CommandItem>
              ))}
            </div>
          </ScrollArea>
        </CommandGroup>
      </CommandList>
    </Command>
  );
};

export default MusicSidebar;
