import React from "react";
import style from "./Statistic.module.scss";
import StatisticItem from "./StatisticItem";
import SubtitleLk from "../../UI/SubtitleLk/SubtitleLk";

export default function Statistic(props) {
  let elementItem = props.statistic.map((e) => (
    <StatisticItem
      id={e.id}
      key={e.id}
      icon={e.icon}
      title={e.title}
      text={e.text}
      descripthion={e.descripthion}
    />
  ));
  return (
    <div className="">
      <SubtitleLk arrow={true} subtitle="Последние операции" />
      <div className={style.container}>
        <div className={style.items}>{elementItem}</div>
      </div>
    </div>
  );
}
