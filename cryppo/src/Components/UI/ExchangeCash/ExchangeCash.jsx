import React, { useEffect, useState } from "react";
import style from "./ExchangeCash.module.scss";
import MySelect from "./../MySelect/MySelect";
import ExchangeCashShow from "./ExchanheCashShow";
import { Input } from "antd";
export default function ExchangeCash(props) {
    const [buyCurrency, setBuyCurrency] = useState("");
    const [sellCurrency, setSellCurrency] = useState("");
    const [buyAmount, setBuyAmount] = useState("");
    const [sellAmount, setSellAmount] = useState("");
    const [disabledBuy, setDisabledBuy] = useState(true);
    const [disabledSell, setDisabledSell] = useState(true);
    useEffect(() => {
        setDisabledBuy(buyCurrency == "" ? true : !buyCurrency);
        setDisabledSell(sellCurrency == "" ? true : !sellCurrency);
    }, [buyCurrency, sellCurrency]);
    function SetSell(e) {
        e.target.value = e.target.value.replace(/\D+/g, "");
        if (e.target.value !== "") {
            setBuyAmount(
                parseInt(e.target.value) *
                    Math.round((Math.random() + 0.1) * 10)
            );
            setSellAmount(e.target.value);
        } else {
            setSellAmount("");
            setBuyAmount("");
        }
    }
    function SetBuy(e) {
        e.target.value = e.target.value.replace(/\D+/g, "");
        if (e.target.value !== "") {
            setSellAmount(
                parseInt(e.target.value) /
                    Math.round((Math.random() + 0.1) * 10)
            );
            setBuyAmount(e.target.value);
        } else {
            setSellAmount("");
            setBuyAmount("");
        }
    }
    return (
        <div className="block">
            <div className={style.content}>
                <div className={style.itemContent}>
                    <div className={style.item}>
                        <div className={style.title}>Продажа</div>
                        <MySelect
                            currencyList={props.currencyList}
                            change={setBuyCurrency}
                        />
                    </div>
                    <div className={style.item}>
                        <div className={style.title}>Купить</div>
                        <MySelect
                            currencyList={props.currencyList}
                            change={setSellCurrency}
                        />
                    </div>
                </div>
                <div className={style.itemContent}>
                    <div className={style.item}>
                        <div className={style.subtitle}>Сумма на продажу</div>
                        <Input
                            className={style.input}
                            type="text"
                            placeholder="Выберите валюту"
                            value={buyAmount}
                            onChange={(e) => {
                                SetBuy(e);
                            }}
                            disabled={disabledBuy}
                        />
                    </div>
                    <div className={style.item}>
                        <div className={style.subtitle}>Сумма к покупке</div>
                        <Input
                            className={style.input}
                            type="text"
                            value={sellAmount}
                            placeholder="Выберите валюту"
                            onChange={(e) => SetSell(e)}
                            disabled={disabledSell}
                        />
                    </div>
                </div>
            </div>
            <div className={style.bottom}>
                <p className={style.text}>
                    {buyCurrency &&
                    sellCurrency &&
                    (buyAmount || sellAmount) ? (
                        <p className={style.text}>
                            {buyAmount} {buyCurrency} = {sellAmount}{" "}
                            {sellCurrency}
                        </p>
                    ) : null}
                </p>
                <ExchangeCashShow
                    message="Обмен прошел успешно"
                    description="Вы обменяли X BTN на X ETC"
                    btn="Продолжить"
                />
            </div>
        </div>
    );
}
