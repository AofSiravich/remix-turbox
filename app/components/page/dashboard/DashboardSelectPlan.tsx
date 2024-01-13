"use client";

import * as React from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { Button } from "app/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "app/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "app/components/ui/popover";
import { cn } from "app/lib/utils";
import { planData } from "./data/data";

export function DashboardSelectPlan() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[250px] justify-between"
        >
          {value
            ? planData.find((plan) => plan.value === value)?.label
            : planData[0].label}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[250px] p-0">
        <Command>
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {planData.map((plan) => (
              <CommandItem
                key={plan.value}
                value={plan.value}
                onSelect={(currentValue: any) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                {plan.label}
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === plan.value ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
