import React from 'react'
import style from './ConnectionBusiness.module.scss'

export default function ConnectionBusinessItem(props) {
  return (
    <div className={style.item}>
      <div className={style.wrapper}>
        <div className={style.id}>{props.id}</div>
        <div className={style.text}>{props.text}</div>
      </div>
    </div>
  )
}
