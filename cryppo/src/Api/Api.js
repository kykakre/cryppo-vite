import axios from "axios";
import getCookies from "../Utils/cookies";
export const Api = axios.create({
    baseURL: "https://b.cryppowallet.com/",
    headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${getCookies("access_token")}`,
    },
});

axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
