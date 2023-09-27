import { useLoaderData } from "react-router-dom";
import { getArray } from "../../utility/locals";
import React, { PureComponent } from 'react';

import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';



const Statistics = () => {
    const total= useLoaderData().length
    const donation = getArray().length
    const data = [
        { name: 'Total Donation', value: total - donation },
        { name: 'My Donation', value: donation }

    ];

    const COLORS = ['#FF444A', '#00C49F'];
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(1)}%`}
            </text>
        );
    };
    return (
        <div className="flex flex-col lg:flex-row md:flex-row justify-center place-items-center">
            <div className=' flex justify-center items-center mt-10'>
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={140}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>

            </div>
            <div>
                    <div className=' flex gap-3 items-center'>Total Donation <div className=' w-[90px] h-[12px] bg-[#FF444A]'></div></div>
                    <div className=' flex gap-3 items-center'>Your Donation <div className=' w-[90px] h-[12px] bg-[#00C49F]'></div></div>

            </div>

        </div>
    );
};

export default Statistics;