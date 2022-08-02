import * as React from 'react';
import Btn from "../../UI/Btn/Btn.jsx";

export const CheckBtn = (props) => {
    return (
            <Btn onClick={openModal} style={{ margin: "auto" }}>
                Оставить заявку
            </Btn>
    );
};