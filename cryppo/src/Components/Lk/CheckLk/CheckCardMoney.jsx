import React from "react";
import CheckCard from "./CheckCard.jsx";
import style from "./Check.module.scss";

export const CheckCardMoney = (props) => {
  let bankCard = props.bankCardList.map((e) => (
    <div className={style.line}>
      <div className={style.wrapper}>
        <CheckCard id={e.id} key={e.id} number={e.number} logo={e.logo} />
        <div className={style.availability}>{e.count} $</div>
      </div>
    </div>
  ));

  return <div className={style.cardLine}>{bankCard}</div>;
};
