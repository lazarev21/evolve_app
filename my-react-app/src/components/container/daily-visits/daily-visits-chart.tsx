import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Item from "../item";
import { evolve_data } from "../../../../../evolve_data";
import { formatDateForChart } from "../../../core/utils/formate-date-for-chart";

const amountDaysOnChart = 7;
const data = evolve_data.content.visitsCount
  .slice(-amountDaysOnChart)
  .map((item: { date: string; value: number }) => ({
    ...item,
    date: formatDateForChart(item.date),
  }));

export default function DailyVisitsChart() {
  return (
    <Item width={"95%"} height={"130px"} sx={{ backgroundColor: "#fff" }}>
      <ResponsiveContainer>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="30%" stopColor="#3366FF" stopOpacity={1} />
              <stop offset="90%" stopColor="#3366FF" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="date"
            angle={0}
            interval={1}
            fontFamily={"Gilroy"}
            fontSize={"12px"}
          />
          <YAxis padding={{ top: 5 }} fontFamily={"Gilroy"} fontSize={"12px"} />
          <Tooltip />
          <Area
            type="linear"
            dataKey="value"
            stroke="false"
            fill="url(#colorUv)"
            dot={{
              stroke: "#3366FF",
              strokeWidth: 0.5,
              fillOpacity: 1,
              fill: "#3366FF",
            }}
            baseLine={1}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Item>
  );
}
