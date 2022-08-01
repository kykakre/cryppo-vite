import React, { Suspense } from "react";

import Btn from "../Btn/Btn";
import Spinner from "../Spinner/Spinner";
import Text from "../Text/Text";
import Title from "../Title/Title";
import style from "./Banner.module.scss";
const AnimIndex = React.lazy(() => import("../../Landing/AnimIndex/AnimIndex"));
export default function Banner(props) {
  if (props.page === "business") {
    return (
      <div className={style.container}>
        <div className={style.flex}>
          <div className={style.block}>
            <Title text={props.banner.title} gradient={props.banner.gradient} />
            <div className={style.text}>
              С автоматической стабилизацией курса в USDT и BUSD
            </div>
          </div>
          <img className={style.img} src={props.banner.img} alt="" />
        </div>
      </div>
    );
  }
  if (props.page === "index") {
    return (
      <div className={style.container}>
        <div className={style.flex}>
          <div className={style.block}>
            <Title text={props.banner.title} gradient={props.banner.gradient} />
            <div className={style.textIndex}>
              Автоматически ребалансируемый индекс из 8 самых
              высококапитализированных цифровых активов на основе машинного
              обучения (искусственного интеллекта)
            </div>
            <Btn href="#">Узнать больше</Btn>
          </div>
          <div className={style.item}>
            <Suspense fallback={<Spinner />}>
              <div className={style.animIndex}>
                <AnimIndex
                  bannerIndex={props.bannerIndex}
                  addStep={props.addStep}
                  step={props.step}
                />
              </div>
              <img className={style.imgAnim} src={props.banner.img} alt="" />
            </Suspense>
          </div>
        </div>
      </div>
    );
  }
}
