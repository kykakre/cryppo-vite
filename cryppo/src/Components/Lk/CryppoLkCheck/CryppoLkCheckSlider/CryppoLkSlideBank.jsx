import React from "react";
import style from "./CryppoLkCheckSlider.module.scss";

export default function CryppoLkSlideBank(props) {
    return (
        <div className={style.bank}>
            <div className={style.number}>{props.number}</div>
            <img src={props.logo} className={style.icon} alt="icon"/>
        </div>
    );
}
