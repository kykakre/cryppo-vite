import React from "react";
import CheckItem from "../../CheckLk/CheckItem.jsx";
import style from "../../CheckLk/Check.module.scss";
import CheckCard from "../../CheckLk/CheckCard.jsx";

export default function CryppoLkCheckBody(props) {
    let newArray = props.cardList.concat(props.bankCardList)
    let elem = newArray.map((e, i) => (
        < >
            {e.logo ? (<div className={style.line} key={e.id} onClick={() => props.setFunc(i)}>

                <div className={style.wrapper}>
                    <CheckCard id={e.id} key={e.id} number={e.number} logo={e.logo}/>
                    <div className={style.availability}>{e.count} $</div>
                </div>
            </div>) : (<CheckItem
                setFunc={props.setFunc}
                i={i}
                id={e.id}
                key={e.id}
                icon={e.icon}
                text={e.text}
                availability={e.availability}
                prise={e.prise}
            />)}


        </>

    ))

    return (
        < div className={style.block}>
            <div>{elem}</div>
        </div>

        //     <Check setCheck={true} cardList={props.cardList}>
        //     <CheckCardMoney bankCardList={props.bankCardList}/>
        //      </Check>

    );
}
