import React from 'react'

import style from './AnimIndex.module.scss'
export default function AnimIndexAtom(props) {
    return (
        <img className={style.atom} src={props.img} alt="" />
    )
}
