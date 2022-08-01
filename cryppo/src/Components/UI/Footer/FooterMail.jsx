import React from 'react'
import style from './Footer.module.scss'

const FooterMail = (props) => {
    return (
        <a href={`mailto:${props.text}`} className={style.mail}>{props.text}</a>
    )


}
export default FooterMail;