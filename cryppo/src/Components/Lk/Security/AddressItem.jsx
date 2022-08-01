import React, { useState } from "react";
import { userSlice } from "../../../Redux/user-reducer";
import style from "./Security.module.scss";
import { useDispatch } from "react-redux";
import { CSSTransition } from "react-transition-group";
export default function AddressItem(props) {
  const dispatch = useDispatch();
  const [inProp, setInProp] = useState(true);
  return (
    <CSSTransition
      in={inProp}
      timeout={380}
      onExited={() => setInProp(true)}
      className="exit"
    >
      <div>
        <div className={style.line}>
          <div className={style.itemMax}>
            {new Date(props.date).toLocaleString()}
          </div>
          <div className={style.item}>{props.ip}</div>
          <div className={style.item}>{props.location}</div>
          <div
            className={style.close}
            onClick={() => {
              setInProp(false);
              //props.DeleteDevicePostTC(props.deviceId);

              setTimeout(() => {
                dispatch(userSlice.actions.DeleteDevice(props.date));
              }, 380);
            }}
          ></div>
        </div>
      </div>
    </CSSTransition>
  );
}
