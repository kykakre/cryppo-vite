import React, { useContext, useState } from "react";
import style from "./Switch.module.scss";
export default function Switch(props) {
  const [toggle, setToggle] = useState(false);

  function theme() {
    props.switchTheme(!props.theme);
    setToggle(!toggle);
  }
  return (
    <div
      onClick={theme}
      className={toggle ? `${style.switch}` : ` ${style.dark} ${style.switch} `}
    >
      <div className={style.colorMode}></div>
    </div>
  );
}
