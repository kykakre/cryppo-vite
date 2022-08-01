import React, { useState } from "react";
import style from "./ExchangeCash.module.scss";
import Btn from "./../Btn/Btn";
import { notification } from "antd";
import MyModal from "../../UI/MyModal/MyModal";
import LkInput from "../LkInput/LkInput";

import close from "../../../Images/icon/close.svg";
export default function ExchangeCashShow(props) {
  const [open, setOpen] = useState(false);

  function modal() {
    setOpen(!open);
  }

  function openModal(type) {
    setOpen(!open);
    notification[type]({
      message: props.message,
      description: props.description,
    });
  }
  return (
    <div>
      <Btn onClick={openModal}>{props.btn}</Btn>
      <MyModal setOpen={setOpen} open={open}>
        <form className={style.containerModal}>
          <img
            alt="close"
            className={style.close}
            src={close}
            onClick={modal}
          />
          <div className={style.titleModal}>Подтверждение</div>
          <div className={style.subtitleModal}>SMS был отправлен</div>
          <LkInput placeholder="Введите код из SMS" />

          <button className={style.btnModal} onClick={openModal}>
            Отправить
          </button>
        </form>
      </MyModal>
    </div>
  );
}
