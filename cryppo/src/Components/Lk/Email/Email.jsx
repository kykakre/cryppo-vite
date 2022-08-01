import React, { useState } from "react";
import style from "./Email.module.scss";
import MyModal from "../../UI/MyModal/MyModal";
import LkInput from "../../UI/LkInput/LkInput";
import close from "../../../Images/icon/close.svg";
import { notification } from "antd";

export default function Email(props) {
  const [open, setOpen] = useState(false);
  function modal() {
    setOpen(!open);
  }
  const openNotification = (e) => {
    e.preventDefault();
    notification.open({
      type: "success",
      message: "Email успешно изменен",
    });
  };
  return (
    <div>
      <div className={style.linkItem} onClick={modal}>
        Сменить почту
      </div>
      <MyModal open={open} setOpen={setOpen}>
        <form className={style.container}>
          <img
            alt="close"
            className={style.close}
            src={close}
            onClick={modal}
          />
          <div className={style.title}>Смена Email</div>
          <div className={style.subtitle}>Текущий адрес: ru...@mail.ru</div>
          <LkInput placeholder="Введите новый Email" />
          <div className={style.subtitle}>
            Чтобы продолжить, введите ваш текущий пароль
          </div>
          <LkInput placeholder="Введите пароль" />
          <button className={style.btn} onClick={openNotification}>
            Изменить Email
          </button>
        </form>
      </MyModal>
    </div>
  );
}
