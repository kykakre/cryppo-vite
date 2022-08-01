import NotificathionItem from "./NotificationItem";
import style from "./Notification.module.scss";
import { useState } from "react";
export default function Notification(props) {
    let id = 0;
    let notification = [
        <NotificathionItem
            id={id++}
            key={id++}
            email={props.notificationsSettings.systemEmail}
            telegram={props.notificationsSettings.systemTg}
            emailKey="systemEmail"
            tgKey="systemTg"
            text="Системные уведомления"
        />,
        <NotificathionItem
            id={id++}
            key={id++}
            email={props.notificationsSettings.entryEmail}
            telegram={props.notificationsSettings.entryTg}
            emailKey="entryEmail"
            tgKey="entryTg"
            text="Успешный вход"
        />,
        <NotificathionItem
            id={id++}
            key={id++}
            email={props.notificationsSettings.failEntryEmail}
            telegram={props.notificationsSettings.failEntryTg}
            emailKey="failEntryEmail"
            tgKey="failEntryTg"
            text="Неуспешный вход"
        />,
        <NotificathionItem
            id={id++}
            key={id++}
            email={props.notificationsSettings.paymentGetEmail}
            telegram={props.notificationsSettings.paymentGetTg}
            emailKey="paymentGetEmail"
            tgKey="paymentGetTg"
            text="Получен платеж"
        />,
        <NotificathionItem
            id={id++}
            key={id++}
            email={props.notificationsSettings.paymentConfirmedEmail}
            telegram={props.notificationsSettings.paymentConfirmedTg}
            emailKey="paymentConfirmedEmail"
            tgKey="paymentConfirmedTg"
            text="Отправлен платеж"
        />,
        <NotificathionItem
            id={id++}
            key={id++}
            email={props.notificationsSettings.passwordChangeEmail}
            telegram={props.notificationsSettings.passwordChangeTg}
            emailKey="passwordChangeEmail"
            tgKey="passwordChangeTg"
            text="Изменен пароль"
        />,
        <NotificathionItem
            id={id++}
            key={id++}
            email={props.notificationsSettings.notificationsChangeEmail}
            telegram={props.notificationsSettings.notificationsChangeTg}
            emailKey="notificationsChangeEmail"
            tgKey="notificationsChangeTg"
            text="Изменены уведомления"
        />,
    ];

    return (
        <div className="main container">
            <div className={style.content}>
                <div className={style.title}>Мгновенные уведомления</div>
                <div className={style.text}>
                    Выберите, какие уведомления вы хотите получать и куда
                    (Email, Telegram, Телефон). Каждый раз, когда произойдет
                    выбранное событие, вам будет отправлено сообщение.
                </div>
                {notification}
                <button
                    onClick={() => {
                        props.SendNotificationsPostTC(
                            props.notificationsSettings
                        );
                    }}
                    className={style.btn}
                >
                    Сохранить
                </button>
            </div>
        </div>
    );
}
