import React from 'react'
import style from './AboutIndex.module.scss'
export default function AboutIndexBarItem(props) {
    return (
        <div className={style.barBlock}>
            <div className={style.barItem}>
                <div className={style.barValue} style={{ width: `${props.value}` }}></div>
            </div>
            <div className={style.barWrapper}>
                <div>{props.value}</div>
            </div>
        </div>
    )
}
