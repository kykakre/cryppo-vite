import { Api } from "./Api";
import getCookies from "../Utils/cookies";

export const AddPost = (name, login, password, passwordConfirm) => {
    return Api.post(
        "Terminals/add",
        {
            name,
            login,
            password,
            passwordConfirm,
        },
        { Authorization: "bearer " + getCookies("access_token") }
    ).then((response) => {
        return response.data;
    });
};

export const ChangeNamePost = (name, id) => {
    return Api.post(
        "Terminals/ChangeName",
        {
            name,
            id,
        },
        { Authorization: "bearer " + getCookies("access_token") }
    ).then((response) => {
        return response.data;
    });
};

export const ChangeLoginPost = (login, id) => {
    return Api.post(
        "Terminals/ChangeLogin",
        {
            login,
            id,
        },
        { Authorization: "bearer " + getCookies("access_token") }
    ).then((response) => {
        return response.data;
    });
};

export const ChangePasswordPost = (passwordConfirm, password, id) => {
    return Api.post(
        "Terminals/ChangePassword",
        {
            passwordConfirm,
            password,
            id,
        },
        { Authorization: "bearer " + getCookies("access_token") }
    ).then((response) => {
        return response.data;
    });
};
export const DeletePost = (id) => {
    return Api.post(
        "Terminals/Delete",
        {
            id,
        },
        { Authorization: "bearer " + getCookies("access_token") }
    ).then((response) => {
        return response.data;
    });
};
