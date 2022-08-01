import React from "react";
import style from "./AddCart.module.scss";
import plus from "../../../Images/icon/plus.svg";

export default function AddCard(props) {
  return (
    <div className={style.block}>
      <div className={style.wrapper}>
        <div className={style.circle}>
          <img src={plus} className={style.icon} />
        </div>
        <div className={style.textWrapper}>
          <div className={style.title}>{props.newCard.title}</div>
          <div className={style.povered}>{props.newCard.povered}</div>
        </div>
      </div>

      <img src={props.newCard.poveredIcon} className={style.poveredIcon} />
    </div>
  );
}
