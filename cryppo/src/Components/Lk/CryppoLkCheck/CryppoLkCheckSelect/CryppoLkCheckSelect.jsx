import React from "react";
import {Dropdown} from "antd";
import CryppoLkCheckActive from "./CryppoLkCheckActive";
import Check from "../../CheckLk/Check";
import style from "./CryppoLkCheckSelect.module.scss";
import CheckCardBlock from "../../CheckLk/CheckCardBlock.jsx";
import {CheckCardMoney} from "../../CheckLk/CheckCardMoney";
import CryppoLkCheckBody from "./CryppoLkCheckBody.jsx";

export default function CryppoLkCheckSelect(props) {
    const newArray = props.cardList.concat(props.bankCardList)
    return (
        <Dropdown
            overlay={
                <div className={style.body}>
                    <CryppoLkCheckBody cardList={props.cardList} setFunc={props.setFunc}
                                       bankCardList={props.bankCardList}/>
                </div>
            }
            trigger={["click"]}
        >
            <a onClick={(e) => e.preventDefault()}>
                <CryppoLkCheckActive {...newArray[props.slider]}/>
            </a>
        </Dropdown>
    );
}
