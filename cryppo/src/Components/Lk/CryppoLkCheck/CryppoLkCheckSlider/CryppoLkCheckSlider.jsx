import React, {useRef} from "react";
import style from "./CryppoLkCheckSlider.module.scss";
import plus from "../../../../Images/plus.svg";
import CryppoLkSlide from "./CryppoLkSlide";
import {Swiper, SwiperSlide} from "swiper/react";

import {EffectFade, Navigation, Pagination} from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import CryppoLkSlideBank from "./CryppoLkSlideBank";


export default function CryppoLkCheckSlider(props) {
    let newArray = props.cardList.concat(props.bankCardList)
    let elem = newArray.map((e) => (
        <>
            {e.logo ? (<SwiperSlide id={e.id} key={e.id} className={style.cardBank}>
                    <CryppoLkSlideBank
                        id={e.id}
                        key={e.key}
                        number={e.number}
                        logo={e.logo}
                    />
                </SwiperSlide>)
                :
                (<SwiperSlide id={e.id} key={e.id} className={style.card}>
                        <CryppoLkSlide
                            id={e.id}
                            key={e.id}
                            icon={e.icon}
                            text={e.text}
                            availability={e.availability}
                            prise={e.prise}

                        />
                    </SwiperSlide>
                )}
        </>
    ));

    const swiperRef = useRef();
    return (
        <div className={style.container}>

            <Swiper
                onSwiper={() => {
                    swiperRef.current = props.slider
                    console.log(() => props.slider)
                }}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                effect={"fade"}
                delay={3800}
                navigation={{nextEl: ".checkNext", prevEl: ".checkPrev"}}
                pagination={{
                    type: "bullets",
                    clickable: true,
                    el: ".checkDot",
                }}
                modules={[EffectFade, Navigation, Pagination]}
            >
                {elem}
                <div className={style.cardMiddle}>
                    <div className={style.text}>???????????? ???????????????? ETH</div>
                    <div className={style.value}></div>
                    <div className={style.plus}>
                        <img src={plus} alt="icon" className={style.icon}/>
                    </div>
                </div>
                <div className={style.cardLittle}>
                    <div className={style.text}>???????????? ???????????????? ETH</div>
                    <div className={style.value}></div>
                    <div className={style.plus}>
                        <img src={plus} alt="icon" className={style.icon}/>
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
