import React from "react";
import LkInput from "../../UI/LkInput/LkInput";
import MySelect from "../../UI/MySelect/MySelect";
import MyTextarea from "../../UI/MyTextarea/MyTextarea";
import style from "./Check.module.scss";
import { notification } from "antd";
import Btn from "../../UI/Btn/Btn";

export default function CheckModal(props) {
  const modal = (type) => {
    props.setOpen(!props.open);
    notification[type]({
      message: "Уведомление",
      description: "Заявка была отправленна",
    });
  };
  return (
    <div className={style.modalWrapper}>
      <LkInput title="Логин пользователя" />
      <MySelect title="Выберите валюту"currencyList={props.currencyList} />
      <MyTextarea maxLegth={100} title="Комментарий" />
      <Btn style={{ margin: "auto" }} onClick={() => modal("success")}>
        Отправить
      </Btn>
    </div>
  );
}
