import React from "react";
import style from "./Check.module.scss";
import CheckCard from "./CheckCard";
const CheckCardBlock = (props) => {
    let bankCard = props.bankCardList.map((e) => (
        <CheckCard id={e.id} key={e.id} number={e.number} logo={e.logo} />
    ));
    return (
        <div className={style.card}>
            <div className={style.last}>
                <div className={style.drop} />
                <div className={style.bankText}>Банковские карты</div>
            </div>
            <div className={style.cardLine}>{bankCard}</div>
        </div>
    );
};

export default CheckCardBlock;
