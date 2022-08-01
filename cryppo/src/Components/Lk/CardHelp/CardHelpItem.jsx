import React from "react";
import style from "./CardHelp.module.scss";

export default function CardHelpItem(props) {
  return (
    <div className={style.tab}>
      <div className={style.item}>
        <img src={props.flag} className={style.flag} alt="icon" />
        <div className={style.country}>{props.country}</div>
      </div>
      <div className={style.number}>{props.number}</div>
    </div>
  );
}
