import React from "react";
import Logo from "../Logo/Logo";
import FooterMail from "./FooterMail";
import FooterSocial from "./FooterSocial";
import FooterPhone from "./FooterPhone";
import style from './Footer.module.scss'

const Footer = (props) => {
  let elementItem = props.mail.map(e =>
    <FooterMail
      id={e.id}
      key={e.id}
      text={e.text}
    />
  )
  let elementIcon = props.icon.map(e =>
    <FooterSocial
      id={e.id}
      key={e.id}
      icon={e.icon}
      href={e.href}
    />
  )
  let elementPhone = props.phone.map(e =>
    <FooterPhone
      id={e.id}
      key={e.id}
      phone={e.phone}
    />
  )


  return (
    <div className={style.container}>
      <div className={style.flex}>
        <div className={style.item}>
          <Logo logo={props.logo} bussiness={props.bussiness} index={props.index} cryppo={props.cryppo} />
          <div className={style.wrapper}>
            <a href="src/Components/UI/Footer/Footer#">PRIVACY POLICY</a>
            <a href="src/Components/UI/Footer/Footer#">TERMS OF USE</a>
          </div>
        </div>
        {elementItem}
        <div className={style.social}>
          <div className={style.number}>Телефон для связи:</div>
          <div className={style.phone}>{elementPhone}</div>
          <div className={style.iconContainer}>{elementIcon}</div>
        </div>
      </div>
    </div>
  )
}
export default Footer;
