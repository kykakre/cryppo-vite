import React, { useEffect, useState } from "react";
import style from "./BussinesAuthorization.module.scss";
import { Navigate, NavLink } from "react-router-dom";
import LkInput from "../../UI/LkInput/LkInput";
import getCookies from "../../../Utils/cookies";

const BussinesAuthorization = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    if (getCookies("access_token")) {
        return <Navigate to={"/business/lk"} />;
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        let deviceId = "0";
        let deviceOs = navigator.userAgent.substring(
            navigator.userAgent.indexOf("(") + 1,
            navigator.userAgent.indexOf(";")
        );
        let deviceIp = "192.168.0.1";
        props.LoginBusinessPostTC(
            email,
            password,
            null,
            deviceId,
            deviceOs,
            deviceIp
        );
    };
    return (
        <div className="main">
            <div className={style.entance}>
                <form className={style.modal} onSubmit={handleSubmit}>
                    <div className={style.title}>Авторизация</div>
                    <LkInput
                        title="Email"
                        type="text"
                        value={email}
                        className={style.input}
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <LkInput
                        onChange={(e) => setPassword(e.target.value)}
                        title="Пароль"
                        className={style.input}
                        type="text"
                        value={password}
                        name="password"
                    />
                    <button className={style.button} type="submit">
                        Авторизоваться
                    </button>
                    <NavLink to="/business/registry" className={style.link}>
                        Зарегистрироваться?
                    </NavLink>
                </form>
            </div>
        </div>
    );
};

export default BussinesAuthorization;
