import React from "react";

import SecurityBusinessItem from "./SecurityBusinessItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import Subtitle from "../../UI/Subtitle/Subtitle";
import style from "./SecurityBusiness.module.scss";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import AnimSecurity from "../AnimSecurity/AnimSecurity";
export default function SecurityBusiness(props) {
  let elementItem = props.security.map((e) => (
    <SwiperSlide id={e.id} key={e.id}>
      <SecurityBusinessItem title={e.title} text={e.text} img={e.img} />
    </SwiperSlide>
  ));
  return (
    <div className={style.container}>
      <Subtitle className={style.subtitle}>
        Безопасность для вас и ваших клиентов<span>.</span>
      </Subtitle>
      <div className={style.flex}>
        <div className={style.animate}>
          <div className={style.animateImg}>
            <AnimSecurity />
          </div>
        </div>
        <div className={style.wrapper}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            navigation={{ nextEl: ".nextE", prevEl: ".prevE" }}
            pagination={{
              type: "bullets",
              clickable: true,
              el: ".dotE",
            }}
            className={style.swiper}
          >
            {elementItem}
          </Swiper>
          <div className={style.navigathion}>
            <div className="dotE"></div>
            <div className="prevE"></div>
            <div className="nextE"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
