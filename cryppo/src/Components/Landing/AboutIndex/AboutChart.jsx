
// import React from "react";
// import {
//     AreaChart,
//     Area,
//     XAxis,
//     YAxis,
//     CartesianGrid,
//     Tooltip,
//     ResponsiveContainer
// } from "recharts";

// const data = [
//     {
//         name: "0",
//         Цена: 30_000,
//         pv: 2400,
//         amt: 2400
//     },
//     {
//         name: "5",
//         Цена: 25_000,
//         pv: 1398,
//         amt: 2210
//     },
//     {
//         name: "10",
//         Цена: 65_000,
//         pv: 1398,
//         amt: 2210
//     },
// ];

// export default function AboutChart() {
//     return (
//         <ResponsiveContainer width="100%" height='100%'>
//             <AreaChart
//                 width={500}
//                 height={400}
//                 data={data}
//                 margin={{
//                     top: 0,
//                     right: 0,
//                     left: 0,
//                     bottom: 0
//                 }}
//             >
//                 <defs>
//                     <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
//                         <stop offset="0%" stopColor="#2c6efa" stopOpacity={0.7} />
//                         <stop offset="100%" stopColor="#02bdad" stopOpacity={0.13} />
//                     </linearGradient>
//                 </defs>
//                 <CartesianGrid vertical={false} strokeDasharray="0.5" />
//                 <XAxis dataKey="name" color="#FFFFFF"/>
//                 <YAxis width={5} />
//                 <Area dot={false} activeDot={{ stroke: 'rgba(64, 255, 232, 0.37)', strokeWidth: 5, r: 5 }} type="linear" dataKey="Цена" stroke="#40FFE8" fill="url(#colorUv)" />
//             </AreaChart>
//         </ResponsiveContainer>

//     );
// }



import React from "react";
import chart from '../../../Images/chart.svg'
import style from './AboutIndex.module.scss'
export default function AboutChart(){
    return(
        <img className={style.chartImg} src={chart}>
        </img>
    )
}


