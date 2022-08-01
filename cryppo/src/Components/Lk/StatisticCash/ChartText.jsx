import React from "react";
import { CSSTransition } from "react-transition-group";
import style from "./StatisticCash.module.scss";
export default function ChartText(props) {
    const chartText = props.doughuntTextData;
    const classNames = {
        appear: `${style.hover}`,
        enter: `${style.hoverEnter}`,
        enterDone: `${style.hoverEnterDone}`,
        exit: `${style.hoverExit}`,
        exitDone: `${style.hoverExitDone}`,
    };
    return (
        <CSSTransition
            in={props.isHover}
            classNames={{ ...classNames }}
            timeout={300}
        >
            {props.isEmpty == true ? (
                <div className={style.statisticBlock}>
                    <div>Нет данных</div>
                </div>
            ) : (
                <div className={style.statisticBlock}>
                    <div className={style.statisticName}>
                        {chartText.category}
                    </div>
                    <div className={style.statisticCash}>
                        {chartText.cash} USD
                    </div>
                    <div className={style.statisticPercent}>
                        {chartText.percent} %
                    </div>
                </div>
            )}
        </CSSTransition>
    );
}
