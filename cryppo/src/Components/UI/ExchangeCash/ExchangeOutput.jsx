import React, { useState } from "react";
import style from "./ExchangeCash.module.scss";
import MySelect from "./../MySelect/MySelect";
import ExchangeCashShow from "./ExchanheCashShow";
import { useEffect } from "react";
import * as WithdrawApi from "../../../Api/WithdrawApi";
export default function ExchangeOutput(props) {
    useEffect(() => {}, []);
    const [walletAddress, setWalletAddress] = useState("");
    const [currency, setCurrency] = useState(null);
    const [amount, setAmount] = useState("");

    const Withdraw = () => {
        const id = WithdrawApi.WithdrawPost(
            currency,
            walletAddress,
            null,
            amount
        );
        WithdrawApi.GenerateWithdrawCodeGet(id);
    };
    return (
        <div className="block">
            <div className={style.content}>
                <div className={style.itemFull}>
                    <div className={style.title}>Вывод</div>
                    <MySelect
                        currencyList={props.currencyList}
                        change={setCurrency}
                    />
                </div>
                <div className={style.itemFull}>
                    <div className={style.subtitle}>
                        Адрес криптовалютного кошелька получателя
                    </div>
                    <input
                        className={style.input}
                        type="text"
                        placeholder="Введите адрес"
                        value={walletAddress}
                        onChange={(e) => setWalletAddress(e.target.value)}
                    />
                </div>
                <div className={style.itemFull}>
                    <div className={style.subtitle}>Сумма к покупке</div>
                    <input
                        className={style.input}
                        type="text"
                        placeholder="0.000000"
                        value={amount}
                        onChange={(e) => {
                            e.target.value = e.target.value.replace(/\D+/g, "");
                            setAmount(e.target.value);
                        }}
                    />
                </div>
                {amount && currency ? (
                    <div className={style.itemFull}>
                        <div className={style.comission}>
                            {amount / 10} {currency}
                        </div>
                    </div>
                ) : null}
            </div>
            <div className={style.bottom}>
                {amount && currency ? (
                    <div className={style.flex}>
                        <div className={style.option}>Сумма к списанию</div>
                        <div className={style.text}>
                            {parseInt(amount) + amount / 10} {currency}
                        </div>
                    </div>
                ) : null}

                <ExchangeCashShow
                    message="Вывод средств прошел успешно"
                    description={`Вы вывели ${amount} BTC`}
                    btn="Вывести"
                    Withdraw={Withdraw}
                />
            </div>
        </div>
    );
}
