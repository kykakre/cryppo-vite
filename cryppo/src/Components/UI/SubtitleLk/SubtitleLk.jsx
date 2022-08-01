import React from "react";
import style from "./SubtitleLk.module.scss";
export default function SubtitleLk(props) {
  return (
    <p
      className={
        props.arrow ? `${style.subtitle} ${style.arrow}` : `${style.subtitle}`
      }
    >
      {props.subtitle}
    </p>
  );
}
