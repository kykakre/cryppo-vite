import React from 'react'
import style from './BenefitsIndex.module.scss'


export default function BenefitsIndexItem(props) {
  return (
    <div className={style.item}>
      <div className={style.wrapper}>
        <img src={props.icon} alt="icon" />
      </div>

      <div className={style.text}>{props.text}</div>
    </div>
  )
}
