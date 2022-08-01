import React,{useState} from 'react'
import style from './Security.module.scss'

export default function Btn(props) {
const[active,setActive]=useState(false);

function activeF(){
    setActive(true)
}
function noActiveF(){
    setActive(false)
}


  return (
    <div className={style.btnContainer}>
    <div onClick={activeF} className={active?`${style.btn} ${style.active}`:`${style.btn}` }>Включена</div>
    <div onClick={noActiveF} className={active?`${style.btn} `:`${style.btn} ${style.noactive}`}>Выключена</div>
    </div>
  )
}
