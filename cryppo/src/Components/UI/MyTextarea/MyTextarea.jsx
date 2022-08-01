import style from "./MyTextarea.module.scss";
import React from "react";
import { Input } from "antd";
const { TextArea } = Input;

const MyTextarea = ({ title }) => {
  return (
    <div className={style.container}>
      <p>{title}</p>
      <TextArea showCount maxLength={100} />
    </div>
  );
};

export default MyTextarea;
