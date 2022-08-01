import React from "react";
import style from "./CryppoLkCheckSlider.module.scss";
import plus from "../../../../Images/plus.svg";
export default function CryppoLkSlide(props) {
  return (
    <>
      <div className={style.text}>Баланс кошелька {props.text}</div>
      <div className={style.value}> {props.availability} </div>
      <div className={style.plus}>
        <img src={plus} alt="icon" className={style.icon} />
      </div>
    </>
  );
}
