import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import NewsItem from "./NewsItem";
import {useSwiper} from "swiper/react";
import {Navigation, Pagination, Autoplay} from "swiper";
import SubtitleLk from "../../UI/SubtitleLk/SubtitleLk";
import "swiper/css";

import style from "./News.module.scss";

const News = (props) => {
    let newsItem = props.news.map((e) => (
        <SwiperSlide id={e.id} key={e.id}>
            <NewsItem text={e.text} img={e.img}/>
        </SwiperSlide>
    ));
    return (
        <div className={style.container}>
            <SubtitleLk subtitle="Для вас"></SubtitleLk>
            <div className={style.navigation}>
                <div className="next"></div>
                <div className="prev"></div>
            </div>

            <Swiper
                spaceBetween={25}
                slidesPerView={2}
                slidesPerGroup={2}
                navigation={{nextEl: ".next", prevEl: ".prev", slidesPerGroup: 4}}
                pagination={{
                    type: "bullets",
                    clickable: true,
                    el: ".dot",
                    slidesPerGroup: 4,
                }}
                breakpoints={{
                    420: {slidesPerView: 4.02, slidesPerGroup: 4},
                    350: {slidesPerView: 3, slidesPerGroup: 3},
                }}
                className={style.swiper}
                bre
                centeredSlides={false}
                modules={[Navigation, Pagination]}
            >
                {newsItem}
            </Swiper>
            <div className="dot"></div>
        </div>
    );
};
export default News;
