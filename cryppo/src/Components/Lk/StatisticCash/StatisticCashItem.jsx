import React from "react";
import style from "./StatisticCash.module.scss";
import { NavLink, useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { doughuntSlice } from "../../../Redux/DoughuntReducer";
const StatisticCashItem = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { category } = useParams();

    let url = `/cryppo/lk/event/${props.category}`;
    if (category !== undefined) {
        url = `/cryppo/lk/event/${category}/${props.category}`;
    }
    const foo = (e) => {
        dispatch(doughuntSlice.actions.EditDefaultSearch(props.category));
        navigate(url);
    };
    return (
        <div
            className={
                props.disable
                    ? ` ${style.disable} ${style.wrapper}`
                    : ` ${style.wrapper} `
            }
        >
            <div
                state={{ name: props.category }}
                className={style.item}
                onMouseEnter={() =>
                    dispatch(doughuntSlice.actions.SetChartText(props))
                }
                onMouseLeave={() =>
                    dispatch(doughuntSlice.actions.InitChartText())
                }
                onClick={(e) => {
                    foo(e);
                }}
            >
                <div
                    style={{ background: `${props.color}` }}
                    className={style.circle}
                ></div>
                <div className={style.category}>{props.category}</div>
                <div className={style.category}>{props.cash}</div>
                <div className={style.category}>{props.currency}</div>
            </div>

            <div
                className={style.cross}
                onClick={() => {
                    dispatch(doughuntSlice.actions.DisableItem(props));
                }}
            >
                {props.disable ? (
                    <CloseOutlined />
                ) : (
                    <CheckOutlined twoToneColor="#eb2f96" />
                )}
            </div>
        </div>
    );
};

export default StatisticCashItem;
