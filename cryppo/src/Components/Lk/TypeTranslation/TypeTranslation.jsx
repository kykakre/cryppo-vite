import React from "react";
import style from "./TypeTranslation.module.scss";
import TypeTranslationItem from "./TypeTranslationItem";
import filter from "../Search/Search";

export default function TypeTranslation(props) {
  let elementCard = props.translations.map((e) => (
    <TypeTranslationItem id={e.id} key={e.id} icon={e.icon} title={e.title} />
  ));
  return <div className={style.container}>{elementCard}</div>;
}
