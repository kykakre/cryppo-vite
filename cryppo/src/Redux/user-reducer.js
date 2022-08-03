import usd from "../Images/payIcon/12.svg";
import icx from "../Images/payIcon/6.svg";
import arde from "../Images/payIcon/arde.svg";
import eth from "../Images/payIcon/eth.svg";
import visa from "../Images/icon/VISA.svg";
import masterCard from "../Images/icon/mastercard.svg";
import * as AccountApi from "../Api/AccountApi";
import * as SettingsApi from "../Api/SettingsApi";
import * as TerminalsApi from "../Api/TerminalsApi";
import * as GeneralApi from "../Api/GeneralApi";
import {createSlice} from "@reduxjs/toolkit";

let apiState = {
    supportedCryptoCurrencies: [
        {
            name: "string",
            symbol: "string",
            img: "string",
            protocol: "string",
            blockchain: "string",
        },
    ],
    supportedViewCurrencies: [
        {
            name: "string",
            symbol: "string",
            img: "string",
            protocol: "string",
            blockchain: "string",
        },
    ],

    lastPayments: [
        {
            id: 0,
            address: "string",
            status: "string",
            currency: "string",
            amount: 0,
            date: "2022-06-08T10:36:37.972Z",
            transactions: [
                {
                    amount: 0,
                    hash: "string",
                    fee: 0,
                    link: "string",
                    date: "2022-06-08T10:36:37.973Z",
                },
            ],
            protocol: "string",
            blockchain: "string",
        },
    ],

    registerDate: "2022-06-08T10:36:37.973Z",

    supportedNotificationsLanguages: [
        {
            name: "string",
            value: "string",
        },
    ],
};

let initialState = {
    business: {
        supportedCryptoCurrencies: [
            {
                name: "TRX",
                img: "http://b.cryppowallet.com/Images/Coins/trx.svg",
            },
            {
                name: "USDT (TRC20)",
                img: "http://b.cryppowallet.com/Images/Coins/usdt.svg",
            },
            {
                name: "BNB",
                img: "http://b.cryppowallet.com/Images/Coins/bnb.svg",
            },
            {
                name: "BUSD (BEP20)",
                img: "http://b.cryppowallet.com/Images/Coins/busd.svg",
            },
            {
                name: "BTC",
                img: "http://b.cryppowallet.com/Images/Coins/btc.svg",
            },
            {
                name: "ETH",
                img: "http://b.cryppowallet.com/Images/Coins/eth.svg",
            },
            {
                name: "USDT",
                img: "http://b.cryppowallet.com/Images/Coins/usdt.svg",
            },
        ],
        supportedViewCurrencies: [
            {
                name: "USD",
                symbol: "$",
            },
            {
                name: "EUR",
                symbol: "€",
            },
        ],
        userInfo: {
            userId: "string",
            firstname: "Anna",
            lastname: "Bobs",
            twoFactorEnabled: true,
            viewCurrency: "string",
            phoneNumber: "string",
            totalBalanceInViewCurrency: 0,
            telegramConfigured: true,
            telegramLink: "string",
            photo: "string",
            shopId: "string",
            viewCurrencySymbol: "string",
            lastWeekProfitInViewCurrency: 0,
            email: "string",
            notificationsSettings: {
                systemTg: true,
                systemEmail: true,
                entryTg: true,
                entryEmail: true,
                failEntryTg: true,
                failEntryEmail: true,
                paymentGetTg: true,
                paymentGetEmail: true,
                paymentConfirmedTg: true,
                paymentConfirmedEmail: true,
                passwordChangeTg: true,
                passwordChangeEmail: true,
                notificationsChangeTg: true,
                notificationsChangeEmail: true,
            },
        },
        balances: [
            {
                currency: "BTC",
                amount: 0,
                amountInViewCurrency: 0,
                active: true,
                alwaysActive: true,
                percent: 0,
            },
            {
                currency: "ETH",
                amount: 0,
                amountInViewCurrency: 0,
                active: true,
                alwaysActive: true,
                percent: 0,
            },
        ],
        entries: [
            {
                ip: "192.168.0.1",
                deviceId: "0",
                location: " / ",
                deviceOs: "Windows NT 10.0",
                status: 1,
                date: "2022-06-26T09:13:35.15465Z",
            },
        ],
        devices: [
            {
                id: 77,
                name: "Windows NT 10.0",
                ip: "192.168.0.1",
                date: "2022-06-26T08:24:18.35106Z",
                location: null,
            },
        ],
        terminals: [
            {
                id: "3fa85f64-5717-4562-b3fc-2c963f66afa5",
                name: "Основной",
                login: "string",
                terminalId: "string",
                connected: true,
                createDate: "2022-06-08T10:36:37.975Z",
            },
            {
                id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                name: "Запасной терминал",
                login: "string",
                terminalId: "string",
                connected: false,
                createDate: "2022-06-08T10:36:37.975Z",
            },
            {
                id: "3fa85f64-5717-4562-b3fc-2c963f66afa7",
                name: "Костин",
                login: "string",
                terminalId: "string",
                connected: true,
                createDate: "2022-06-08T10:36:37.975Z",
            },
        ],
        notificationLanguage: "string",
        router: "/business",
        cardList: [
            {
                id: 1,
                icon: eth,
                text: "ETH",
                availability: "1.234 ETH",
                prise: "9 656 $",
            },
            {
                id: 2,
                icon: icx,
                text: "ICX",
                availability: "78.444 ICX",
                prise: "9 656 $",
            },
            {
                id: 3,
                icon: arde,
                text: "ARDE",
                availability: "17.235 ARDE",
                prise: "9 656 $",
            },
            {
                id: 4,
                icon: usd,
                text: "USD",
                availability: "56.254 USD",
                prise: "9 656 $",
            },
        ],
        supportedNotificationsLanguages: [
            {
                name: "Русский",
                value: "ru",
            },
            {
                name: "English",
                value: "en",
            },
        ],

    },
    cryppo: {
        accessToken: "",
        isLogin: true,
        router: "/cryppo",
        userInfo: {
            userId: "string",
            firstname: "Anna",
            lastname: "Baks",
            twoFactorEnabled: true,
            viewCurrency: "string",
            phoneNumber: "string",
            totalBalanceInViewCurrency: 0,
            telegramConfigured: true,
            telegramLink: "string",
            photo: "string",
            shopId: "string",
            viewCurrencySymbol: "string",
            lastWeekProfitInViewCurrency: 0,
            email: "string",
            notificationsSettings: {
                systemTg: true,
                systemEmail: true,
                entryTg: true,
                entryEmail: true,
                failEntryTg: true,
                failEntryEmail: true,
                paymentGetTg: true,
                paymentGetEmail: true,
                paymentConfirmedTg: true,
                paymentConfirmedEmail: true,
                passwordChangeTg: true,
                passwordChangeEmail: true,
                notificationsChangeTg: true,
                notificationsChangeEmail: true,
            },
        },
        userSettings: {
            notificationLanguage: "string",
            balances: [
                {
                    currency: "string",
                    amount: 0,
                    amountInViewCurrency: 0,
                    active: true,
                    alwaysActive: true,
                    percent: 0,
                },
            ],
            terminals: [
                {
                    id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                    name: "string",
                    login: "string",
                    terminalId: "string",
                    connected: true,
                    createDate: "2022-06-08T10:36:37.975Z",
                },
            ],
            entries: [
                {
                    ip: "string",
                    deviceId: "string",
                    location: "string",
                    deviceOs: "string",
                    status: 0,
                    date: "2022-06-08T10:36:37.973Z",
                },
            ],
        },
        mail: "k.konstantinopolskiy@gmail.com",
        cardList: [
            {
                id: 1,
                icon: eth,
                text: "ETH",
                availability: "1.234 ETH",
                prise: "9 656 $",
                link: "check",
            },
            {
                id: 2,
                icon: icx,
                text: "ICX",
                availability: "78.444 ICX",
                prise: "9 656 $",
                link: "check",
            },
            {
                id: 3,
                icon: arde,
                text: "ARDE",
                availability: "17.235 ARDE",
                prise: "9 656 $",
                link: "check",
            },
            {
                id: 4,
                icon: usd,
                text: "USD",
                availability: "56.254 USD",
                prise: "9 656 $",
                link: "check",
            },
        ],
        bankCardList: [
            {
                id: 5,
                number: 5678,
                count: "1.000",
                logo: masterCard,
                link: "check",
            },
            {
                id: 6,
                number: 7658,
                count: 500,
                logo: visa,
                link: "check",
            },
        ],
    },
    isLk: false,
    isLogin: true,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        LoginBusiness(state) {
            state.isLogin = true;
            state.isLk = true;
        },
        LoginCryppo(state, action) {
            state.cryppo.isLogin = true;
            state.cryppo.accessToken = action.payload;
            state.isLk = true;
        },
        SetLk(state, action) {
            state.isLk = action.payload.isLk;
        },
        LogoutCryppo(state) {
            state.isLogin = false;
        },
        LogoutBusiness(state) {
            state.isLogin = false;
        },
        SetInfo(state, action) {
            state.business = action.payload;
        },
        //Setting Actions
        SetActiveCurrency(state, action) {
            state.business.balances = action.payload.balances;
        },
        SetViewCurrency(state, action) {
            state.business.userInfo.viewCurrency = action.payload.viewCurrency;
        },
        SetNotificationsLang(state, action) {
            state.business.notificationLanguage = action.payload.notificationLanguage;
        },
        ChangeName(state, action) {
            state.business.userInfo = action.payload.userInfo;
        },
        ChangeEmail(state, action) {
            state.business.userInfo = action.payload.userInfo;
        },
        EnableTwoFactor(state, action) {
            state.business.userInfo = action.payload.userInfo;
        },
        CloseAccount(state) {
            state.business = null;
            state.isLk = false;
        },
        UploadPhoto(state, action) {
            state.business.userInfo = action.payload.userInfo;
        },
        ChangePhoneNumber(state, action) {
            state.business.userInfo = action.payload.userInfo;
        },
        ConfirmPhoneNumber(state, action) {
            state.business.userInfo = action.payload.userInfo;
        },
        SendNotifications(state, action) {
            state.business.userInfo = action.payload.userInfo;
        },
        EditNotification(state, action) {
            state.business.userInfo.notificationsSettings[action.payload.key] =
                action.payload.value;
        },
        // DeleteDevice(state, action) {
        //     state.business.userInfo = action.payload.userInfo;
        // },
        DeleteDevice(state, action) {
            state.business.devices = state.business.devices.filter((item) => {
                return item.date != action.payload;
            });
        },
        //Terminals Actions
        // TerminalAdd(state, action) {
        //     state.business = action.payload;
        // },
        TerminalAdd(state, action) {
            state.business.terminals.push(action.payload);
        },
        // TerminalChangeName(state, action) {
        //     state.business = action.payload;
        // },
        TerminalChangeName(state, action) {
            state.business.terminals = state.business.terminals.filter((item) => {
                if (item.id == action.payload.id) {
                    item.name = action.payload.name;
                }
                return item;
            });
        },
        // TerminalChangeLogin(state, action) {
        //     state.business = action.payload;
        // },
        TerminalChangeLogin(state, action) {
            state.business.terminals = state.business.terminals.filter((item) => {
                if (item.id == action.payload.id) {
                    item.login = action.payload.login;
                }
                return item;
            });
        },
        TerminalChangePassword(state, action) {
            state.business = action.payload;
        },
        // TerminalDelete(state, action) {
        //     state.business = action.payload;
        // },
        TerminalDelete(state, action) {
            state.business.terminals = state.business.terminals.filter((item) => {
                return item.id != action.payload;
            });
        },
    },
});

export const LoginBusinessPostTC = (
    email,
    password,
    twoFactorCode,
    deviceId,
    deviceOs,
    deviceIp
) => {
    return async (dispatch) => {
        const loginResponse = await AccountApi.LoginPost(
            email,
            password,
            twoFactorCode,
            deviceId,
            deviceOs,
            deviceIp
        );
        console.log(loginResponse);
        const sendDeviceConfirmationCode =
            await AccountApi.SendDeviceConfirmationCodePost();
        console.log(sendDeviceConfirmationCode);
        const deviceConfirm = await AccountApi.DeviceConfirmPost();
        console.log(deviceConfirm);
        dispatch(userSlice.actions.LoginBusiness(loginResponse.accessToken));
    };
};

export const LoginWalletPostTC = (email, password) => {
    return (dispatch) => {
        AccountApi.LoginPost(email, password)
            .then((data) => {
                let value = JSON.parse(JSON.stringify(data));
                dispatch(userSlice.actions.LoginBusiness(value.accessToken));
            })
            .catch((response) => {
                console.log(response);
                console.log("error");
            });
    };
};

export const RegistrationBusinessPostTC = (email, password, company) => {
    return (dispatch) => {
        AccountApi.RegisterPost(email, password, company).catch((response) => {
            console.log(response);
            console.log("error");
        });
    };
};

export const RegistrationWalletPostTC = (email, password, company) => {
    return (dispatch) => {
        AccountApi.RegisterPost(email, password, company).catch((response) => {
            console.log(response);
            console.log("error");
        });
    };
};

//SETTINGS ACTIONS

export const SetActiveCurrencyPostTC = (currency) => {
    return (dispatch) => {
        SettingsApi.SetActiveCurrencyPost(currency)
            .then((data) => {
                let value = JSON.parse(JSON.stringify(data));
                dispatch(userSlice.actions.SetActiveCurrency(value.balances));
            })
            .catch((response) => {
                console.log(response);
                console.log("error");
            });
    };
};

export const SetViewCurrencyPostTC = (currency) => {
    return (dispatch) => {
        SettingsApi.SetViewCurrencyPost(currency)
            .then((data) => {
                let value = JSON.parse(JSON.stringify(data));
                dispatch(userSlice.actions.SetActiveCurrency(value.balances));
            })
            .catch((response) => {
                console.log(response);
                console.log("error");
            });
    };
};

export const SetNotificationsLangPostTC = (lang) => {
    return (dispatch) => {
        SettingsApi.SetNotificationsLangPost(lang)
            .then((data) => {
                let value = JSON.parse(JSON.stringify(data));
                dispatch(
                    userSlice.actions.SetNotificationsLang(value.notificationLanguage)
                );
            })
            .catch((response) => {
                console.log(response);
                console.log("error");
            });
    };
};

export const CheckPasswordPostTC = (password) => {
    return (dispatch) => {
        SettingsApi.CheckPasswordPost(password)
            .then((data) => {
            })
            .catch((response) => {
                console.log(response);
                console.log("error");
            });
    };
};

export const ChangePasswordPostTC = (
    currentPassword,
    password,
    passwordConfirm,
    twoFactorCode
) => {
    return (dispatch) => {
        SettingsApi.ChangePasswordPost(
            currentPassword,
            password,
            passwordConfirm,
            twoFactorCode
        ).catch((response) => {
            console.log(response);
            console.log("error");
        });
    };
};

export const ChangeNamePostTC = (firstname, lastname) => {
    return (dispatch) => {
        SettingsApi.ChangeNamePost(firstname, lastname).catch((response) => {
            console.log(response);
            console.log("error");
        });
    };
};

export const TwoFactorInfoGetTC = () => {
    return (dispatch) => {
        SettingsApi.TwoFactorInfoGet().catch((response) => {
            console.log(response);
            console.log("error");
        });
    };
};

export const ChangeEmailPostTC = (email, password) => {
    return (dispatch) => {
        SettingsApi.ChangeEmailPost(email, password)
            .then((data) => {
                let value = JSON.parse(JSON.stringify(data));
                dispatch(userSlice.actions.ChangeEmail(value.userInfo));
            })
            .catch((response) => {
                console.log(response);
                console.log("error");
            });
    };
};

export const EnableTwoFactorPostTC = (code) => {
    return (dispatch) => {
        SettingsApi.EnableTwoFactorPost(code)
            .then((data) => {
                let value = JSON.parse(JSON.stringify(data));
                dispatch(userSlice.actions.EnableTwoFactor(value.userInfo));
            })
            .catch((response) => {
                console.log(response);
                console.log("error");
            });
    };
};

export const CloseAccountGetTC = (code) => {
    return (dispatch) => {
        SettingsApi.CloseAccountGet(code)
            .then((data) => {
                dispatch(userSlice.actions.CloseAccount());
            })
            .catch((response) => {
                console.log(response);
                console.log("error");
            });
    };
};

export const UploadPhotoPostTC = (file) => {
    return (dispatch) => {
        SettingsApi.UploadPhotoPost(file)
            .then((data) => {
                let value = JSON.parse(JSON.stringify(data));
                dispatch(userSlice.actions.UploadPhoto(value.userInfo));
            })
            .catch((response) => {
                console.log(response);
                console.log("error");
            });
    };
};

export const ChangePhoneNumberPostTC = (phoneNumber, password) => {
    return (dispatch) => {
        SettingsApi.ChangePhoneNumberPost(phoneNumber, password)
            .then((data) => {
                let value = JSON.parse(JSON.stringify(data));
                dispatch(userSlice.actions.ChangePhoneNumber(value.userInfo));
            })
            .catch((response) => {
                console.log(response);
                console.log("error");
            });
    };
};

export const ConfirmPhoneNumberPostTC = (code) => {
    return (dispatch) => {
        SettingsApi.ConfirmPhoneNumberPost(code)
            .then((data) => {
                let value = JSON.parse(JSON.stringify(data));
                dispatch(userSlice.actions.ConfirmPhoneNumber(value.userInfo));
            })
            .catch((response) => {
                console.log(response);
                console.log("error");
            });
    };
};

export const SendNotificationsPostTC = (notificationsSettings) => {
    return (dispatch) => {
        SettingsApi.SendNotificationsPost(notificationsSettings)
            .then((data) => {
                let value = JSON.parse(JSON.stringify(data));
                dispatch(userSlice.actions.SendNotifications(value.userInfo));
            })
            .catch((response) => {
                console.log(response);
                console.log("error");
            });
    };
};

export const SendEmailConfirmationCodePostTC = (email) => {
    return (dispatch) => {
        SettingsApi.SendEmailConfirmationCodePost(email).catch((response) => {
            console.log(response);
            console.log("error");
        });
    };
};
//TERMINAL THUNK
export const DeleteDevicePostTC = (id) => {
    return (dispatch) => {
        SettingsApi.DeleteDevicePost(id)
            .then((data) => {
                let value = JSON.parse(JSON.stringify(data));
                dispatch(userSlice.actions.SendNotifications(value.userInfo));
            })
            .catch((response) => {
                console.log(response);
                console.log("error");
            });
    };
};

export const TerminalsAddPostTC = (name, login, password, passwordConfirm) => {
    return (dispatch) => {
        TerminalsApi.AddPost(name, login, password, passwordConfirm)
            .then((data) => {
                let value = JSON.parse(JSON.stringify(data));
                dispatch(userSlice.actions.TerminalAdd(value));
            })
            .catch((response) => {
                console.log(response);
                console.log("error");
            });
    };
};

export const TerminalsChangeNamePostTC = (name, id) => {
    return (dispatch) => {
        TerminalsApi.ChangeNamePost(name, id)
            .then((data) => {
                let value = JSON.parse(JSON.stringify(data));
                dispatch(userSlice.actions.TerminalChangeName(value));
            })
            .catch((response) => {
                console.log(response);
                console.log("error");
            });
    };
};
export const TerminalsChangeLoginPostTC = (login, id) => {
    return (dispatch) => {
        TerminalsApi.ChangeLoginPost(login, id)
            .then((data) => {
                let value = JSON.parse(JSON.stringify(data));
                dispatch(userSlice.actions.TerminalChangeLogin(value));
            })
            .catch((response) => {
                console.log(response);
                console.log("error");
            });
    };
};
export const TerminalsChangePasswordPostTC = (
    passwordConfirm,
    password,
    id
) => {
    return (dispatch) => {
        TerminalsApi.ChangePasswordPost(passwordConfirm, password, id)
            .then((data) => {
                let value = JSON.parse(JSON.stringify(data));
                dispatch(userSlice.actions.TerminalChangePassword(value));
            })
            .catch((response) => {
                console.log(response);
                console.log("error");
            });
    };
};
export const TerminalsDeletePostTC = (id) => {
    return (dispatch) => {
        TerminalsApi.DeletePost(id)
            .then((data) => {
                let value = JSON.parse(JSON.stringify(data));
                dispatch(userSlice.actions.TerminalDelete(value));
            })
            .catch((response) => {
                console.log(response);
                console.log("error");
            });
    };
};
//GENERAL THUNK
export const GeneralInfoGetTC = () => {
    return (dispatch) => {
        GeneralApi.InfoGet()
            .then((data) => {
                let value = JSON.parse(JSON.stringify(data));
                dispatch(userSlice.actions.SetInfo(value));
            })
            .catch((response) => {
                console.log(response);
                console.log("error");
            });
    };
};
export default userSlice.reducer;
