import React, { useState } from "react";
import style from "./CryppoRegistry.module.scss";
import LkInput from "../../UI/LkInput/LkInput";
import { useNavigate } from "react-router";

const CryppoRegistry = (props) => {
    const [emailName, setEmailName] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [passwordName, setPasswordName] = useState("");
    const [repeatPasswordName, setRepeatPasswordName] = useState("");
    const navigate = useNavigate();
    if (props.isLogin) {
        navigate("/cryppo/lk");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.RegistrationWalletPostTC(
            null,
            emailName,
            name,
            surname,
            passwordName,
            repeatPasswordName,
            true
        );
    };

    return (
        <div className="main">
            <div className={style.entance}>
                <div className={style.title}>Регистрация</div>
                <form className={style.modal} onSubmit={handleSubmit}>
                    <LkInput
                        className={style.input}
                        placeholder="Ваше имя"
                        type="text"
                        value={name}
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <LkInput
                        className={style.input}
                        placeholder="Ваша фамилия"
                        type="text"
                        value={surname}
                        name="surname"
                        onChange={(e) => setSurname(e.target.value)}
                    />
                    <LkInput
                        className={style.input}
                        placeholder="Email"
                        type="text"
                        value={emailName}
                        name="email"
                        onChange={(e) => setEmailName(e.target.value)}
                    />
                    <LkInput
                        className={style.input}
                        placeholder="Введите пароль"
                        type="text"
                        value={passwordName}
                        name="password"
                        onChange={(e) => setPasswordName(e.target.value)}
                    />
                    <LkInput
                        className={style.input}
                        placeholder="Повторите пароль"
                        type="text"
                        value={repeatPasswordName}
                        name="email"
                        onChange={(e) => setRepeatPasswordName(e.target.value)}
                    />

                    <button className={style.button} type="submit">
                        Зарегистрироваться
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CryppoRegistry;
