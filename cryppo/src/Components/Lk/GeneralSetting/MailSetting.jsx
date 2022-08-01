import React from "react";
import style from "./GeneralSetting.module.scss";
import Email from "../Email/Email";
import SettingPassword from "../SettingPassword/SettingPassword";
import TelegramAdd from "../TelegramAdd/TelegramAdd";

export default function MailSetting(props) {
  return (
    <div className={style.mail}>
      <div className={style.mailContainer}>
        <div className={style.mailText}>Имя Фамилия:</div>
        <div className={style.mailContent}>{props.user.name}</div>
      </div>
      <div className={style.mailContainer}>
        <div className={style.mailText}>Email:</div>
        <div className={style.mailContent}>{props.user.mail}</div>
      </div>
      <div className={style.link}>
        <Email />
        <SettingPassword />
        <TelegramAdd />
      </div>
    </div>
  );
}
