import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", Portfolio: 4000, Benchmark: 2400 },
  { name: "Feb", Portfolio: 3000, Benchmark: 1398 },
  { name: "Mar", Portfolio: 2000, Benchmark: 9800 },
  { name: "Apr", Portfolio: 2780, Benchmark: 3908 },
];

const PortfolioChart: React.FC = () => {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Portfolio" stroke="#8884d8" />
          <Line type="monotone" dataKey="Benchmark" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PortfolioChart;
