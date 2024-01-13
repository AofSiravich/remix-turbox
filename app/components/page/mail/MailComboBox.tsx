import { CaretSortIcon } from "@radix-ui/react-icons";
import { CheckIcon } from "lucide-react";
import React from "react";
import { Button } from "~/components/ui/button";
import { Command, CommandGroup, CommandItem } from "~/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { cn } from "~/lib/utils";

type Props = {};

const userData = [
  {
    value: "aliciakoch",
    label: "Alicia Koch",
  },
  {
    value: "alicia@example.com",
    label: "alicia@example.com",
  },
  {
    value: "alicia@gmail.com",
    label: "alicia@gmail.com",
  },
  {
    value: "alicia@me.com",
    label: "alicia@me.com",
  },
];

const MailComboBox = (props: Props) => {
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
            ? userData.find((data) => data.value === value)?.label
            : userData[0].label}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[250px] p-0">
        <Command>
          <CommandGroup>
            {userData.map((data) => (
              <CommandItem
                key={data.value}
                value={data.value}
                onSelect={(currentValue: any) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                {data.label}
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === data.value ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default MailComboBox;
