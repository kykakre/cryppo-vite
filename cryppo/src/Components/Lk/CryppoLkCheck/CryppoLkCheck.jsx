import React from "react";
import CryppoLkCheckAction from "./CryppoLkCheckAction/CryppoLkCheckAction";
import CryppoLkCheckSelect from "./CryppoLkCheckSelect/CryppoLkCheckSelect";
import CryppoLkCheckSlider from "./CryppoLkCheckSlider/CryppoLkCheckSlider";
import CryppoLkCheckEvent from "./CryypoLkCheckEvent/CryppoLkCheckEvent";
export default function CryppoLkCheck(props) {
  return (
    <>
      <CryppoLkCheckSelect
        cardList={props.cardList}
        bankCardList={props.bankCardList}
      />
      <CryppoLkCheckSlider
        cardList={props.cardList}
        bankCardList={props.bankCardList}
      />
      <CryppoLkCheckAction />
      <CryppoLkCheckEvent
        expenses={props.expenses}
        arrival={props.arrival}
        filter={false}
      />
    </>
  );
}
