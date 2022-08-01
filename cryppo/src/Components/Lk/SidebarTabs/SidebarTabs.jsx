import React from "react";
import { NavLink } from "react-router-dom";
import style from "./SidebarTabs.module.scss";

export default function SidebarTabs(props) {
    let title = <div className={style.title}>{props.tabs.title}</div>;
    let cash = <div className={style.subtitle}>{props.tabs.cash}</div>;
    let statistic = (
        <div className={style.subtitle}>{props.tabs.statistic}</div>
    );
    let text = <div className={style.text}>{props.tabs.text}</div>;
    let povered = (
        <img src={props.tabs.povered} className={style.poveredIcon} alt="img" />
    );
    return (
        <NavLink
            to={props.tabs.href ? `${props.tabs.href}` : ""}
            className={style.link}
        >
            <div className={style.block}>
                <div className={style.wrapper}>
                    <div className={style.info}>
                        <img
                            src={props.tabs.icon}
                            className={style.icon}
                            alt="img"
                        />
                        <div className={style.textWrapper}>
                            <div>{props.tabs.title ? title : ""}</div>
                            <div>{props.tabs.statistic ? statistic : ""}</div>
                            <div>{props.tabs.cash ? cash : ""}</div>
                            <div>{props.tabs.text ? text : ""}</div>
                        </div>
                    </div>

                    {props.tabs.povered ? povered : ""}
                </div>
            </div>
        </NavLink>
    );
}
