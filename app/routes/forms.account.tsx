import React from "react";
import FormsAccount from "~/components/page/forms/FormsAccount";
import FormsProfile from "~/components/page/forms/FormsProfile";
import { SidebarNav } from "~/components/page/forms/SidebarNav";
import Forms from "~/components/page/forms/forms";
import { Card } from "~/components/ui/card";

type Props = {};

const FormsAccountPage = (props: Props) => {
  return (
    <Card className="p-4 m-4">
      <Forms>
        <FormsAccount />
      </Forms>
    </Card>
  );
};

export default FormsAccountPage;
