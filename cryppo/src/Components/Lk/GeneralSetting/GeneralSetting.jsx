import React from "react";
import style from "./GeneralSetting.module.scss";
import MailPasswordSetting from "./MailPasswordSetting";
import WalletSetting from "./WalletSetting";
import SubtitleLk from "../../UI/SubtitleLk/SubtitleLk";
export default function GeneralSetting(props) {
    return (
        <div className="main container">
            <SubtitleLk subtitle="Общие настройки" />
            <div className={style.flex}>
                <div className={style.item}>
                    <WalletSetting
                        balances={props.balances}
                        SetActiveCurrencyPostTC={props.SetActiveCurrencyPostTC}
                    />
                </div>
                <div className={style.item}>
                    <MailPasswordSetting
                        currencyList={props.currencyList}
                        user={props.user}
                        langOption={props.langOption}
                    />
                </div>
            </div>
        </div>
    );
}
