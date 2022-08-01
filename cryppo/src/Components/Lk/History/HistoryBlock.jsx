import React from 'react'
import SubtitleLk from '../../UI/SubtitleLk/SubtitleLk'
import style from './History.module.scss'
import HistoryItem from './HistoryItem'
export default function HistoryBlock(props) {
  let historyItem = props.historyItem.map(e =>
    <HistoryItem
      id={e.id}
      key={e.id}
      date={e.date}
      code={e.code}
      statusText={e.statusText}
      cash={e.cash}
      status={e.status}
    />
  )
  return (
    <div className={style.container}>
      <SubtitleLk subtitle="История операций" />
      {historyItem}
    </div>
  )
}
