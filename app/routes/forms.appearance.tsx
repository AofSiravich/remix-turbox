import React from "react";
import FormsAccount from "~/components/page/forms/FormsAccount";
import FormsAppearance from "~/components/page/forms/FormsAppearance";
import FormsProfile from "~/components/page/forms/FormsProfile";
import { SidebarNav } from "~/components/page/forms/SidebarNav";
import Forms from "~/components/page/forms/forms";
import { Card } from "~/components/ui/card";

type Props = {};

const FormsAppearancePage = (props: Props) => {
  return (
    <Card className="p-4 m-4">
      <Forms>
        <FormsAppearance />
      </Forms>
    </Card>
  );
};

export default FormsAppearancePage;
