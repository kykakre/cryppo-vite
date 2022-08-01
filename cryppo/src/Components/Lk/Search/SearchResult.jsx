import React from "react";
import style from "./Searc.module.scss"

export default function SearchResult(props) {
  return (
    <div className={style.itemCon}>
      {props.result.length === 0 ? <div className={style.null}>Запрос не найден </div> : <div className={style.result}>{props.result}</div>}
    </div>
  );
}
