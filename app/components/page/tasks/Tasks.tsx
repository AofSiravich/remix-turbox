import { z } from "zod";

import { taskSchema } from "./data/schema";
import { UserNav } from "./UserNav";
import { DataTable } from "./DataTable";
import { columns } from "./Columns";
import { tasks } from "./data/tasks";

export default function Tasks() {
  const tasksData = z.array(taskSchema).parse(tasks);

  return (
    <>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your tasks for this month!
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <UserNav />
          </div>
        </div>
        <DataTable data={tasksData} columns={columns} />
      </div>
    </>
  );
}
