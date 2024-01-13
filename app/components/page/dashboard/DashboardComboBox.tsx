"use client";

import * as React from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { Button } from "~/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "~/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { cn } from "app/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Separator } from "~/components/ui/separator";
import DashboardDialog from "./DashboardDialog";
import { teams } from "./data/data";

export function DashboardComboBox() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const commandGroup = (heading: string, start: number, stop: number) => {
    return (
      <CommandGroup heading={heading}>
        {teams.slice(start, stop).map((team) => (
          <CommandItem
            key={team.value}
            value={team.value}
            onSelect={(currentValue) => {
              setValue(currentValue === value ? "" : currentValue);
              setOpen(false);
            }}
            className="flex gap-x-2"
          >
            <Avatar className="w-8 h-8">
              <AvatarImage src="" alt="@shadcn" />
              <AvatarFallback>
                {team.label.substring(0, 1).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            {team.label}
            <CheckIcon
              className={cn(
                "ml-auto h-4 w-4",
                value === team.value ? "opacity-100" : "opacity-0"
              )}
            />
          </CommandItem>
        ))}
      </CommandGroup>
    );
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          <Avatar className="w-6 h-6">
            <AvatarImage src="" alt="@shadcn" />
            <AvatarFallback>
              {value
                ? teams
                    .find((team) => team.value === value)
                    ?.label.substring(0, 1)
                    .toUpperCase()
                : teams[0].label.substring(0, 1)}
            </AvatarFallback>
          </Avatar>
          {value
            ? teams.find((team) => team.value === value)?.label
            : teams[0].label}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search team..." className="h-9" />
          <CommandEmpty>No team found.</CommandEmpty>
          {commandGroup("Personal Account", 0, 1)}
          {commandGroup("Teams", 1, 3)}
          <Separator />
          <CommandItem className="my-1 mx-1">
            <DashboardDialog />
          </CommandItem>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
