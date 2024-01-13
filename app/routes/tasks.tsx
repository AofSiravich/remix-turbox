import React from "react";
import Tasks from "~/components/page/tasks/Tasks";
import { Card } from "~/components/ui/card";

type Props = {};

const TasksPage = (props: Props) => {
  return (
    <Card className="p-4 m-4">
      <Tasks />
    </Card>
  );
};

export default TasksPage;
