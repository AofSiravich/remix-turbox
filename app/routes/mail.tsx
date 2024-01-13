import React from "react";
import { MailMain } from "~/components/page/mail/Mail";
import MailComboBox from "~/components/page/mail/MailComboBox";
import { accounts, mails } from "~/components/page/mail/data/data";
import { Card } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";

type Props = {};

const MailPage = (props: Props) => {
  return (
    <Card className="m-4 hidden flex-col md:flex">
      <MailMain
        accounts={accounts}
        mails={mails}
        defaultLayout={undefined}
        defaultCollapsed={undefined}
        navCollapsedSize={4}
      />
    </Card>
  );
};

export default MailPage;
