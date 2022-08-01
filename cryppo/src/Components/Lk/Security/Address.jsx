import React from "react";
import style from "./Security.module.scss";
import AddressItem from "./AddressItem";

export default function Address(props) {
    let address = props.devices.map((e) => (
        <AddressItem
            id={e.id}
            key={e.id}
            date={e.date}
            ip={e.ip}
            location={e.location}
            name={e.name}
            DeleteDevicePostTC={props.DeleteDevicePostTC}
        />
    ));
    return (
        <div className={style.table}>
            <div className={style.header}>
                <div className={style.headerItemMax}>Дата</div>
                <div className={style.headerItem}>IP</div>
                <div className={style.headerItem}>Геолокация</div>
            </div>
            <div className={style.body}>{address}</div>
        </div>
    );
}
