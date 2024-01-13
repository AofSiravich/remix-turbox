import React from "react";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { PlusCircle } from "lucide-react";
import { DialogClose } from "@radix-ui/react-dialog";
import { DashboardSelectPlan } from "./DashboardSelectPlan";

type Props = {};

const DashboardDialog = (props: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <p className="flex gap-x-2 justify-center items-center">
          <PlusCircle />
          Create Team
        </p>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Team</DialogTitle>
          <DialogDescription>
            Add a new team to manage products and customers.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-row-4 items-center gap-4">
            <Label htmlFor="name" className="text-left">
              Team name
            </Label>
            <Input id="name" defaultValue="Acme Inc." className="col-span-3" />
          </div>
          <div className="grid grid-row-4 items-center gap-4">
            <Label htmlFor="username" className="text-left">
              Subscription plan
            </Label>
            <DashboardSelectPlan />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" type="submit">
              Cancel
            </Button>
          </DialogClose>
          <Button>Continue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DashboardDialog;
