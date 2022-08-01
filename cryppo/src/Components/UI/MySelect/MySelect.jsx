import React from "react";
import { Select } from "antd";
import style from "./MySelect.module.scss";
import MySelectTitle from "./MySelectTitle";

const { Option } = Select;
export default function MySelect(props) {
  let id = 0;
  let option = props.currencyList.map((e) => (
    <Option className={style.option} value={e.value} key={id++} id={e.id}>
      <div className={style.flex}>
        <div className={style.item}>
          <img src={e.img} alt={e.value} />
          <div className={style.name}>{e.value}</div>
        </div>
        <div>
          <div className={style.textBig}>1.234 ETH</div>
          <div className={style.text}>9 656 $</div>
        </div>
      </div>
    </Option>
  ));

  function handleChange(value) {
    if (props.change) {
      props.change(value);
    }
  }
  return (
    <div className={style.container}>
      <MySelectTitle title={props.title} />
      <Select
        dropdownClassName={style.dropdown}
        className={style.select}
        defaultValue=""
        onChange={handleChange}
      >
        {option}
      </Select>
    </div>
  );
}
