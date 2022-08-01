import React from "react";
import { Select } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { doughuntSlice } from "../../../Redux/DoughuntReducer";

const { Option } = Select;

const SearchWithTag = (props) => {
  const { category } = useParams();
  let id = 0;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleChange(e) {
    if (e.length === 0) {
      navigate(`/cryppo/lk/event`);
      return;
    }
    let category = props.expenses.filter((item) => item.category === e[0]);
    if (category === undefined || category.length === 0) {
      category = props.expenses.filter((item) => item.category === e[1]);
    }
    if (category !== undefined) {
      dispatch(
        doughuntSlice.actions.UpdateChart(category[0].childExpensesStatistics)
      );
      navigate(`/cryppo/lk/event/${category[0].category}`);
    }
  }

  const options = [];
  if (props.expenses && !category) {
    props.expenses.forEach((e) => {
      if (e.parentCategory === undefined) {
        options.push(e);
      }
    });
  }
  if (props.arrival && !category) {
    props.arrival.forEach((item) => {
      options.push(item);
    });
  }
  if (options.length < 2) {
    props.defaultSearch.forEach((item) => {
      options.push({ category: item });
    });
  }
  return (
    <Select
      mode="multiple"
      style={{ width: "100%" }}
      placeholder="Найдите любые события и операции"
      defaultValue={props.defaultSearch}
      optionLabelProp="label"
      onChange={(e) => handleChange(e)}
    >
      {options.map((item) => (
        <Option value={item.category} label={item.category} key={id++}>
          {item.category}
        </Option>
      ))}
    </Select>
  );
};

export default SearchWithTag;
