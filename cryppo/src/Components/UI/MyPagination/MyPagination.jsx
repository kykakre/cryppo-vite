import React from "react";
import { getPagesArray } from "../../../Utils/pages";
import style from "./MyPagination.module.scss";
const MyPagination = ({ totalPages, page, changePage }) => {
  let pagesArray = getPagesArray(totalPages);
  return (
    <div className={style.wrapper}>
      {pagesArray.map((p) => (
        <span
          onClick={() => changePage(p)}
          key={p}
          className={
            page === p ? `${style.page} ${style.active}` : `${style.page}`
          }
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default MyPagination;
