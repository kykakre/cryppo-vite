import React, { useState } from "react";
import style from "./Notification.module.scss";
import { userSlice } from "../../../Redux/user-reducer";
import { useDispatch } from "react-redux";

export default function NotifocathionItem(props) {
    const dispatch = useDispatch();
    return (
        <div className={style.pushContainer}>
            <div className={style.pushName}>{props.text}</div>
            <div className={style.pushItem}>
                <input
                    id={`${props.id}m`}
                    type="checkbox"
                    value={props.email}
                    defaultChecked={props.email}
                />
                <label
                    className={style.pushLabel}
                    htmlFor={`${props.id}m`}
                    onClick={() =>
                        dispatch(
                            userSlice.actions.EditNotification({
                                key: props.emailKey,
                                value: !props.email,
                            })
                        )
                    }
                >
                    <div className={style.pushText}>Email</div>
                </label>
                <input
                    id={`${props.id}t`}
                    type="checkbox"
                    value={props.telegram}
                    defaultChecked={props.telegram}
                />
                <label
                    className={style.pushLabel}
                    htmlFor={`${props.id}t`}
                    onClick={() => {
                        dispatch(
                            userSlice.actions.EditNotification({
                                key: props.tgKey,
                                value: !props.telegram,
                            })
                        );
                    }}
                >
                    <div className={style.pushText}>Telegram</div>
                </label>
            </div>
        </div>
    );
}
