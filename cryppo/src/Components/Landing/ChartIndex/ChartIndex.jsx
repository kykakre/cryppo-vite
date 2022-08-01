import React, { useEffect } from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const divStyle = {
    color: "white",
    opacity: "0.7",
    borderTop: "1px solid rgba(255, 255, 255,0.5)",
};
const wrapperStyle = {
    background: "linear-gradient(91.42deg, #2F69FF 0%, #00C0A9 100%)",
    borderRadius: "5px",
    boxShadow: "0px 0px 20px rgba(47, 105, 255, 0.38)",
    border: "none",
};
export default function ChartIndex(props) {
    const month = [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
    ];
    const data = props.chartIndex.map((e) => {
        return { date: month[new Date(e.date).getMonth], Цена: e.amount };
    });

    return (
        <ResponsiveContainer width="100%" height={220}>
            <AreaChart
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
            >
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop
                            offset="0%"
                            stopColor="#2c6efa"
                            stopOpacity={0.7}
                        />
                        <stop
                            offset="100%"
                            stopColor="#02bdad"
                            stopOpacity={0.13}
                        />
                    </linearGradient>
                </defs>
                <CartesianGrid vertical={false} strokeDasharray="0.5" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip contentStyle={wrapperStyle} itemStyle={divStyle} />
                <Area
                    dot={false}
                    activeDot={{
                        stroke: "rgba(64, 255, 232, 0.37)",
                        strokeWidth: 5,
                        r: 5,
                    }}
                    type="linear"
                    dataKey="Цена"
                    stroke="#40FFE8"
                    fill="url(#colorUv)"
                />
            </AreaChart>
        </ResponsiveContainer>
    );
}
