import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router";
import BalanceContainer from "../Lk/Balance/BalanceContainer";
import BusinessLkHistoryContainer from "../Lk/BusinessLkHistory/BusinessLkHistoryContainer";
import BusinessLkStatisticContainer from "../Lk/BusinessLkStatistic/BusinessLkStatisticContainer";
import PageWork from "../Lk/PageWork/PageWork";
import SettingLkContainer from "../Lk/SettingLk/SettingLkContainer";
import SupportLkContainer from "../Lk/SupportLk/SupportLkContainer";
import BusinessLkMainContainer from "./../Lk/BusinessLkMain/BusinessLkMainContainer";
import getCookies, { deleteCookie } from "../../Utils/cookies";
import { userSlice } from "../../Redux/user-reducer";
import { useDispatch } from "react-redux";

const BusinessLk = (props) => {
    const dispatch = useDispatch();
    if (!props.isLogin) {
        return <Navigate to={"/business"} />;
    }
    dispatch(userSlice.actions.LoginBusiness());
    return (
        <Routes>
            <Route
                path="/"
                element={<BusinessLkMainContainer addCard={props.addCard} />}
            />

            <Route path="balance" element={<BalanceContainer />} />
            <Route
                path="statistic"
                element={<BusinessLkStatisticContainer />}
            />
            <Route path="history" element={<BusinessLkHistoryContainer />} />
            <Route path="setting/*" element={<SettingLkContainer />} />
            <Route
                path="support"
                element={<SupportLkContainer help={props.help} />}
            />
        </Routes>
    );
};

export default BusinessLk;
