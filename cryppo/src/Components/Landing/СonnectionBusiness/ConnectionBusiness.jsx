import React from "react";
import Subtitle from "../../UI/Subtitle/Subtitle";
import style from "./ConnectionBusiness.module.scss";
import Text from "../../UI/Text/Text";
import ConnectionBusinessItem from "./ConnectionBusinessItem";
import { Parallax } from "react-scroll-parallax";
import img from "../../../Images/content/connect-business.svg";
export default function ConnectionBusiness(props) {
  let elementItem = props.connectionList.map((e) => (
    <ConnectionBusinessItem id={e.id} key={e.id} text={e.text} />
  ));
  return (
    <div id="connect" className={style.container}>
      <Parallax className={style.parallax} translateX={[200, -200]} />
      <div className={style.flex}>
        <div className={style.block}>
          <Subtitle className={style.subtitle}>
            Как подключить CRYPPO Business<span>?</span>
          </Subtitle>
          <Text text="Вы сможете легко настроить CRYPPO Business под любой бизнес: от небольшого интернет-магазина до крупной компании с клиентами по всему миру." />
          <div className={style.list}>{elementItem}</div>
        </div>
        <div className={style.animate}>
          <img className={style.img} src={img} alt="" />
        </div>
      </div>
    </div>
  );
}
