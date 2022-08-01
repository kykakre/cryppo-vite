import React from "react";
import Subtitle from "../../UI/Subtitle/Subtitle";
import style from "./StatisticIndex.module.scss";
import Text from "../../UI/Text/Text";
import ChartIndex from "../ChartIndex/ChartIndex";

export default function StatisticIndex(props) {
    return (
        <div className={style.chartContainer}>
            <Subtitle className={style.subtitle}>
                Статистика роста индекса<span>.</span>
            </Subtitle>
            <div className={style.number}>867%</div>
            <Text text="Процентный показатель изменения курса индекса за все время" />
            <ChartIndex
                ChartPostTC={props.ChartPostTC}
                chartIndex={props.chartIndex}
            />
        </div>
    );
}
