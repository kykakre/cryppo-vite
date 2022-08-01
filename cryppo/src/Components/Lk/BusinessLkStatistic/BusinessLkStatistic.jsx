import React from "react";
import SubtitleLk from "../../UI/SubtitleLk/SubtitleLk";
import Check from "../CheckLk/Check";
import DoughnutChart from "../DoughnutChart/DoughnutChart";
import CompositionIndex from "../CompositionIndex/CompositionIndex";
import StatisticIndex from "../../Landing/StatisticIndex/StatisticIndex";
export default function LkStatistic(props) {
    const expenses = props.expenses.filter((e) => {
        if (e.parentCategory == undefined) return e;
    });
    return (
        <div className="main container">
            <div className="flex ">
                <div className="sidebar">
                    <div className="sidebar__inner">
                        <SubtitleLk arrow={false} subtitle="Счета" />
                        <Check
                            isBankCard={false}
                            cardList={props.cardList}
                            currencyList={props.currencyList}
                        />
                    </div>
                </div>
                <div className="content">
                    <SubtitleLk subtitle="Статистика" />
                    <div className="block">
                        <DoughnutChart
                            operationType="expenses"
                            updateChart={props.updateChart}
                            filter={true}
                            isHover={props.isHover}
                            operations={expenses}
                            doughuntTextData={props.doughuntTextData}
                        />
                    </div>
                    <SubtitleLk arrow={true} subtitle="Статистика валют" />
                    <CompositionIndex
                        RevenuePostTC={props.RevenuePostTC}
                        revenue={props.barData.compositions}
                        compositionActiveIndex={props.barData.activeIndex}
                    />
                </div>
            </div>
            <SubtitleLk arrow={true} subtitle="Статистика поступлений" />
            <StatisticIndex
                ChartPostTC={props.ChartPostTC}
                chartIndex={props.chartIndex}
            />
        </div>
    );
}
