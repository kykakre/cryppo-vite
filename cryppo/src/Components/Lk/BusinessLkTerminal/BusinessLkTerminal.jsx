import React, { useEffect, useState } from "react";
import BusinessLkTerminalItem from "./BusinessLkTerminalItem";
import style from "./BusinessLkTerminal.module.scss";
import BusinessLkTerminalAdd from "./BusinessLkTerminalModal/BusinessLkTerminalAdd";
import icon from "../../../Images/icon/search.svg";
export default function BusinessLkTerminal(props) {
    // useEffect(() => {
    //     props.GeneralInfoGetTC();
    // }, []);
    const [searchQuery, setSearchQuery] = useState("");
    const filterTranslation = props.terminals.filter((e) => {
        return e.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
    let terminalItem = filterTranslation.map((e) => (
        <BusinessLkTerminalItem
            id={e.id}
            key={e.id}
            name={e.name}
            login={e.login}
            terminalId={e.terminalId}
            connected={e.connected}
            createDate={e.createDate}
            TerminalsDeletePostTC={props.TerminalsDeletePostTC}
            TerminalsChangeNamePostTC={props.TerminalsChangeNamePostTC}
            TerminalsChangeLoginPostTC={props.TerminalsChangeLoginPostTC}
            TerminalsChangePasswordPostTC={props.TerminalsChangePasswordPostTC}
        />
    ));

    return (
        <div className="main container">
            <div className={style.flex}>
                <div className={style.containerSearch}>
                    <img src={icon} className={style.icon} alt="icon"></img>
                    <input
                        className={style.inputSearch}
                        placeholder={"Введите имя терминала"}
                        onChange={(event) => setSearchQuery(event.target.value)}
                    ></input>
                </div>
                <BusinessLkTerminalAdd
                    TerminalsAddPostTC={props.TerminalsAddPostTC}
                />
            </div>
            {terminalItem.length === 0 ? (
                <div className="block">
                    <div className={style.null}>Терминалы отсутствуют </div>
                </div>
            ) : (
                <div className="block">{terminalItem}</div>
            )}
        </div>
    );
}
