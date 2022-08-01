import { Input } from "antd";
import React from "react";
import style from "./LkInput.module.scss";
const LkInput = ({ placeholder, title, ...props }) => {
  return (
    <div className={style.container}>
      <p>{title}</p>

      <Input {...props} placeholder={placeholder} className={style.input} />
    </div>
  );
};

export default LkInput;
