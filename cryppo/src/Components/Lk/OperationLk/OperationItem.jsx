import React, { useState } from "react";
import style from "./Operation.module.scss";
import yandex from "../../../Images/icon/yandex.svg";
import OperationModalWallet from "./OperationModalWallet";
import MyModal from "../../UI/MyModal/MyModal";
import three from "../../../Images/payIcon/3.svg";
import OperationModalBusiness from "./OperationModalBusiness";
export default function OperationItem(props) {
    let value = props;

    const [open, setOpen] = useState(false);
    function openModal() {
        setOpen(!open);
    }
    let modal;
    if (document.location.pathname === "/cryppo/lk") {
        modal = (
            <OperationModalWallet
                open={open}
                openModal={openModal}
                id={props.id}
                key={props.id}
                type={props.type ?? "Покупка"}
                icon={props.icon ?? yandex}
                date={props.date}
                cash={props.cash ?? -100}
                currency={props.currency}
                title={props.title ?? "Яндекс Такси"}
                check={props.check}
                status={{
                    color: "linear-gradient(91.42deg, #2F69FF 0%, #00C0A9 100%)",
                    text: "Операция одобрена",
                }}
                amount={props.amount}
                firm={props.firm}
                address={props.address ?? "v6ftwfl50c1nmyqy5rqj4xys6e3xokux"}
                iconPay={three}
                bankCardData={props.bankCardData}
            />
        );
    } else {
        modal = (
            <OperationModalBusiness
                open={open}
                openModal={openModal}
                id={props.id}
                key={props.id}
                type={props.type ?? "Покупка"}
                icon={props.icon ?? yandex}
                date={props.date}
                currency={props.currency}
                title={props.title ?? "Яндекс Такси"}
                check={props.check}
                status={props.status}
                amount={props.amount}
                firm={props.firm}
                address={props.address}
                blockchain={props.blockchain}
                protocol={props.protocol}
                contact={props.contact}
                bankCardData={props.bankCardData}
            />
        );
    }
    return (
        <div className={style.line} onClick={openModal}>
            <div className={style.flex}>
                <img src={props.icon} className={style.icon} alt="icon" />
                <div className={style.wrapper}>
                    <div>
                        <div className={style.type}>{props.type}</div>
                        <div className={style.subtitle}>{props.title}</div>
                        <div className={style.check}>{props.check}</div>
                    </div>
                    <div
                        className={style.status}
                        style={{ background: `${props.status.color}` }}
                    ></div>
                </div>
                <div
                    className={
                        props.status
                            ? `${style.accept} ${style.false}`
                            : `${style.accept}`
                    }
                />
            </div>

            <div className={style.cash}>
                {props.amount} {props.currency}
            </div>
            <div className={style.none}>
                <MyModal setOpen={setOpen} open={open}>
                    {modal}
                </MyModal>
            </div>
        </div>
    );
}
