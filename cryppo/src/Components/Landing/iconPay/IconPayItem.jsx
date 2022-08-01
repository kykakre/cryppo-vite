import React from 'react'

import style from './IconPay.module.scss'
export default function IconPayItem(props) {
    return (
        <div className={style.item}>
            <img src={props.svg} />
            <p>{props.text}</p>
        </div>
    )
}
