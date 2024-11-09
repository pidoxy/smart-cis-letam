import React, { PureComponent } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

// Define the type for each data item
type DataItem = {
  name: string;
  value: number;
};

// Define the props interface for the component
interface Props {
  data: DataItem[];
}

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#883DCF"];

export default class PieChartComponent extends PureComponent<Props> {
  static demoUrl =
    "https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o";

  render() {
    const { data } = this.props; // Destructure data from props

    return (
      <div>
        <PieChart width={400} height={400} className="">
          <Pie
            data={data}
            cx={120}
            cy={200}
            innerRadius={70}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
        <ul className="text-black">
          {data.map((item, index) => (
            <li key={item.name} className="flex items-center">
              <div className={`h-10 w-10 bg-[${COLORS[index]}]`}>
                {COLORS[index]}
              </div>
              <p>
                {item.name}: <span>{item.value}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
