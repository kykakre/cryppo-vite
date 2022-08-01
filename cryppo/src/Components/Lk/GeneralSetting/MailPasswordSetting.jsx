import React from "react";
import MySelectFlag from "../../UI/MySelect/MySelectFlag";
import MySelect from "../../UI/MySelect/MySelect";
import style from "./GeneralSetting.module.scss";
import MailSetting from "./MailSetting";
import { NavLink } from "react-router-dom";
export default function MailPasswordSetting(props) {
    return (
        <div className={style.content}>
            <div className={style.title}>Почта и пароль</div>
            <MailSetting user={props.user} />
            <div className={style.title}>Валюта баланса</div>
            <div className={style.subtitle}>
                Вы можете выбрать в какой валюте отображать общую стоимость
                ваших криптовалют на балансе, а также стоимость портфеля.
            </div>
            <MySelect currencyList={props.currencyList} />
            <div className={style.title}>Язык</div>
            <div className={style.subtitle}>
                Язык уведомлений, отправляемых на ваш email. Сообщения об
                операциях по счету, ежемесячный отчет по балансу и т.д.
            </div>
            <MySelectFlag langOption={props.langOption} />
            <div className={style.title}>Закрыть счет</div>
            <div className={style.subtitle}>
                Если хотите, вы можете закрыть счет и удалить все свои данные из
                системы.
            </div>
            <NavLink to="" className={style.btn}>
                Закрыть аккаунт
            </NavLink>
        </div>
    );
}
