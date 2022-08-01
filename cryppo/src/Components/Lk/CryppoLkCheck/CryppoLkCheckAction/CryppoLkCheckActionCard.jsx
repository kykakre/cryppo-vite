import React from "react";
import style from "./CryppoLkCheckAction.module.scss";
import gipo from "../../../../Images/icon/gipo.svg";
export default function CryppoLkCheckActionCard(props) {
  return (
    <div className={style.card}>
      <div className={style.text}>{props.text}</div>
      <img className={style.icon} src={gipo} alt="icon" />
    </div>
  );
}
