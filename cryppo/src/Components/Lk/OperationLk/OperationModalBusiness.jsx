import React from "react";
import style from "./OperationModal.module.scss";
import { NavLink } from "react-router-dom";
import icon from "../../../Images/payIcon/1.svg";
export default function OperationModalBusiness(props) {
  function switchModal() {
    props.openModal(!props.modal);
  }
  const dt = new Date(props.date);
  return (
    <div>
      <div className={style.header}>
        {dt.toDateString()}
        <div className={style.close} onClick={switchModal}></div>
      </div>

      <div className={style.wrapperBusiness}>
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
          <div className={style.check}>{props.contact}</div>
        </div>
        <div className={style.line}>
          <div className={style.currencyPay}>Protocol:</div>
          <div className={style.check}>{props.protocol}</div>
        </div>
        <div className={style.line}>
          <div className={style.currencyPay}>Currency:</div>
          <div className={style.check}>{props.currency}</div>
        </div>
        <NavLink to="/business/lk/pageWork" className={style.btn}>
          Распечатать квитанцию
        </NavLink>
      </div>
    </div>
  );
}
