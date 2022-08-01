import React from 'react'
import Subtitle from '../../UI/Subtitle/Subtitle'
import Text from '../../UI/Text/Text'
import style from './TechnologiesIndex.module.scss'
export default function TechnologiesIndex() {
    return (
        <div className={style.container}>
            <Subtitle className={style.subtitle}>О технологии<span>.</span></Subtitle>
            <Text modify={{ textAlign: "center" }} text="Специально обученная нейронная сеть в режиме реального времени 24/7, 
            анализирует состояние рынка, составляет прогноз, совершает от 48 до 96 операций ребалансирования в сутки и изменяет балансовый 
            состав индекса для увеличения финансовой стоимости активов инвесторов." />
        </div>
    )
}
