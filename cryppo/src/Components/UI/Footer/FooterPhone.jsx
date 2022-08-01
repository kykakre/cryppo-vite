import React from 'react'
import style from './Footer.module.scss'


const FooterPhone = (props) => {
  return (
    <a href={props.phone} className={style.phone}>{props.phone}</a>
  )


}
export default FooterPhone;

