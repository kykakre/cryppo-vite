import React from "react";
import ConnectItem from "./ConnectItem";
import style from "./Security.module.scss";

export default function Connect(props) {
    let line = props.terminals.map((e) => (
        <ConnectItem
            id={e.terminalId}
            key={e.terminalId}
            createDate={e.createDate}
            login={e.login}
            location={e.location}
            connected={e.connected}
        />
    ));
    return (
        <div className={style.table}>
            <div className={style.header}>
                <div className={style.headerItemMax}>Дата</div>
                <div className={style.headerItem}>IP</div>
                <div className={style.headerItem}>Геолокация</div>
                <div className={style.headerItem}>Статус</div>
            </div>
            <div className={style.body}>{line}</div>
        </div>
    );
}
