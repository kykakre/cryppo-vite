import React from "react";
import { BarChart, Bar, XAxis, ResponsiveContainer, Cell } from "recharts";
import style from "./MyBar.module.scss";
import { randomColor } from "../../../Utils/tools";
import { useDispatch } from "react-redux";
const MyBar = (props) => {
    const dispatch = useDispatch();
    const renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
        return (
            <text
                x={x + width / 2}
                y={y}
                fill="#FFFFFF"
                textAnchor="middle"
                dy={-6}
            >
                {`${value}`}
            </text>
        );
    };
    return (
        <div style={{ height: `${props.height}` }} className={style.transition}>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={150}
                    height={40}
                    data={props.revenue}
                    margin={{
                        top: 30,
                        right: 10,
                        left: 10,
                        bottom: 15,
                    }}
                >
                    <Bar
                        className={style.transition}
                        dataKey="amount"
                        fill="#6D6D6D"
                        barSize={65}
                        radius={[8, 8, 0, 0]}
                        label={renderCustomBarLabel}
                        minPointSize={10}
                    >
                        {props.revenue.map((entry, index) => (
                            <Cell
                                className={style.transition}
                                cursor="pointer"
                                fill={
                                    index === props.activeIndex ||
                                    props.allwaysColor
                                        ? entry.color ?? randomColor()
                                        : "#6D6D6D"
                                }
                                key={`cell-${index}`}
                                onMouseEnter={() => {
                                    dispatch(props.changeActiveIndex(index));
                                }}
                                onMouseLeave={() => {
                                    dispatch(props.changeActiveIndex(-1));
                                }}
                            />
                        ))}
                    </Bar>
                    <XAxis tickMargin={20} dataKey="name" tickLine={false} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default MyBar;
