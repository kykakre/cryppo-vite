import React from "react";
import {Dropdown} from "antd";
import CryppoLkCheckActive from "./CryppoLkCheckActive";
import Check from "../../CheckLk/Check";
import style from "./CryppoLkCheckSelect.module.scss";
import CheckCardBlock from "../../CheckLk/CheckCardBlock.jsx";
import {CheckCardMoney} from "../../CheckLk/CheckCardMoney";

export default function CryppoLkCheckSelect(props) {
    return (
        <Dropdown
            overlay={
                <div className={style.body}>
                    <Check setCheck={true} cardList={props.cardList}>
                        <CheckCardMoney bankCardList={props.bankCardList}/>
                    </Check>
                </div>
            }
            trigger={["click"]}
        >
            <a onClick={(e) => e.preventDefault()}>
                <CryppoLkCheckActive {...props.cardList[0]} />
            </a>
        </Dropdown>
    );
}
