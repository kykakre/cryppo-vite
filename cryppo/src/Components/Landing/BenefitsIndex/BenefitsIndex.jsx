import React from 'react'

import style from './BenefitsIndex.module.scss'
import BenefitsIndexItem from './BenefitsIndexItem'
import { Parallax } from 'react-scroll-parallax';
import Subtitle from "../../UI/Subtitle/Subtitle";
export default function BenefitsIndex(props) {

  let elementItem = props.benefits.map(e =>
    <BenefitsIndexItem
      id={e.id}
      key={e.id}
      icon={e.icon}
      text={e.text}
    />
  )
  return (
    <div id="benefitsIndex" className={style.container}>
      <Parallax className={style.parallax} translateX={[-200, 200,]} />
      <Subtitle className={style.subtitle}>Преимущества и гарантии<span>.</span></Subtitle>
      <div className={style.block}>
        {elementItem}
      </div>
    </div>
  )
}
