import React from 'react'
import Subtitle from '../../UI/Subtitle/Subtitle'
import style from './LevelBusiness.module.scss'
import B2B from '../../../Images/icon/B2B.png'

export default function LevelBusiness() {
  return (
    <div className={style.flex}>
    <Subtitle className={style.subtitle}>
    Выведите свой бизнес на новый уровень вместе с CRYPPO Business
    <span>.</span>
    </Subtitle>
       
        <img className={style.img} src={B2B} alt=""/>
    </div>
  )
}
