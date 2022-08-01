import React from "react";
import { Navigate, Route, Routes } from "react-router";
import CryppoBusinessLanding from "./CryppoBusinessLanding";
import Header from "../UI/Header/Header";
import BusinessLk from "./BusinessLk";
import FooterContainer from "../UI/Footer/FooterContainer";
import BussinesAuthorization from "../Lk/BussinesAuthorization/BussinesAuthorization";
import BussinessRegistry from "../Lk/BussinessRegistry/BussinessRegistry";
import BusinessLandingContainer from "./BusinessLandingContainer";

export default function CryppoBusiness(props) {
    return (
        <div className="page">
            <Header
                user={props.user}
                isLk={props.isLk}
                isBusiness={props.isBusiness}
                hasLk={props.hasLk}
                isLogin={props.isLogin}
                header={props.header}
                card={props.card}
                routeLk={props.routeLk}
                alert={props.alert}
                removeAlert={props.removeAlert}
                switchTheme={props.switchTheme}
                theme={props.theme}
            />
            <Routes>
                <Route path="/" element={<BusinessLandingContainer />} />
                <Route
                    path="lk/*"
                    element={
                        <BusinessLk
                            addCard={props.addCard}
                            isLogin={props.isLogin}
                        />
                    }
                />
                <Route
                    path="/entrance"
                    element={
                        <BussinesAuthorization
                            isLogin={props.isLogin}
                            LoginBusinessPostTC={props.LoginBusinessPostTC}
                        />
                    }
                />
                <Route
                    path="/registry"
                    element={<BussinessRegistry isLogin={props.isLogin} />}
                />
            </Routes>
            <FooterContainer logo={props.logo} />
        </div>
    );
}
