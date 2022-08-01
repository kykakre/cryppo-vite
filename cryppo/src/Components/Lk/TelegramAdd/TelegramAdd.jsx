import React, { useState } from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import style from "./TelegramAdd.module.scss";
import MyModal from "../../UI/MyModal/MyModal";
import LkInput from "../../UI/LkInput/LkInput";
import close from "../../../Images/icon/close.svg";
import { Input, notification } from "antd";
export default function TelegramAdd() {
  const [open, setOpen] = useState(false);
  function modal() {
    setOpen(!open);
  }
  const [code, setCode] = useState(true);
  const openNotification = (e) => {
    e.preventDefault();
    notification.open({
      type: "success",
      message: "Код отправлени на telegram",
    });
    setCode(!code);
  };
  return (
    <div>
      <div className={style.linkItem} onClick={modal}>
        Подключить Telegram
      </div>
      <MyModal open={open} setOpen={setOpen}>
        <form
          className={
            code ? `${style.visible} ${style.container}` : `${style.notVisible}`
          }
        >
          <img
            alt="close"
            className={style.close}
            src={close}
            onClick={modal}
          />
          <div className={style.title}>Подключение telegram</div>
          <div className={style.subtitle}>Введите ник Telegram</div>
          <LkInput placeholder="@" />
          <div className={style.subtitle}>Введите пароль</div>
          <LkInput placeholder="Введите пароль" />

          <button onClick={openNotification} className={style.btn}>
            Готово
          </button>
        </form>
        <form
          className={
            code ? `${style.notVisible}` : `${style.visible} ${style.container}`
          }
        >
          <img
            alt="close"
            className={style.close}
            src={close}
            onClick={modal}
          />
          <div className={style.title}>Подтверждение</div>
          <div className={style.subtitle}>Код отправлен на ваш Telegram</div>
          <LkInput placeholder="Введите код" />
          <button className={style.codeBtn}>Запросить код еще раз</button>
          <button className={style.btn}>Продолжить</button>
        </form>
      </MyModal>
    </div>
  );
}
