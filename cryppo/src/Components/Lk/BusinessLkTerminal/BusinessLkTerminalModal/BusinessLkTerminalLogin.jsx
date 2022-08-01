import React, { useState } from "react";
import style from "../BusinessLkTerminal.module.scss";
import MyModal from "../../../UI/MyModal/MyModal";
import LkInput from "../../../UI/LkInput/LkInput";
import close from "../../../../Images/icon/close.svg";
import { notification } from "antd";
import { userSlice } from "../../../../Redux/user-reducer";
import { useDispatch } from "react-redux";
export default function BusinessLkTerminalLogin(props) {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [login, setLogin] = useState("");
    function modal() {
        setOpen(!open);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(
            userSlice.actions.TerminalChangeLogin({
                id: props.id,
                login: login,
            })
        );
        notification.open({
            type: "success",
            message: "Успешно",
        });
        setOpen(!open);
    };
    return (
        <div>
            <div className={style.link} onClick={modal}>
                Изменить логин терминала
            </div>
            <MyModal open={open} setOpen={setOpen}>
                <form className={style.container} onSubmit={onSubmit}>
                    <img
                        alt="close"
                        className={style.close}
                        src={close}
                        onClick={modal}
                    />
                    <div className={style.title}>Изменения логина</div>
                    <div className={style.subtitle}>
                        Введите новый логин терминала
                    </div>
                    <LkInput
                        value={login}
                        onChange={(e) => {
                            setLogin(e.target.value);
                        }}
                    />
                    <button type="submit" className={style.btn}>
                        Готово
                    </button>
                </form>
            </MyModal>
        </div>
    );
}
