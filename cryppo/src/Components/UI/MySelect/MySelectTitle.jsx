import React from 'react'
import style from './MySelect.module.scss'

export default function MySelectTitle(props) {
    return (
        <p className={style.title}>{props.title}</p>
    )
}
