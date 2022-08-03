import {createSlice} from "@reduxjs/toolkit";
import xrp from "../Images/payIcon/7.svg";
import xtz from "../Images/payIcon/5.svg";
import bnb from "../Images/payIcon/BNB.svg";
import bch from "../Images/payIcon/BCH.svg";
import eth from "../Images/payIcon/BCH.svg";
import ltc from "../Images/payIcon/ltc.svg";
import eos from "../Images/payIcon/eos.svg";

const initialState = {
    tempExpenses: [],
    tempArrival: [],
    expenses: [
        {
            id: 1,
            category: "Транспорт",
            cash: 9.56,
            currency: "USD",
            color: "#2F69FF",
            percent: 10,
            disable: false,
        },
        {
            id: 1,
            parentCategory: "Транспорт",
            category: "Яндекс",
            cash: 9.56,
            currency: "USD",
            color: "#4A6CBF",
            percent: 35,
            disable: false,
        },
        {
            id: 2,
            parentCategory: "Транспорт",
            category: "Uber",
            cash: 9.56,
            currency: "USD",
            color: "#0F3AA6",
            percent: 40,
            disable: false,
        },
        {
            id: 3,
            parentCategory: "Транспорт",
            category: "Ситимобил",
            cash: 9.56,
            currency: "USD",
            color: "#6390FF",
            percent: 25,
            disable: false,
        },
        {
            id: 2,
            category: "Связь",
            cash: 4.56,
            currency: "USD",
            color: "#FF612F",
            percent: 5,
            disable: false,
        },
        {
            id: 1,
            parentCategory: "Связь",
            category: "Мегафон",
            cash: 9.56,
            currency: "USD",
            color: "#FF4D14",
            percent: 35,
            disable: false,
        },
        {
            id: 2,
            parentCategory: "Связь",
            category: "Билайн",
            cash: 9.56,
            currency: "USD",
            color: "#BF5B3B",
            percent: 40,
            disable: false,
        },
        {
            id: 3,
            parentCategory: "Связь",
            category: "Теле2",
            cash: 9.56,
            currency: "USD",
            color: "#A62D07",
            percent: 25,
            disable: false,
        },
        {
            id: 3,
            category: "Супермаркеты",
            cash: 6.56,
            currency: "USD",
            color: "#BC2FFF",
            percent: 8,
            disable: false,
        },
        {
            id: 1,
            parentCategory: "Супермаркеты",
            category: "Магнит",
            cash: 9.56,
            currency: "USD",
            color: "#9A4ABF",
            percent: 35,
            disable: false,
        },
        {
            id: 2,
            parentCategory: "Супермаркеты",
            category: "Лента",
            cash: 9.56,
            currency: "USD",
            color: "#760FA6",
            percent: 40,
            disable: false,
        },
        {
            id: 3,
            parentCategory: "Супермаркеты",
            category: "Метро",
            cash: 9.56,
            currency: "USD",
            color: "#CD63FF",
            percent: 25,
            disable: false,
        },
        {
            id: 4,
            category: "Переводы",
            cash: 5.56,
            currency: "USD",
            color: "#FF40D5",
            percent: 5,
            disable: false,
        },
        {
            id: 1,
            parentCategory: "Переводы",
            category: "Tinkoff",
            cash: 9.56,
            currency: "USD",
            color: "#BF54A8",
            percent: 35,
            disable: false,
        },
        {
            id: 2,
            parentCategory: "Переводы",
            category: "Сбербанк",
            cash: 9.56,
            currency: "USD",
            color: "#A61586",
            percent: 40,
            disable: false,
        },
        {
            id: 3,
            parentCategory: "Переводы",
            category: "ВТБ",
            cash: 9.56,
            currency: "USD",
            color: "#FF96E8",
            percent: 25,
            disable: false,
        },
        {
            id: 5,
            category: "Остальное",
            cash: 12.56,
            currency: "USD",
            color: "#FF4949",
            percent: 12,
            disable: false,
        },
    ],
    arrival: [
        {
            id: 1,
            category: "Внесение через банкомат",
            cash: 9.56,
            currency: "USD",
            color: "#2F69FF",
            percent: 10,
            disable: false,
        },
        {
            
            id: 2,
            category: "Перевод",
            cash: 4.56,
            currency: "USD",
            color: "#FF612F",
            percent: 5,
            disable: false,
        },
        {
            id: 3,
            category: "Зарплата",
            cash: 6.56,
            currency: "USD",
            color: "#BC2FFF",
            percent: 8,
            disable: false,
        },
    ],
    doughuntTextData: {
        category: "Расходы",
        cash: "100",
        percent: "100%",
    },
    isHover: false,
    defaultSearch: [],
    barData: {
        activeIndex: 0,
        compositions: [
            {
                id: 1,
                name: "BTC",
                icon: xrp,
                percent: 35,
                amount: 9656,
                color: "#F7931A",
                dataKey: "btc",
            },
            {
                id: 2,
                name: "ETH",
                icon: eth,
                percent: 27,
                amount: 6566,
                color: "#3AB83A",
                dataKey: "eth",
            },
            {
                id: 3,
                name: "BNB",
                icon: bnb,
                percent: 21,
                amount: 3656,
                color: "#D80A22",
                dataKey: "bnb",
            },
            {
                id: 4,
                name: "BCH",
                icon: bch,
                percent: 17,
                amount: 1656,
                color: "#6417B1",
                dataKey: "bch",
            },
            {
                id: 5,
                name: "LTC",
                icon: ltc,
                percent: 0,
                amount: 0,
                color: "#A3A3A3",
                dataKey: "ltc",
            },
            {
                id: 6,
                name: "XTZ",
                icon: xtz,
                percent: 0,
                amount: 0,
                color: "#E0BC00",
                dataKey: "xtz",
            },
            {
                id: 7,
                name: "EOS",
                icon: eos,
                percent: 35,
                amount: 9656,
                color: "#B134DD",
                dataKey: "eos",
            },
            {
                id: 8,
                name: "XRP",
                icon: xrp,
                percent: 0,
                amount: 0,
                color: "#1276A7",
                dataKey: "xrp",
            },
        ],
    },
};
export const doughuntSlice = createSlice({
    name: "doughunt",
    initialState,
    reducers: {
        NestedCategory(state, action) {
            state.tempExpenses = action.payload;
        },
        SetChartText(state, action) {
            state.doughuntTextData.category = action.payload.category;
            state.doughuntTextData.cash = action.payload.cash;
            state.doughuntTextData.percent = action.payload.percent;
            state.isHover = true;
        },
        InitChartText(state) {
            state.doughuntTextData.category = "Расходы";
            state.doughuntTextData.cash = "100";
            state.doughuntTextData.percent = "100";
            state.isHover = false;
        },
        DisableItem(state, action) {
            if (action.payload.operationType === "expenses") {
                state.expenses.forEach((item) => {
                    if (item.id === action.payload.id) {
                        item.disable = !item.disable;
                    }
                });
                state.tempExpenses.forEach((item) => {
                    if (item.id === action.payload.id) {
                        item.disable = !item.disable;
                    }
                });
            } else {
                state.arrival.forEach((item) => {
                    if (item.id === action.payload.id) {
                        item.disable = !item.disable;
                    }
                });
                state.tempArrival.forEach((item) => {
                    if (item.id === action.payload.id) {
                        item.disable = !item.disable;
                    }
                });
            }
        },
        UpdateChart(state, action) {
            state.tempExpenses = action.payload;
        },
        FilterChart(state, action) {
            state.arrival.forEach((item) => {
                item.cash = Math.round(Math.random() * 1000) / 10;
                item.percent = Math.round(Math.random() * 10) / 10;
            });
            state.expenses.forEach((item) => {
                item.cash = Math.round(Math.random() * 1000) / 10;
                item.percent = Math.round(Math.random() * 10) / 10;
            });
            state.tempArrival.forEach((item) => {
                item.cash = Math.round(Math.random() * 1000) / 10;
                item.percent = Math.round(Math.random() * 10) / 10;
            });
            state.tempExpenses.forEach((item) => {
                item.cash = Math.round(Math.random() * 1000) / 10;
                item.percent = Math.round(Math.random() * 10) / 10;
            });
        },
        EditDefaultSearch(state, action) {
            state.defaultSearch.push(action.payload);
        },
        GetCategories(state, action) {
            return state;
        },
        ChangeActiveIndex(state, action) {
            state.barData.activeIndex = action.payload;
        },
    },
});

export default doughuntSlice.reducer;
