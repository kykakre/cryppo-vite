import React from "react";
import { Routes, Route } from "react-router";
import SettingLkMain from "./SettingLkMain";
import GeneralSetting from "../GeneralSetting/GeneralSetting";
import Security from "../Security/Security";
import Notification from "../Notification/Notification";
import BusinessLkTerminalContainer from "../BusinessLkTerminal/BusinessLkTerminalContainer";

export default function SettingLk(props) {
    return (
        <Routes>
            <Route path="/" element={<SettingLkMain />} />
            <Route
                path="general"
                element={
                    <GeneralSetting
                        langOption={props.langOption}
                        currencyList={props.currencyList}
                        user={props.user}
                        setting={props.setting}
                        balances={props.balances}
                        SetActiveCurrencyPostTC={props.SetActiveCurrencyPostTC}
                        supportedViewCurrencies={props.supportedViewCurrencies}
                        supportedNotificationsLanguages={
                            props.supportedNotificationsLanguages
                        }
                    />
                }
            />
            <Route
                path="safety"
                element={
                    <Security
                        DeleteDevicePostTC={props.DeleteDevicePostTC}
                        entries={props.entries}
                        terminals={props.terminals}
                        devices={props.devices}
                    />
                }
            />
            <Route
                path="notification"
                element={
                    <Notification
                        settingOption={props.settingOption}
                        notificationsSettings={props.notificationsSettings}
                        SendNotificationsPostTC={props.SendNotificationsPostTC}
                    />
                }
            />
            <Route path="terminal" element={<BusinessLkTerminalContainer />} />
        </Routes>
    );
}
