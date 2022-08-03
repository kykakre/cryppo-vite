import * as React from 'react';
import Btn from "../../UI/Btn/Btn.jsx";
import {useState} from "react";

export const CheckBtn = (props) => {
    const [open, setOpen] = useState(false);

    function openModal() {
        setOpen(!open);
    }

    return (
        <Btn onClick={openModal} style={{margin: "auto"}}>
            Оставить заявку
        </Btn>
    );
};