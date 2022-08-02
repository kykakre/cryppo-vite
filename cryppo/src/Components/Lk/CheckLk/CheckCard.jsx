import React from "react";
import style from "./Check.module.scss";

export default function CheckCard(props) {
  return (
    <div className={style.cart}>
      <div className={style.cartLine}></div>
      <div className={style.cardDown}>
        <div className={style.number}>{props.number}</div>
        <img src={props.logo} className={style.logo} alt="icon"></img>
      </div>
    </div>
  );
}
