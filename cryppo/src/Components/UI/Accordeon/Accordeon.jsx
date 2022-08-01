import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";
import style from "./Accordeon.module.scss";

export default function Accordeon(props) {
  const [open, setOpen] = useState(false);
  const openedAccordeon = () => {
    setOpen(!open);
  };
  // const Text = styled.div`
  //   color: ${(props) => props.theme.color};
  // `;
  return (
    <div
      className={
        open
          ? ` ${style.container} ${style.containerOpen}`
          : ` ${style.container} `
      }
    >
      <div onClick={openedAccordeon} className={style.block}>
        <div className={style.title}>{props.title}</div>
        <div
          className={
            open
              ? ` ${style.dropdown} ${style.dropdownOpen}`
              : ` ${style.dropdown} `
          }
        ></div>
      </div>

      <CSSTransition
        in={open}
        timeout={300}
        classNames="accordion-wrapper__content"
        unmountOnExit
      >
        <section className="accordion-wrapper__content-body">
          {/* стиль темы */}
          <div className="color">{props.text}</div>
        </section>
      </CSSTransition>
    </div>
  );
}
