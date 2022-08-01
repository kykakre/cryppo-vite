import React, { useEffect } from "react";
import style from "./CompositionIndex.module.scss";
import CompositionIndexItem from "./CompositionIndexItem";
import MyBar from "../../UI/MyBar/MyBar";
import { doughuntSlice } from "../../../Redux/DoughuntReducer";

export default function CompositionIndex(props) {
    const changeActiveIndex = doughuntSlice.actions.ChangeActiveIndex;
    let id = 0;
    useEffect(() => {
        const from = new Date();
        from.setDate(from.getDate() - 5);
        props.RevenuePostTC(from.toISOString(), new Date().toISOString(), null);
    }, []);

    let items = props.revenue.map((e) => (
        <CompositionIndexItem
            changeActiveIndex={changeActiveIndex}
            id={id}
            key={id++}
            icon={e.icon}
            name={e.currency}
            value={e.amount}
            color={e.color}
            percent={e.percent}
            activeIndex={props.compositionActiveIndex}
        />
    ));
    return (
        <div className="block">
            <div className={style.text}>
                Активы, их текущая рыночная стоимость и процентный показатель
                доли в индексе
            </div>
            <div className={style.wrapperIndex}>{items}</div>
            <MyBar
                activeIndex={props.compositionActiveIndex}
                revenue={props.revenue}
                height={`300px`}
                changeActiveIndex={changeActiveIndex}
            />
        </div>
    );
}
