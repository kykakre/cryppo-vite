import { createSlice } from "@reduxjs/toolkit";
import * as PaymentsApi from "../Api/PaymentsApi";

let initialState = {
    business: {
        pageSize: 0,
        currentPage: 0,
        totalItems: 0,
        totalPages: 0,
        data: [
            {
                id: 1,
                address: "v6ftwfl50c1nmyqy5rqj4xys6e3xokux",
                status: "string",
                currency: "BTC",
                amount: 12,
                date: "2022-06-17T11:49:19.708Z",
                transactions: [
                    {
                        amount: 12,
                        hash: "d28rjm0ugbitq1cunkj6avt6iwwskxrq",
                        fee: 0,
                        link: "string",
                        date: "2022-06-17T11:49:19.708Z",
                    },
                ],
                protocol: "string",
                blockchain: "string",
            },
            {
                id: 2,
                address: "qeksz8ptz5c3ofbebijeaxwrjbjvyiks",
                status: "string",
                currency: "BTC",
                amount: 6,
                date: "2022-06-17T11:49:19.708Z",
                transactions: [
                    {
                        amount: 6,
                        hash: "t1cmrt4n3zheszsdurqbnmq2q2jyz23q",
                        fee: 0,
                        link: "string",
                        date: "2022-06-17T11:49:19.708Z",
                    },
                ],
                protocol: "string",
                blockchain: "string",
            },
            {
                id: 3,
                address: "iinz88evffm1uwdd553s8dijbftktib5",
                status: "string",
                currency: "BTC",
                amount: 34,
                date: "2022-06-17T11:49:19.708Z",
                transactions: [
                    {
                        amount: 34,
                        hash: "0pj32w83vtowj501ai56eyheaex2p2c6",
                        fee: 0,
                        link: "string",
                        date: "2022-06-17T11:49:19.708Z",
                    },
                ],
                protocol: "string",
                blockchain: "string",
            },
            {
                id: 4,
                address: "5zs8o4a438wrdgm83zgt1wymoel137hh",
                status: "string",
                currency: "ETH",
                amount: 65,
                date: "2022-06-17T11:49:19.708Z",
                transactions: [
                    {
                        amount: 65,
                        hash: "vtkwcywrn5jjpr7srfbh0iegkj4yjgwa",
                        fee: 0,
                        link: "string",
                        date: "2022-06-17T11:49:19.708Z",
                    },
                ],
                protocol: "string",
                blockchain: "string",
            },
        ],
    },
    cryppo: {},
};

export const paymentsSilce = createSlice({
    name: "payments",
    initialState,
    reducers: {
        SetPayments(state, action) {
            state.business = action.payload;
        },
    },
});

export const PaymentsPostTC = (
    pageNumber,
    pageSize,
    from,
    to,
    currency,
    status,
    address
) => {
    return (dispatch) => {
        PaymentsApi.PaymentsPost(
            pageNumber,
            pageSize,
            from,
            to,
            currency,
            status,
            address
        )
            .then((data) => {
                let value = JSON.parse(JSON.stringify(data));
                dispatch(paymentsSilce.actions.SetPayments(value));
            })
            .catch((response) => {
                console.log(response);
                console.log("error");
            });
    };
};

export default paymentsSilce.reducer;
