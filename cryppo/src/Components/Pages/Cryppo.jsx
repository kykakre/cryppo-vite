import React from "react";
import { Route, Routes } from "react-router";
import FooterContainer from "../UI/Footer/FooterContainer";
import Header from "../UI/Header/Header";
import CryppoLk from "./CryppoLk";
import CryppoAuthorization from "../Lk/CryppoAuthorization/CryppoAuthorization";
import CryppoRegistry from "../Lk/CryppoRegistry/CryppoRegistry";
import CryppoLanding from "./CryppoLanding";

export default function Cryppo(props) {
    return (
        <div className="page">
            <Header
                user={props.user}
                isLk={props.isLk}
                isLogin={props.isLogin}
                SetLk={props.SetLk}
                routeLk={props.routeLk}
                header={props.header}
                card={props.card}
                alert={props.alert}
                switchTheme={props.switchTheme}
                theme={props.theme}
            />
            <Routes>
                <Route path="/" element={<CryppoLanding />} />
                <Route
                    path="cryppo/lk/*"
                    element={
                        <CryppoLk
                            isLogin={props.isLogin}
                            expenses={props.expenses}
                            arrival={props.arrival}
                            tempExpenses={props.tempExpenses}
                            tempArrival={props.tempArrival}
                        />
                    }
                />
                <Route
                    path="entrance"
                    element={
                        <CryppoAuthorization
                            LoginWalletPostTC={props.LoginWalletPostTC}
                            isLogin={props.isLogin}
                        />
                    }
                />
                <Route
                    path="registry"
                    element={
                        <CryppoRegistry
                            RegistrationWalletPostTC={
                                props.RegistrationWalletPostTC
                            }
                            isLogin={props.isLogin}
                        />
                    }
                />
            </Routes>
            <FooterContainer logo={props.logo} />
        </div>
    );
}
