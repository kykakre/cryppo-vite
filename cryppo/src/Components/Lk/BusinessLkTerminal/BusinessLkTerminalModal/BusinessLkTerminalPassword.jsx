import React, { useState } from "react";
import style from "../BusinessLkTerminal.module.scss";
import MyModal from "../../../UI/MyModal/MyModal";
import close from "../../../../Images/icon/close.svg";
import { Input, notification } from "antd";

import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

export default function BusinessLkTerminalPassword(props) {
  const [open, setOpen] = useState(false);
  function modal() {
    setOpen(!open);
  }
  const [code, setCode] = useState(true);
  const openNotification = (e) => {
    e.preventDefault();
    notification.open({
      type: "success",
      message: "Успешно",
    });
    setOpen(!open);
  };
  return (
    <div>
      <div className={style.link} onClick={modal}>
        Изменить пароль терминала
      </div>
      <MyModal open={open} setOpen={setOpen}>
        <form className={style.container}>
          <img
            alt="close"
            className={style.close}
            src={close}
            onClick={modal}
          />
          <div className={style.title}>Изменение Пароля</div>
          <div className={style.subtitle}>Введите пароль терминала</div>
          <Input.Password
            placeholder="Введите пароль"
            className={style.input}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
          <Input.Password
            placeholder="Повторите пароль"
            className={style.input}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
          <button onClick={openNotification} className={style.btn}>
            Готово
          </button>
        </form>
      </MyModal>
    </div>
  );
}
