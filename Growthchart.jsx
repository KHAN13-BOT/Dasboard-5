import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function Growthchart() {

  const data = [
    { month: "Jan", users: 400 },
    { month: "Feb", users: 700 },
    { month: "Mar", users: 500 },
    { month: "Apr", users: 900 },
    { month: "May", users: 1200 },
    { month: "Jun", users: 1000 },
  ];

  return (
    <div className='w-2/4 h-72 bg-gray-200 rounded p-4 ml-5'>

      <h1 className='text-xl font-bold mb-4'>
        User Growth
      </h1>

      <ResponsiveContainer width="100%" height="80%">

        <LineChart data={data}>

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="users"
            stroke="#2563eb"
            strokeWidth={3}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  )
}