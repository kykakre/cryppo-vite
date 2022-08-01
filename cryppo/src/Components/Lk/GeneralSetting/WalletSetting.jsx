import React from "react";
import style from "./GeneralSetting.module.scss";
import WalletSettingItem from "./WalletSettingItem";
import icon from "../../../Images/payIcon/3.svg"

export default function WalletSetting(props) {
    let cryptoItem = props.balances.map((e) => (
        <WalletSettingItem
            SetActiveCurrencyPostTC={props.SetActiveCurrencyPostTC}
            id={e.currency}
            key={e.currency}
            icon={e.icon??icon}
            currency={e.currency}
            active={e.active}
        />
    ));
    return (
        <div className={style.content}>
            <div className={style.title}>Управление кошельками</div>
            <div className={style.subtitle}>
                Выберите, какие кошельки следует показывать в разделе “Балансы”.
            </div>
            <div className={style.table}>{cryptoItem}</div>
        </div>
    );
}
