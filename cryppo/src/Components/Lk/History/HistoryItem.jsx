import React from 'react';
import style from './History.module.scss'
const HistoryItem = (props) => {
    return (
        <div data-history={`${props.status}`} className={style.item}>
            <div className={style.wrapper}>
                <div className={style.date}>{props.date}</div>
                <div className={style.status}>{props.statusText}</div>
                <div className={style.code}>{props.code}</div>
            </div>
            <div className={style.cash}>{props.cash}</div>
        </div>
    );
}

export default HistoryItem;
