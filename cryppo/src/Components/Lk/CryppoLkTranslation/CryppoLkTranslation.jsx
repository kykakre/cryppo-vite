import React from "react";
import Search from "../Search/Search";
import TypeTranslation from "../TypeTranslation/TypeTranslation";
import style from "./CryppoLkTranslation.module.scss";
export default function CryppoLkTranslation(props) {
  return (
    <>
      <Search translations={props.translations} />
    </>
  );
}
