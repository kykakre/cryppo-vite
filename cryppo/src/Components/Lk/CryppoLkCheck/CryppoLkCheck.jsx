import React, {useState} from "react";
import CryppoLkCheckAction from "./CryppoLkCheckAction/CryppoLkCheckAction";
import CryppoLkCheckSelect from "./CryppoLkCheckSelect/CryppoLkCheckSelect";
import CryppoLkCheckSlider from "./CryppoLkCheckSlider/CryppoLkCheckSlider";
import CryppoLkCheckEvent from "./CryypoLkCheckEvent/CryppoLkCheckEvent";

export default function CryppoLkCheck(props) {

    const [slider, setSlider] = useState(0)
    const setFunc = (i) => {
        setSlider(i)
    }
    return (
        <>
            <CryppoLkCheckSelect
                cardList={props.cardList}
                bankCardList={props.bankCardList}
                setFunc={setFunc}
                slider={slider}


            />
            <CryppoLkCheckSlider
                cardList={props.cardList}
                bankCardList={props.bankCardList}
                slider={slider}
            />
            <CryppoLkCheckAction/>
            <CryppoLkCheckEvent
                expenses={props.expenses}
                arrival={props.arrival}
                filter={false}
            />
        </>
    );
}
