import React from "react";
import style from "./CryppoLkCheckSlider.module.scss";
import plus from "../../../../Images/plus.svg";
import CryppoLkSlide from "./CryppoLkSlide";
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectFade, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import CryppoLkSlideBank from "./CryppoLkSlideBank";
export default function CryppoLkCheckSlider(props) {
  let elem = props.cardList.map((e) => (
    <SwiperSlide id={e.id} key={e.id} className={style.card}>
      <CryppoLkSlide
        id={e.id}
        key={e.key}
        icon={e.icon}
        text={e.text}
        availability={e.availability}
        prise={e.prise}
      />
    </SwiperSlide>
  ));
  let elemCard = props.bankCardList.map((e) => (
    <SwiperSlide id={e.id} key={e.id} className={style.cardBank}>
      <CryppoLkSlideBank
        id={e.id}
        key={e.key}
        number={e.number}
        logo={e.logo}
      />
    </SwiperSlide>
  ));

  return (
    <div className={style.container}>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        effect={"fade"}
        delay={3800}
        navigation={{ nextEl: ".checkNext", prevEl: ".checkPrev" }}
        pagination={{
          type: "bullets",
          clickable: true,
          el: ".checkDot",
        }}
        modules={[EffectFade, Navigation, Pagination]}
      >
        {elem}
        {elemCard}
        <div className={style.cardMiddle}>
          <div className={style.text}>Баланс кошелька ETH</div>
          <div className={style.value}> </div>
          <div className={style.plus}>
            <img src={plus} alt="icon" className={style.icon} />
          </div>
        </div>
        <div className={style.cardLittle}>
          <div className={style.text}>Баланс кошелька ETH</div>
          <div className={style.value}> </div>
          <div className={style.plus}>
            <img src={plus} alt="icon" className={style.icon} />
          </div>
        </div>
      </Swiper>
      <div className="checkDot"></div>
      <div className={style.navigation}>
        <div className="checkPrev"></div>
        <div className="checkNext"></div>
      </div>
    </div>
  );
}
