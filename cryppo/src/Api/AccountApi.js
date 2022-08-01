import { Api } from "./Api";
import getCookies, { deleteCookie } from "../Utils/cookies";

export const LoginPost = (
    email,
    password,
    twoFactorCode,
    deviceId,
    deviceOs,
    deviceIp
) => {
    return Api.post("Account/Login", {
        email,
        password,
        twoFactorCode,
        deviceId,
        deviceOs,
        deviceIp,
    }).then((response) => {
        deleteCookie("access_token");
        document.cookie = "access_token=" + response.data.accessToken;
        return response.data;
    });
};

export const RefreshTokenPost = (token) => {
    return Api.post("Account/RefreshToken", {
        token,
    }).then((response) => {
        document.cookie = "access_token=" + response.data.accessToken;
        return response.data;
    });
};

export const RegisterPost = (email, password, company) => {
    return Api.post("Account/Register", {
        email,
        password,
        company,
    }).then((response) => {
        return response.data;
    });
};

export const ConfirmEmailPost = (email, code) => {
    return Api.post("Account/ConfirmEmail", {
        email,
        code,
    }).then((response) => {
        return response.data;
    });
};

export const ForgotPasswordPost = (email) => {
    return Api.post("Account/ForgotPassword", {
        email,
    }).then((response) => {
        return response.data;
    });
};

export const ResetPasswordPost = (
    email,
    resetPasswordCode,
    resetPasswordToken,
    newPassword,
    confirmPassword
) => {
    return Api.post("Account/ResetPassword", {
        email,
        resetPasswordCode,
        resetPasswordToken,
        newPassword,
        confirmPassword,
    }).then((response) => {
        return response.data;
    });
};
export const SendDeviceConfirmationCodePost = () => {
    return Api.post("Account/SendDeviceConfirmationCode", {
        Authorization: "Bearer " + getCookies("access_token"),
    }).then((response) => {
        console.log(response.status);
        return response.data;
    });
};

export const DeviceConfirmPost = (code) => {
    const header = {
        headers: { Authorization: "Bearer " + getCookies("access_token") },
    };
    return Api.post(
        "Account/DeviceConfirm",
        {
            code: "1111",
        },
        header
    ).then((response) => {
        console.log(response.status);
        return response.data;
    });
};

export const BalanceGet = () => {
    return Api.get("Balance/All").then((response) => {
        return response.data;
    });
};
