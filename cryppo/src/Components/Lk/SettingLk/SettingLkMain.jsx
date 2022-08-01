import React from "react";
import style from "./SettingLk.module.scss";
import { NavLink } from "react-router-dom";
import Btn from "../../UI/Btn/Btn";

export default function SettingLkMain(props) {
  return (
    <div className="main container">
      <div className={style.block}>
        <NavLink to="general" className={style.item}>
          <div className={style.title}>Общие настройки</div>
          <div className={style.subtitle}>
            Установка контрольных вопросов, подключение услуги «Защита карты».
          </div>
          <ul className={style.list}>
            <li className={style.text}>Управление кошельками</li>
            <li className={style.text}>Почта и пароль</li>
          </ul>
        </NavLink>
        <NavLink to="safety" className={style.item}>
          <div className={style.title}>Безопасность</div>
          <div className={style.subtitle}>
            Отправим справку на электронную почту или вышем оригинал на домашний
            адрес.
          </div>
          <ul className={style.list}>
            <li className={style.text}>Двухфакторная авторизация</li>
            <li className={style.text}>Платежный пароль</li>
            <li className={style.text}>Последние подключения к счёту</li>
          </ul>
        </NavLink>
        <NavLink to="terminal" className={style.item}>
          <div className={style.title}>Терминалы</div>
          <div className={style.subtitle}>
            Подпишитесь на получение счетов, чтобы оплачивать все в два клика, а
            также редактируйте ваши подписки.
          </div>
          <Btn text="">Добавить подписку</Btn>
        </NavLink>
        <NavLink to="notification" className={style.item}>
          <div className={style.title}>Уведомления</div>
          <div className={style.subtitle}>Активных обращений нет</div>
          <div className={style.subtitle}>
            Если возникнут вопросы или проблемы, мы поможем 24/7, без выходных.
          </div>
        </NavLink>
      </div>
    </div>
  );
}
