import React from 'react'
import Accordeon from '../../UI/Accordeon/Accordeon'
import Subtitle from '../../UI/Subtitle/Subtitle'
import style from './FaqBusiness.module.scss'
export default function FaqBusiness(props) {
    let elementItem = props.faq.map(e =>
        <Accordeon
            id={e.id}
            key={e.id}
            title={e.title}
            text={e.text}
        />
    )
    return (
        <div id="faq" className={style.container}>
            <div className={style.wrapper}>
                <Subtitle className={style.subtitle}>Часто задаваемые вопросы<span>.</span></Subtitle>
            </div>
            {elementItem}
        </div>
    )
}
