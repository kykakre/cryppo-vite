import React from 'react'
import style from './Text.module.scss'
export default function Text(props) {
    return (
        <p style={props.modify} className={style.text}>{props.text}</p>
    )
}
