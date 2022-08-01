import React from "react";
import style from "./Statistic.module.scss";

export default function StatisticItem(props) {
  return (
    <div className={style.item}>
      <div className={style.basis}>
        <div className={style.content}>
          <div className={style.text}>{props.text}</div>
          <div className={style.title}>{props.title}</div>
        </div>
        <img src={props.icon} className={style.icon} alt="img"/>
      </div>
      <div className={style.descripthion}>{props.descripthion}</div>
    </div>
  );
}
