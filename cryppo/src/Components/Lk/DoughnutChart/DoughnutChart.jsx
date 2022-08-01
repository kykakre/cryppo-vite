import React from "react";
import style from "./DoughnutChart.module.scss";
import { Doughnut } from "react-chartjs-2";
import ChartText from "../StatisticCash/ChartText";
import StatisticCashItem from "../StatisticCash/StatisticCashItem";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = (props) => {
    let dataItems = [];
    let isEmpty = false;
    let backgroundColorItems = [];
    props.operations.map((e) => {
        if (e.disable === false) {
            dataItems.push(e.percent);
            backgroundColorItems.push(e.color);
        }
    });
    if (dataItems.length === 0) isEmpty = true;
    let elementItem = props.operations.map((e) => (
        <StatisticCashItem
            percent={e.percent}
            id={e.id}
            key={e.id}
            color={e.color}
            category={e.category}
            cash={e.cash}
            disable={e.disable}
            operationType={props.operationType}
        />
    ));
    const options = {
        plugins: {
            tooltip: {
                enabled: false,
            },
        },
        layout: {
            padding: {
                bottom(ctx) {
                    const chart = ctx.chart;
                    let pb = 0;
                    chart.data.datasets.forEach(function (el) {
                        const hOffset = el.hoverOffset || 0;
                        pb = Math.max(hOffset / 2 + 5, pb);
                    });
                    return pb;
                },
            },
        },
        cutout: props.big ? 180 : 110,
    };
    const data = {
        labels: [],
        datasets: [
            {
                data: dataItems,
                backgroundColor: backgroundColorItems,
                borderWidth: 0,
                hoverOffset: 20,
            },
        ],
    };
    return (
        <div className={style.flex}>
            <div className={style.items}>{elementItem}</div>
            <div className={style.chartInner}>
                <Doughnut data={data} options={options} />
                <ChartText
                    isEmpty={isEmpty}
                    isHover={props.isHover}
                    doughuntTextData={props.doughuntTextData}
                />
            </div>
        </div>
    );
};

export default DoughnutChart;
