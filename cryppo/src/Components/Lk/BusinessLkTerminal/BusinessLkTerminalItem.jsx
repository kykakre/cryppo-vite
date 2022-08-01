import React, { useState } from "react";
import { userSlice } from "../../../Redux/user-reducer";
import style from "./BusinessLkTerminal.module.scss";
import BusinessLkTerminalLogin from "./BusinessLkTerminalModal/BusinessLkTerminalLogin";
import BusinessLkTerminalName from "./BusinessLkTerminalModal/BusinessLkTerminalName";
import BusinessLkTerminalPassword from "./BusinessLkTerminalModal/BusinessLkTerminalPassword";
import { useDispatch } from "react-redux";
import { CSSTransition } from "react-transition-group";

export default function BusinessLkTerminalItem(props) {
  const dispatch = useDispatch();
  const [inProp, setInProp] = useState(true);
  return (
    <CSSTransition
      in={inProp}
      transitionEnterTimeout={500}
      timeout={380}
      onExited={() => setInProp(true)}
      className={
        props.connected
          ? `${style.card} ${style.connected} exit`
          : `${style.card} ${style.notConnected} exit`
      }
    >
      <div>
        <div className={style.flex}>
          <div>
            <div className={style.title}>{props.name}</div>
            <div className={style.text}>{props.login}</div>
          </div>
          <div>
            <div className={style.text}>
              {new Date(props.createDate).toLocaleDateString()}
            </div>
            <div className={style.text}>{props.terminalId}</div>
          </div>
        </div>
        <div className={style.flex}>
          <BusinessLkTerminalName
            id={props.id}
            TerminalsChangeNamePostTC={props.TerminalsChangeNamePostTC}
          />
          <BusinessLkTerminalLogin
            id={props.id}
            TerminalsChangeLoginPostTC={props.TerminalsChangeLoginPostTC}
          />
          <BusinessLkTerminalPassword
            TerminalsChangePasswordPostTC={props.TerminalsChangePasswordPostTC}
          />
          <div
            className={style.link}
            onClick={() => {
              //props.TerminalsDeletePostTC(props.id);
              setInProp(false);

              setTimeout(() => {
                dispatch(userSlice.actions.TerminalDelete(props.id));
              }, 380);
            }}
          >
            Удалить терминал
          </div>
        </div>
      </div>
    </CSSTransition>
  );
}
