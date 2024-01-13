import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "~/components/ui/card";

type Props = {};

const recentSalesData = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    sale: "+$1,999.00",
  },
  {
    name: "Jackson Lee",
    email: "jackson.lee@email.com",
    sale: "+$39.00",
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    sale: "+$299.00",
  },
  {
    name: "William Kim",
    email: "will@email.com",
    sale: "+$99.00",
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    sale: "+$39.00",
  },
];

const DashboardRecentSales = (props: Props) => {
  return (
    <Card className="rounded-xl border bg-card text-card-foreground shadow col-span-3 w-full">
      <CardHeader>
        <h1 className="font-semibold leading-none tracking-tight">
          Recent Sales
        </h1>
        <CardDescription>
          <p>You made 265 sales this month.</p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        {recentSalesData.map((item) => (
          <div
            key={item.email}
            className="flex flex-row gap-8 justify-between items-center m-2 p-2"
          >
            <div className="flex flex-row gap-8">
              <Avatar>
                <AvatarImage
                  src="https://pbs.twimg.com/profile_images/1349074396240883712/8e3wxp1m_400x400.jpg"
                  alt="@shadcn"
                />
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
              <div className="flex flex-col justify-center items-start">
                <p className="text-sm font-medium leading-none">{item.name}</p>
                <p className="text-sm text-gray-500">{item.email}</p>
              </div>
            </div>

            <p className="font-medium">{item.sale}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default DashboardRecentSales;
