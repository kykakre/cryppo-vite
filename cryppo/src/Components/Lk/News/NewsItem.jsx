import React from "react";
import style from "./News.module.scss";
import { NavLink } from "react-router-dom";
export default function NewsItem(props) {
  return (
    <NavLink to="pageWork/">
      <div className={style.item}>
        <div className={style.inner}>
          <img src={props.img} alt="background" />
          <p>{props.text}</p>
        </div>
      </div>
    </NavLink>
  );
}
