import {Api} from "./Api"

export const AddTickerPost = (subject, message) => {
    return Api.put("Support/AddTicker", {
        subject, message
    }).then((response) => {
        return response.data;
    });
};
export const ChartPost = (from, to, period) => {
    return Api.post("Support/Chart", {
        from, to, period
    }).then((response) => {
        return response.data;
    });
};