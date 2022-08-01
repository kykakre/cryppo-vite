import React from "react";
import { Navigate, Route, Routes } from "react-router";
import CryppoLkMainContainer from "../Lk/CryppoLkMain/CryppoLkMainContainer";
import CryppoLkSettings from "../Lk/CryppoLkSettings/CryppoLkSettings";
import CryppoLkTranslationContainer from "../Lk/CryppoLkTranslation/CryppoLkTranslationContainer";
import CryppoLkInvestContainer from "../Lk/CryppoLkInvest/CryppoLkInvestContainer";
import EventContainer from "../Lk/Events/EventContainer";
import PageWork from "../Lk/PageWork/PageWork";
import CryppoLkCheckContainer from "../Lk/CryppoLkCheck/CryppoLkCheckContainer";

export default function CryppoLk(props) {
  if (!props.isLogin) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className="main container">
      <Routes>
        <Route path="/" element={<CryppoLkMainContainer />} />
        <Route
          path="translations/*"
          element={<CryppoLkTranslationContainer />}
        />
        <Route path="check" element={<CryppoLkCheckContainer />} />
        <Route path="pageWork" element={<PageWork />}></Route>
        <Route path="invest/*" element={<CryppoLkInvestContainer />} />
        <Route path="settings/*" element={<CryppoLkSettings />} />
        <Route path="history" element={<PageWork />} />
        <Route
          path="event/*"
          element={
            <EventContainer
              expenses={props.expenses}
              arrival={props.arrival}
              filter={false}
            />
          }
        />
        <Route
          path="event/:category"
          element={
            <EventContainer
              filter={true}
              expenses={props.expenses}
              arrival={props.arrival}
            />
          }
        />
        <Route
          path="event/:category/:subcategory"
          element={
            <EventContainer
              filter={true}
              expenses={props.expenses}
              arrival={props.arrival}
            />
          }
        />
      </Routes>
    </div>
  );
}
