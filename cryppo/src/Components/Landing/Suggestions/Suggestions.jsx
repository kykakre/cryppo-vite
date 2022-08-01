import React from 'react'
import style from './Suggestions.module.scss'
import Suggestionsitem from './SuggestionsItem'
import { Parallax } from 'react-scroll-parallax';
export default function Suggestions(props) {
    let elementItem = props.suggestions.map(e =>
        <Suggestionsitem
            id={e.id}
            key={e.id}
            number={e.number}
            text={e.text}
        />
    )
    return (
        <div className={style.container}>
            <Parallax className={style.parallax} translateX={[200, -200,]} />
            <div className={style.block}>
                <div className={style.title}>ПРЕДЛОЖЕНИЕ ДЛЯ ПРОФЕССИОНАЛЬНЫХ ИНВЕСТОРОВ</div>
                <div className={style.description}>Разместите до 10% инвестиционного капитала, чтобы получить от 3 до 15% в месяц в долларовом эквиваленте*, без навыков профессионального трейдинга и/или передачи средств в доверительное управление.</div>
                <div className={style.flex}>
                    {elementItem}
                </div>
            </div>
        </div>

    )
}
