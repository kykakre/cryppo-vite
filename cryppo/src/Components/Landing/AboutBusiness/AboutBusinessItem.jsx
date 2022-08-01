import React from 'react'
import style from './AboutBusiness.module.scss'

export default function AboutBusinessItem(props) {
    return (
        <div className={style.block}>
            <div className={style.item}>
                <div className={style.wrapper}>
                    <div className={style.check}></div>
                </div>
                <div className={style.title}>{props.title}</div>
                <div className={style.text}>{props.text}</div>
            </div>
        </div>
    )
}