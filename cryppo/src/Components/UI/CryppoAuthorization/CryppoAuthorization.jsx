import React, { useState } from "react";
import style from "./CryppoAuthorization.module.scss";
import { NavLink, useNavigate } from "react-router-dom";
import LkInput from "../LkInput/LkInput";
import { Input, Space } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

export default function CryppoAuthorization(props) {
    const navigate = useNavigate();
    const [emailName, setEmailName] = useState("");
    const [passwordName, setPasswordName] = useState("");
    const value = true;
    if (props.isLogin) {
        navigate("/cryppo/lk");
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.loginThunkCreator(emailName, passwordName, value);
    };
    return (
        <div className="main">
            <div className={style.entance}>
                <form className={style.modal} onSubmit={handleSubmit}>
                    <div className={style.title}>Авторизация</div>
                    <LkInput
                        title="Email"
                        type="text"
                        value={emailName}
                        name="email"
                        onChange={(e) => setEmailName(e.target.value)}
                    />
                    <Input.Password
                        placeholder="Пароль"
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
