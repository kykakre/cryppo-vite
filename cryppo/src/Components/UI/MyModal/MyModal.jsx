import React from "react";
import ReactModal from "react-modal";
import style from "./Modal.module.scss";

export default function MyModal(props) {
  const handleCloseModal = () => {
    props.setOpen(!props.open);
  };
  return (
    <div className="modal">
      <ReactModal
        className={style.modalWrapper}
        isOpen={props.open}
        onRequestClose={handleCloseModal}
        shouldCloseOnOverlayClick={true}
        ariaHideApp={false}
        closeTimeoutMS={380}
      >
        <div className={style.container}>
          <div>{props.children}</div>
        </div>
      </ReactModal>
    </div>
  );
}
