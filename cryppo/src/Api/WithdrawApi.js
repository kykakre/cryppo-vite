import axios from "axios";
import { Api } from "./Api";

export const WithdrawPost = (currency, address, destinationTag, amount) => {
    return Api.post("Withdraws/Withdraw", {
        currency,
        address,
        destinationTag,
        amount,
    }).then((response) => {
        return response.data.id;
    });
};

export const GenerateWithdrawCodeGet = (id) => {
    return Api.get("Withdraws/GenerateWithdrawCode/" + id).then((response) => {
        return response.data;
    });
};

export const WithdrawConfirmPost = (id, emailCode, twoFactorCode) => {
    return Api.post("Withdraws/WithdrawConfirm", {
        id,
        emailCode,
        twoFactorCode,
    }).then((response) => {
        return response.data;
    });
};

export const FeesGet = (id) => {
    return Api.get("Withdraws/Fees").then((response) => {
        return response.data;
    });
};
