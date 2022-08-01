import React, { useState, useEffect } from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import style from "./SettingPassword.module.scss";
import MyModal from "../../UI/MyModal/MyModal";
import LkInput from "../../UI/LkInput/LkInput";
import close from "../../../Images/icon/close.svg";
import { Input, notification } from "antd";

export default function SettingPassword(props) {
  const [open, setOpen] = useState(false);
  function modal() {
    setOpen(!open);
  }
  const [seconds, setSeconds] = useState(60);
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (seconds > 0) {
      const interval = setInterval(() => setSeconds(seconds - 1), 1000);
      return () => clearInterval(interval);
    } else {
      setActive(!active);
    }
  }, [seconds, setSeconds]);
  const [code, setCode] = useState(false);
  const openNotification = (e) => {
    e.preventDefault();
    notification.open({
      type: "success",
      message: "Код отправлени на почту",
    });

    setCode(!code);
  };
  const reset = (e) => {
    e.preventDefault();
    setSeconds(60);
    setActive(!active);
    notification.open({
      type: "success",
      message: "Код был повторно отправлен на почту",
    });
  };
  return (
    <div>
      <div className={style.linkItem} onClick={modal}>
        Сменить пароль
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
          <div className={style.title}>Смена пароля</div>
          <div className={style.subtitle}>
            Чтобы продолжить, введите ваш текущий пароль
          </div>
          <LkInput placeholder="Пароль" />
          <div className={style.subtitle}>Придумайте сложный пароль</div>
          <Input.Password
            className={style.input}
            placeholder="Введите пароль"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
          <Input.Password
            className={style.input}
            placeholder="Повторите пароль"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />

          <button onClick={openNotification} className={style.btn}>
            Сохранить
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
          <div className={style.subtitle}>Код отправлен на ваш Email</div>
          <LkInput placeholder="Введите код" />
          <button
            onClick={reset}
            className={
              active
                ? `  ${style.codeBtn}  `
                : `${style.noActive} ${style.codeBtn}`
            }
          >
            {active
              ? `Запросить код повторно`
              : ` Запросить код еще раз через ${seconds}`}
          </button>

          <button className={style.btn}>Продолжить</button>
        </form>
      </MyModal>
    </div>
  );
}
