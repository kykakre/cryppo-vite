import React from 'react'
import style from './SecurityBusiness.module.scss'

import 'swiper/scss';
export default function SecurityBusinessItem(props) {

    return (
        <div className={style.block}>
            <div className={style.item}>
                <div className={style.img}>
                    <img src={props.img} alt="icon" />
                </div>
                <div className={style.title}>{props.title}</div>
            </div>
            <div className={style.text}>{props.text}</div>
        </div>
    )
}
