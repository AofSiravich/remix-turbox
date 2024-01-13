import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";
import { Card } from "~/components/ui/card";
import { barChartData } from "./data/data";

type Props = {};

const DashboardBarChart = (props: Props) => {
  return (
    <Card className="p-4 flex flex-col gap-4 w-max">
      <h3 className="font-semibold">Overview</h3>
      <BarChart
        width={730}
        height={500}
        data={barChartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis tickFormatter={(value) => "$" + value} />
        <Tooltip />
        <Bar dataKey="pv" fill="#000000" />
      </BarChart>
    </Card>
  );
};

export default DashboardBarChart;
