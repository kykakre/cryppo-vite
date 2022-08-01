import React, { useContext, useEffect, useState } from "react";
import { DatePicker, ConfigProvider } from "antd";
import moment from "moment";
import "moment/locale/ru";
import locale from "antd/lib/locale/ru_RU";
import style from "./FilterHistory.module.scss";
import { Select } from "antd";
import MySelectTitle from "../../UI/MySelect/MySelectTitle";
import three from "../../../Images/payIcon/3.svg";
const { RangePicker } = DatePicker;
const { Option } = Select;

export default function FilterHistory(props) {
    let option = props.currencyList.map((e) => (
        <Option
            className={style.option}
            value={e.currency}
            label={e.currency}
            key={e.currency}
        >
            <div className={style.itemOption}>
                <img src={e.img ?? three} alt={e.currency} />
                <div className={style.name}>{e.currency}</div>
            </div>
        </Option>
    ));
    return (
        <div className="block">
            <div className={style.container}>
                <MySelectTitle title="Валюта" />
                <Select
                    dropdownClassName={style.dropdown}
                    className={style.select}
                    defaultValue="allCoin"
                    onSelect={(value) => {
                        props.setCurrency(value);
                    }}
                >
                    <Option
                        className={style.option}
                        value="allCoin"
                        label="Все валюты"
                        key="0"
                    >
                        <div className={style.itemOption}>
                            <div className={style.name}>Все валюты</div>
                        </div>
                    </Option>
                    {option}
                </Select>
            </div>
            <div className={style.item}>
                <div className={style.title}>Адрес Кошелька</div>
                <input
                    className={style.input}
                    value={props.walletAddress}
                    type="text"
                    onChange={(e) => {
                        props.setWalletAddress(e.target.value);
                    }}
                />
            </div>

            <p>По дате</p>
            <ConfigProvider locale={locale}>
                <RangePicker
                    inputReadOnly={true}
                    defaultValue={moment("2015-01-01", "YYYY-MM-DD")}
                    onChange={(value, dateString) => {
                        props.setDateRange(dateString);
                    }}
                />
            </ConfigProvider>
        </div>
    );
}
