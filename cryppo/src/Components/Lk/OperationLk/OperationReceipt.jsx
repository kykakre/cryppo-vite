import React, { useState } from "react";
import style from "./OperationModal.module.scss";

import Btn from "../../UI/Btn/Btn";
export default function OperationReceipt(props) {
  function switchModal() {
    props.openToggle(!props.modal);
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
          <div className={style.line}>
            <div className={style.currencyPay}>Потрачено:</div>
            <div className={style.check}>
              {props.amount} {props.currency}
            </div>
          </div>
          <div className={style.line}>
            <div className={style.currencyPay}>Адрес кошелька:</div>
            <div className={style.check}>{props.address}</div>
          </div>
          <div className={style.line}>
            <div className={style.currencyPay}>Blockchain:</div>
            <div className={style.check}>{props.blockchain}</div>
          </div>
          <div className={style.line}>
            <div className={style.currencyPay}>Contract:</div>
            <div className={style.check}>{props.transactions}</div>
          </div>
          <div className={style.line}>
            <div className={style.currencyPay}>Protocol:</div>
            <div className={style.check}>{props.protocol}</div>
          </div>
          <div className={style.line}>
            <div className={style.currencyPay}>Currency:</div>
            <div className={style.check}>{props.currency}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
