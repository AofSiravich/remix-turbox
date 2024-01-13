import Forms from "~/components/page/forms/forms";
import { Card } from "~/components/ui/card";
import FormsNotifications from "../components/page/forms/FormsNotifications";

type Props = {};

const FormsNotificationsPage = (props: Props) => {
  return (
    <Card className="p-4 m-4">
      <Forms>
        <FormsNotifications />
      </Forms>
    </Card>
  );
};

export default FormsNotificationsPage;
