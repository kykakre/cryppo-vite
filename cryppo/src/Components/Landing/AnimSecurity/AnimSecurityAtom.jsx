import React from 'react'

import style from './AnimSecurity.module.scss'
export default function AnimSecurityAtom(props) {
    return (
        <img className={style.atom} src={props.img} alt="" />
    )
}
