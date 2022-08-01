import React from "react";
import style from "./Description.module.scss";
const Descriptionitem = (props) => {
  return (
    <div className={style.item}>
      <img src={props.img} alt="icon" />

      <div className={style.wrapper}>
        <div className={style.number}>
          {props.number}
          <span>+</span>
        </div>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default Descriptionitem;
