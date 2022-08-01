import React from "react";
import style from "./OperationModal.module.scss";

export default function OperationModalWallet(props) {
    function switchModal() {
        props.openModal(!props.modal);
    }
    return (
        <div>
            <div className={style.header}>
                {new Date().toDateString()}
                <div className={style.close} onClick={switchModal}></div>
            </div>

            <div className={style.wrapper}>
                <img src={props.icon} className={style.icon} alt="img"></img>
                <div className={style.firm}>{props.firm}</div>
                <div className={style.type}>{props.type}</div>
                <div className={style.cash}>
                    {props.cash} {props.currency}
                </div>
                <div className={style.status}>
                    <div
                        style={{
                            background: `${props.status.color}`,
                        }}
                        className={style.iconStatus}
                    ></div>
                    <div className={style.textStatus}>{props.status.text}</div>
                </div>
                <div className={style.current}>
                    <div className={style.crypto}>
                        <img
                            src={props.iconPay}
                            className={style.cryptoIcon}
                            alt="img"
                        ></img>
                        <div className={style.currencyPay}>
                            {props.currencyPay}
                        </div>
                    </div>
                    <div className={style.check}>{props.address}</div>
                </div>
                <div className={style.card}>
                    <div className={style.last}>
                        <div className={style.drop} />
                        <div className={style.bankText}>Банковские карты</div>
                    </div>
                    <div
                        style={{
                            background: `${props.bankCardData[0].color}`,
                        }}
                        className={style.cardLine}
                    >
                        <div className={style.number}>
                            {props.bankCardData[0].number}
                        </div>
                        <img
                            src={props.bankCardData[0].logo}
                            className={style.logo}
                        ></img>
                    </div>
                </div>
            </div>
        </div>
    );
}
