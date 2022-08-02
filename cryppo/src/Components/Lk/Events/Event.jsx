import React, { useEffect } from "react";
import style from "./Event.module.scss";
import SearchBar from "../SearchBar/SearchBar";
import StatisticCash from "../StatisticCash/StatisticCash";
import Operation from "../OperationLk/Operation";
import { useParams } from "react-router";
import { useWindowSize } from "react-use";

const Event = (props) => {
  const { width } = useWindowSize();
  const { category, subcategory } = useParams();
  const defaultSearch = [];
  if (category) defaultSearch.push(category);
  if (subcategory) defaultSearch.push(subcategory);
  return (
    <div className="margin">
      <SearchBar
        updateChart={props.updateChart}
        expenses={props.expenses}
        arrival={props.arrival}
        defaultSearch={defaultSearch}
      />
      {!subcategory ? (
        <StatisticCash
          updateChart={props.updateChart}
          filter={props.filter}
          isHover={props.isHover}
          expenses={props.expenses}
          arrival={props.arrival}
          doughuntTextData={props.doughuntTextData}
          big={width < 525 ? false : true}
        />
      ) : null}

      <div className={style.wrapper}>
        <Operation
          operationList={props.operationList}
          setModal={props.setModal}
          operationModal={props.operationModal}
          isModal={props.isModal}
          switchModal={props.switchModal}
        />
      </div>
    </div>
  );
};

export default Event;
