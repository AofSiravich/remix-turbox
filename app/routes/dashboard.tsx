import { Label } from "@radix-ui/react-label";
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";
import { DashboardComboBox } from "~/components/page/dashboard/DashboardComboBox";
import DashboardBarChart from "~/components/page/dashboard/DashboardBarChart";
import DashboardMenuBar from "~/components/page/dashboard/DashboardMainTabs";
import DashboardSubMenuBar from "~/components/page/dashboard/DashboardSubTabs";
import DashboardTopCard from "~/components/page/dashboard/DashboardTopCard";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import DashboardRecentSales from "~/components/page/dashboard/DashboardRecentSales";

type Props = {};

const topCardData = [
  {
    title: "Total Revenue",
    content: "$45,231.89",
    bottomContent: "+20.1% from last month",
    icon: <DollarSign size={18} color="gray" />,
  },
  {
    title: "Subscriptions",
    content: "+2350",
    bottomContent: "+180.1% from last month",
    icon: <Users size={18} color="gray" />,
  },
  {
    title: "Sales",
    content: "+12,234",
    bottomContent: "+19% from last month",
    icon: <CreditCard size={18} color="gray" />,
  },
  {
    title: "Active Now",
    content: "+573",
    bottomContent: "+201 since last hour",
    icon: <Activity size={18} color="gray" />,
  },
];

export default function DashboardPage({}: Props) {
  return (
    <Card className="flex flex-col items-center justify-center p-4 m-4 w-full">
      <CardHeader className="w-full">
        <div className="flex gap-x-4 w-full justify-between">
          <div className="flex gap-x-4">
            <DashboardComboBox />
            <DashboardMenuBar />
          </div>
          <div className="flex gap-x-4">
            <Input type="text" placeholder="Search..." />
            <Avatar>
              <AvatarImage
                src="https://pbs.twimg.com/profile_images/1349074396240883712/8e3wxp1m_400x400.jpg"
                alt="@shadcn"
              />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </CardHeader>
      <CardContent className="w-full flex flex-col gap-4">
        <Label className="text-left text-3xl font-semibold">Dashboard</Label>
        <DashboardSubMenuBar />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {topCardData.map((item) => (
            <DashboardTopCard key={item.title} {...item} />
          ))}
        </div>
        <div className="flex gap-4">
          <DashboardBarChart />
          <DashboardRecentSales />
        </div>
      </CardContent>
    </Card>
  );
}
