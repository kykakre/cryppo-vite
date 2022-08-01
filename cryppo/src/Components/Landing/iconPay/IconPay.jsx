import React from 'react'
import style from './IconPay.module.scss'
import IconPayItem from './IconPayItem'
export default function IconPay(props) {
    let elementIcon = props.appIcon.map(e =>
        <IconPayItem
            id={e.id}
            key={e.id}
            svg={e.svg}
            text={e.text}
        />
    )
    return (
        <div className={style.block}>
            {elementIcon}
        </div>
    )
}
