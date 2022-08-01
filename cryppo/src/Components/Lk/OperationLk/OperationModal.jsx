import React, { useState } from "react";
import style from "./OperationModal.module.scss";
import icon from "../../../Images/payIcon/1.svg";
import Btn from "../../UI/Btn/Btn";
import MyModal from "../../UI/MyModal/MyModal";
import OperationReceipt from "./OperationReceipt";
export default function OperationModal(props) {
  function switchModal() {
    props.openModal(!props.modal);
  }
  const [toggle, setToggle] = useState(false);
  function openToggle() {
    setToggle(!toggle);
  }

  const dt = new Date(props.date);
  return (
    <div>
      <div className={style.header}>
        {dt.toDateString()}
        <div className={style.close} onClick={switchModal}></div>
      </div>

      <div className={style.wrapper}>
        <img src={props.icon} className={style.icon} alt="img"></img>
        <div className={style.firm}>{props.title}</div>
        <div className={style.type}>{props.type}</div>
        <div className={style.cash}>
          {props.amount} {props.currency}
        </div>

        <div className={style.current}>
          <div className={style.crypto}>
            <img src={icon} className={style.cryptoIcon} alt="img"></img>
            <div className={style.currencyPay}>{props.currency}</div>
          </div>
          <div className={style.check}>{props.address}</div>
        </div>
      </div>
    </div>
  );
}
