import React from "react";
import { NavLink } from "react-router-dom";
import style from "./TypeTranslation.module.scss";

export default function TypeTranslationItem(props) {
  return (
    <NavLink to="/cryppo/lk/pageWork" className={style.wrapper}>
      <div className={style.title}>{props.title}</div>
      <img src={props.icon} alt="icon" />
    </NavLink>
  );
}
