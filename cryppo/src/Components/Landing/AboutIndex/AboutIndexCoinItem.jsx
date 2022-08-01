import React from "react";
import style from "./AboutIndex.module.scss";
export default function AboutIndexCoinItem(props) {
  return (
    <div className={style.coinBlock}>
      <img src={props.img} alt={props.title} />
      <div className={style.coinItem}>
        <h4>{props.title}</h4>
        <p>{props.number}</p>
      </div>
    </div>
  );
}
