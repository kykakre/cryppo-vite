import React from "react";
import style from "./CryppoLkCheckSelect.module.scss";

export default function CryppoLkCheckActive(props) {
    return (
        <>
            <div className="CheckItem">
                {props.logo ? (<img className={style.icon} src={props.logo} alt="icon"/>) : (
                    <>
                        <img className={style.icon} src={props.icon} alt="icon"/>
                        <div className={style.text}>{props.text}</div>
                    </>

                )}

                <div className="Dropdown"/>
            </div>
        </>
    );
}
