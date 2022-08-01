import React from "react";
import Btn from "../../UI/Btn/Btn";
import style from "./CryppoLkSetting.module.scss";

const Cryppolksettings = () => {
  return (
    <>
      <div className={style.block}>
        <div className={style.item}>
          <div className={style.title}>Основные настройки</div>
          <div className={style.subtitle}>
            Установка контрольных вопросов, подключение услуги «Защита карты».
          </div>
          <ul className={style.list}>
            <li className={style.text}>Вход и авторизация</li>
            <li className={style.text}>Лимиты по картам</li>
          </ul>
        </div>
        <div className={style.item}>
          <div className={style.title}>Справки и выписки</div>
          <div className={style.subtitle}>
            Отправим справку на электронную почту или вышем оригинал на домашний
            адрес.
          </div>
          <ul className={style.list}>
            <li className={style.text}>Заказать справку</li>
            <li className={style.text}>Выписка за расчетный период</li>
          </ul>
        </div>
        <div className={style.item}>
          <div className={style.title}>Подписки</div>
          <div className={style.subtitle}>
            Подпишитесь на получение счетов, чтобы оплачивать все в два клика, а
            также редактируйте ваши подписки.
          </div>
          <Btn text="">Добавить подписку</Btn>
        </div>
        <div className={style.item}>
          <div className={style.title}>Обращения</div>
          <div className={style.subtitle}>Активных обращений нет</div>
          <div className={style.subtitle}>
            Если возникнут вопросы или проблемы, мы поможем 24/7, без выходных.
          </div>
        </div>
      </div>
    </>
  );
};

export default Cryppolksettings;
