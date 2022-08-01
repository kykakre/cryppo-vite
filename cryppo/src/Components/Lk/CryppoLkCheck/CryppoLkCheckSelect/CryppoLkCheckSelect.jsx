import React from "react";
import { Dropdown } from "antd";
import CryppoLkCheckActive from "./CryppoLkCheckActive";
import Check from "../../CheckLk/Check";
import style from "./CryppoLkCheckSelect.module.scss";
export default function CryppoLkCheckSelect(props) {
  return (
    <Dropdown
      overlay={
        <div className={style.body}>
          <Check cardList={props.cardList} bankCardList={props.bankCardList} />
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
