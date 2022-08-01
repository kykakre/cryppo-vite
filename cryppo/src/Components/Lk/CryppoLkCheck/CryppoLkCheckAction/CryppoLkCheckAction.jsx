import React from "react";
import SubtitleLk from "../../../UI/SubtitleLk/SubtitleLk";
import style from "./CryppoLkCheckAction.module.scss";
import CryppoLkCheckActionCard from "./CryppoLkCheckActionCard";

export default function CryppoLkCheckAction(props) {
  return (
    <div className={style.content}>
      <SubtitleLk subtitle="Действие" />
      <div className={style.container}>
        <CryppoLkCheckActionCard text="Пополнить" />
        <CryppoLkCheckActionCard text="Перевести" />
        <CryppoLkCheckActionCard text="Реквизиты" />
      </div>
    </div>
  );
}
