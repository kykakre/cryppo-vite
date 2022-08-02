import React, { useState , Children} from "react";
import style from "./Check.module.scss";
import CheckItem from "./CheckItem";
import SubtitleLk from "../../UI/SubtitleLk/SubtitleLk";
import CheckCardBlock from "./CheckCardBlock";
import MyModal from "../../UI/MyModal/MyModal";
import CheckModal from "./CheckModal";

export default function Check({children,...props}) {
  const [open, setOpen] = useState(false);
  const [check,setCheck] =useState(false);
  function openModal() {
    setOpen(!open);
  }
  let elementCard = props.cardList.map((e) => (
    <CheckItem
      id={e.id}
      key={e.id}
      icon={e.icon}
      text={e.text}
      availability={e.availability}
      prise={e.prise}
      link={e.link}
    />
  ));
  return (

    <div className={style.containers}>
      <div className={style.block}>
        <div className={style.item}>{elementCard}</div>
          {children}

      </div>
      <MyModal setOpen={setOpen} open={open}>
        <CheckModal
          setOpen={setOpen}
          open={open}
          currencyList={props.currencyList}
        />
      </MyModal>
    </div>
  );
}
