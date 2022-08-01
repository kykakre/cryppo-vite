import { connect } from "react-redux";
import SettingLk from "./SettingLk";
import {
    SetActiveCurrencyPostTC,
    DeleteDevicePostTC,
    SendNotificationsPostTC,
} from "../../../Redux/user-reducer";

let mapStateToProps = (state) => {
    return {
        setting: state.lk.business.settingData,
        langOption: state.lk.business.langOption,
        currencyList: state.lk.business.currencyList,
        balances: state.user.business.balances,
        entries: state.user.business.entries,
        terminals: state.user.business.terminals,
        notificationsSettings:
            state.user.business.userInfo.notificationsSettings,
        user: state.user.business,
        supportedViewCurrencies: state.user.business.supportedViewCurrencies,
        supportedNotificationsLanguages:
            state.user.business.supportedNotificationsLanguages,
        devices: state.user.business.devices,
    };
};

const SettingLkContainer = connect(mapStateToProps, {
    SetActiveCurrencyPostTC,
    DeleteDevicePostTC,
    SendNotificationsPostTC,
})(SettingLk);

export default SettingLkContainer;
