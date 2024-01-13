import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

type DashboardTopCardProps = {
  title: string;
  content: string;
  bottomContent: string;
  icon: JSX.Element;
};

const DashboardTopCard = ({
  title,
  content,
  bottomContent,
  icon,
}: DashboardTopCardProps) => {
  return (
    <Card className="max-h-[126px] flex flex-col py-2 shadow">
      <CardHeader className="flex flex-row justify-between items-center py-1">
        <CardTitle className="text-sm">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent className="text-2xl font-bold py-1">
        <p>{content}</p>
      </CardContent>
      <CardFooter className="py-1">
        <CardDescription className="text-xs">
          <p>{bottomContent}</p>
        </CardDescription>
      </CardFooter>
    </Card>
  );
};

export default DashboardTopCard;
