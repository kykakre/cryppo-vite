import React from "react";
import style from "../CardHelp/CardHelp.module.scss";
import CardHelpItem from "./CardHelpItem";

export default function CardHelp(props) {
  let item = props.help.map((e) => (
    <CardHelpItem
      id={e.id}
      key={e.id}
      flag={e.flag}
      country={e.country}
      number={e.number}
    />
  ));
  return (
    <div className={style.card}>
      <div className={style.title}>Поддержка по телефону</div>
      <div className={style.text}>
        Операторы колл-центра будут рады принять ваш запрос с понедельника по
        пятницу с 9 утра до 6 вечера по московскому времени.
      </div>
      <div className={style.items}>{item}</div>
    </div>
  );
}
