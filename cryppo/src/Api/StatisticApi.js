import {Api} from "./Api"

export const RevenuePost = (from, to, period) => {
    return Api.post("Statistic/Revenue", {
        from, to, period
    }).then((response) => {
        return response.data;
    });
};
export const ChartPost = (from, to, period) => {
    return Api.post("Statistic/Chart", {
        from, to, period
    }).then((response) => {
        return response.data;
    });
};