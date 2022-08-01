import React, { useState } from "react";
import style from "./SearchBar.module.scss";
import search from "../../../Images/icon/search.svg";
import { Tag, DatePicker, ConfigProvider } from "antd";
import moment from "moment";
import "moment/locale/ru";
import locale from "antd/lib/locale/ru_RU";
import SearchWithTag from "../../UI/SearchWithTag/SearchWithTag";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { doughuntSlice } from "../../../Redux/DoughuntReducer";

const { RangePicker } = DatePicker;

const Searchbar = (props) => {
    const dispatch = useDispatch();
    const [dateRange, setDateRange] = useState();
    const [category, setCategory] = useState();
    useEffect(() => {
        dispatch(doughuntSlice.actions.FilterChart());
    }, [dateRange, category]);
    const enterDataRange = (value, dateString) => {
        setDateRange(dateString);
    };
    return (
        <div className={style.container}>
            <div className={style.block}>
                <div className={style.flex}>
                    <ConfigProvider locale={locale}>
                        <RangePicker
                            inputReadOnly={true}
                            defaultValue={moment("2015-01-01", "YYYY-MM-DD")}
                            onChange={enterDataRange}
                        />
                    </ConfigProvider>
                    <div className={style.input}>
                        <SearchWithTag
                            expenses={props.expenses}
                            arrival={props.arrival}
                            defaultSearch={props.defaultSearch}
                        />
                    </div>
                </div>
                <img
                    className={style.icon}
                    onClick={props.addTag}
                    src={search}
                    alt="search"
                />
            </div>
        </div>
    );
};

export default Searchbar;
