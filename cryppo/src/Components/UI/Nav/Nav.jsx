import React from "react";
import NavItem from "./NavItem";
import style from "../Header/Header.module.scss";

function Nav(props) {
    return (
        <nav className={style.nav}>
            <NavItem
                linkToLk={false}
                isLk={props.isLk}
                isBusiness={false}
                href="/"
                name="CRYPPO Wallet"
            />
            <NavItem
                linkToLk={false}
                isLk={props.isLk}
                isBusiness={true}
                href="/business"
                name="CRYPPO Business"
            />
            <NavItem
                linkToLk={false}
                isLk={props.isLk}
                href="/invest"
                name="CRYPPO Invest"
            />
        </nav>
    );
}

export default Nav;
