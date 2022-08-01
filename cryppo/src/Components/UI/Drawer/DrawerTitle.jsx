import React from "react";
import style from "./Drawer.module.scss";
export default function DrawerTitle(props) {
  return <div className={style.title}>{props.title}</div>;
}
