import React, { useState } from "react";
import style from "./GeneralSetting.module.scss";

export default function WalletSettingItem(props) {
    const [toggle, setToggle] = useState(props.active);
    return (
        <div className={style.line}>
            <input type="checkbox" className={style.input} id={props.id} />
            <label
                onClick={() => {
                    props.SetActiveCurrencyPostTC(props.currency);
                    setToggle(!toggle);
                }}
                className={style.label}
                htmlFor={props.id}
            >
                <div className={style.labelItem}>
                    <img
                        className={style.labelImg}
                        alt="icon"
                        src={props.icon}
                    />
                    <div className={style.labelText}>{props.currency}</div>
                </div>
                <div
                    className={
                        toggle
                            ? `${style.labelCheck}`
                            : `${style.labelCheck} ${style.check}`
                    }
                ></div>
            </label>
        </div>
    );
}
