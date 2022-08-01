import React from 'react'
import style from './Title.module.scss'
export default function Title(props) {

    if (props.gradient) {
        return (
            <h1 className={style.title} data-text={props.text}>{props.text}
                <span>{props.gradient}</span>
            </h1>
        )
    } else {
        return (
            <h1 className={style.title} data-text={props.text}>{props.text}</h1>
        )
    }
}
