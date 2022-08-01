import React from "react";
import style from "./Security.module.scss";

export default function ConnectItem(props) {
    return (
        <div className={style.line}>
            <div className={style.itemMax}>
            {new Date(props.createDate).toLocaleString()}</div>
            <div className={style.item}>{props.login}</div>
            <div className={style.item}>{props.location}</div>
            <div className={style.item}>{props.connected}</div>
        </div>
    );
}
