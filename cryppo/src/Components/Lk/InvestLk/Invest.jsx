import React from "react";
import style from "./InvestLk.module.scss";
export default function Invest(props) {
  return (
    <div className={style.block}>
      <div className={style.circle}>
        <img src={props.invest.icon} className={style.icon}></img>
      </div>
      <div className={style.wrapper}>
        <div className={style.textWrapper}>
          <div className={style.title}>{props.invest.title}</div>
          <div className={style.text}>{props.invest.crypto}</div>
          <div className={style.text}>$ {props.invest.cash}</div>
          <div className={style.povered}>{props.invest.povered}</div>
        </div>
        <img src={props.invest.poveredIcon} className={style.poveredIcon}></img>
      </div>
    </div>
  );
}
