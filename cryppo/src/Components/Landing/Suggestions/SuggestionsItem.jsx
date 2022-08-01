import React from 'react';
import style from './Suggestions.module.scss'
const Suggestionsitem = (props) => {
    return (
        <div className={style.item}>
            <div className={style.number}>{props.number}</div>
            <div className={style.text}>{props.text}</div>
        </div>
    );
}

export default Suggestionsitem;
