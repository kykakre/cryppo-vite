import React, { useState } from "react";
import style from "./CryppoAuthorization.module.scss";
import { NavLink, useNavigate } from "react-router-dom";
import LkInput from "../../UI/LkInput/LkInput";
import { Input, Space } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

export default function CryppoAuthorization(props) {
    const navigate = useNavigate();
    const [emailName, setEmailName] = useState("");
    const [passwordName, setPasswordName] = useState("");
    if (props.isLogin) {
        navigate("/cryppo/lk");
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.LoginWalletPostTC(emailName, passwordName, true);
        navigate("/cryppo/lk");
    };
    return (
        <div className="main">
            <div className={style.entance}>
                <form className={style.modal} onSubmit={handleSubmit}>
                    <div className={style.title}>Авторизация</div>
                    <LkInput
                        type="text"
                        value={emailName}
                        placeholder="Введите Email"
                        name="email"
                        onChange={(e) => setEmailName(e.target.value)}
                    />
                    <Input.Password
                        placeholder="Пароль"
                        className={style.input}
                        iconRender={(visible) =>
                            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                        }
                        onChange={(e) => setPasswordName(e.target.value)}
                    />
                    <button className={style.button} type="submit">
                        Авторизоваться
                    </button>
                    <NavLink to="/registry">Зарегистрироваться?</NavLink>
                </form>
            </div>
        </div>
    );
}
