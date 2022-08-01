import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import Subtitle from '../../UI/Subtitle/Subtitle'
import style from './AboutBusiness.module.scss'
import AboutBusinessItem from './AboutBusinessItem'

export default function AboutBusiness(props) {
    let elementItem = props.about.map(e =>
        <AboutBusinessItem
            id={e.id}
            key={e.id}
            title={e.title}
            text={e.text}
        />
    )
    return (
        <div id="benefitsBusiness" className={style.container}>
            <Subtitle className="subtitle text-align"  gradient="?">Почему CRYPPO Business</Subtitle>
            <div className={style.flex}>
                {elementItem}
            </div>
            <Parallax className={style.parallax} translateX={[300, -300,]} />
        </div>
    )
}