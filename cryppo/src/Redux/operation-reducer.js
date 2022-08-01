import usd from "../Images/payIcon/12.svg";
import icx from "../Images/payIcon/6.svg";
import arde from "../Images/payIcon/arde.svg";
import eth from "../Images/payIcon/eth.svg";
import visa from "../Images/icon/VISA.svg";
import masterCard from "../Images/icon/mastercard.svg";
import yandex from "../Images/icon/yandex.svg";
import arrow from "../Images/icon/arrow.svg";
import elementum from "../Images/icon/elementum.svg";
import gipo from "../Images/icon/gipo.svg";

const CHANGE_ACTIVE_INDEX = "CHANGE_ACTIVE_INDEX";
const FILTER_OPERATIONS = "FILTER_OPERATIONS";
let statusPay = {
    status: {
        error: {
            color: "linear-gradient(122.76deg, #FF6969 0%, #FF3E3E 92.55%)",
            text: "Операция отклонена",
        },
        load: {
            color: "linear-gradient(91.42deg, #FFEA2F 0%, #FF612F 100%), #C4C4C4",
            text: "Операция в обработке",
        },
        Success: {
            color: "linear-gradient(91.42deg, #2F69FF 0%, #00C0A9 100%)",
            text: "Операция одобрена",
        },
    },
};

let initialState = {
    business: {
        operationList: [
            {
                id: 1,
                address: "kdgка67lvkdlwwwebfgbfJFsodokfNFT",
                status: "Success",
                currency: "ETH",
                amount: 100.0,
                date: "2022-06-01T11:30:38.121Z",
                transactions: null,
                protocol: "string",
                blockchain: "p1q4pz0ccr8ezvbai3ax7htmrvpniqui",
                contact: "0x0rboniggyvmm4oo3sj6wwufydnden4su",
            },
            {
                id: 2,
                address: "ervndGVKUBhediu523dpiuvJBUGH3ub",
                status: "Success",
                currency: "BTC",
                amount: 100.0,
                date: "2022-06-01T11:30:38.121Z",
                transactions: null,
                protocol: "string",
                blockchain: "an2pfrkq35wsjol8gqfwlx5ga0i25v3s",
                contact: "0x88esprrmmljv3z0fv1z40cfgmllaec23",
            },
            {
                id: 3,
                address: "kdgка67lvkdlfdboTGFsodokfNFT",
                status: "Success",
                currency: "BTC",
                amount: 100.0,
                date: "2022-06-01T11:30:38.121Z",
                transactions: null,
                protocol: "string",
                blockchain: "becr6psqycu3x0qozhucufuhhen3jm3u",
                contact: "0xc0m4k5ob1tjlks4mv7suex3536gegqhk",
            },
            {
                id: 4,
                address: "kdgка67lvkdlfdboTGFsodokfNFT",
                status: "Success",
                currency: "BTC",
                amount: 100.0,
                date: "2022-06-01T11:30:38.121Z",
                transactions: null,
                protocol: "string",
                blockchain: "60cvssc2kt74wzx0fbxa5rw4t4j2bygl",
                contact: "0x8yk2yfazo0acnk7xiyp2c3vqljempup1",
            },
            {
                id: 5,
                address: "rkjnarelknjrure9w09idfv0f9evf",
                status: "Success",
                currency: "ETH",
                amount: 76.0,
                date: "2022-06-01T11:30:38.121Z",
                transactions: null,
                protocol: "string",
                blockchain: "ia55x34gf00bgyurpwxiy2xodgcxjj0v",
                contact: "0xkhc3g181h6syxs0cnski4jkou8c37brw",
            },
            {
                id: 6,
                address: "kdgка67lvkdlfdboTGFsodokfNFT",
                status: "Success",
                currency: "BTC",
                amount: 100.0,
                date: "2022-06-01T11:30:38.121Z",
                transactions: null,
                protocol: "string",
                blockchain: "mwvw21ckfr4ezvy3j1moa7wplr1q1g64",
                contact: "0xcm1rfapjh67tbhptcpbrmb7a6xjgze2g",
            },
            {
                id: 7,
                address: "kdgка67lvkdlfdboTGFsodokfNFT",
                status: "Success",
                currency: "ETH",
                amount: 99.0,
                date: "2022-06-01T11:30:38.121Z",
                transactions: null,
                protocol: "string",
                blockchain: "afxtc6xxtnch6txrrhnq6lunaglk8ur7",
                contact: "0xm1rfapjh67tbhptcpbrmb7a6xjgze2g",
            },
            {
                id: 8,
                address: "kdgка67lvkdlfdboTGFsodokfNFT",
                status: "Success",
                currency: "BTC",
                amount: 100.0,
                date: "2022-06-01T11:30:38.121Z",
                transactions: null,
                protocol: "string",
                blockchain: "uaeu6e0ldx4w4pr12k8u2p7xtkt5vmy8",
                contact: "0xzf4wlgq455v3l61gv7qacb6715tx5fuk",
            },
            {
                id: 9,
                address: "kdgка67lvkdlfdboTGFsodokfNFT",
                status: "Success",
                currency: "ETH",
                amount: 100.0,
                date: "2022-06-01T11:30:38.121Z",
                transactions: null,
                protocol: "string",
                blockchain: "4dw6odtnpbniq7suxsrxv6febpawt4y0",
                contact: "0xl7ydxgwho0cl1osv6eoc2gexi54ow18z",
            },
            {
                id: 10,
                address: "kdgка67lvkdlfdboTGFsodokfNFT",
                status: "Success",
                currency: "BTC",
                amount: 100.0,
                date: "2022-06-01T11:30:38.121Z",
                transactions: null,
                protocol: "string",
                blockchain: "84011umz0ue0cyhv18ic4bm76r48c52u",
                contact: "0xklrniysoljvk8vfmn7000srf3a30lhuv",
            },
        ],
    },
    cryppo: {
        operationList: [
            {
                id: 1,
                address: "kdgка67lvkdlfdboTGFsodokfNFT",
                status: "Success",
                currency: "ETH",
                amount: 100.0,
                date: "2022-06-01T11:30:38.121Z",
                transactions: null,
                protocol: "string",
                blockchain: null,
            },
            {
                id: 2,
                address: "kdgка67lvkdlfdboTGFsodokfNFT",
                status: "Success",
                currency: "BTC",
                amount: 100.0,
                date: "2022-06-01T11:30:38.121Z",
                transactions: null,
                protocol: "string",
                blockchain: null,
            },
            {
                id: 3,
                address: "kdgка67lvkdlfdboTGFsodokfNFT",
                status: "Success",
                currency: "BTC",
                amount: 100.0,
                date: "2022-06-01T11:30:38.121Z",
                transactions: null,
                protocol: "string",
                blockchain: null,
            },
            {
                id: 4,
                address: "kdgка67lvkdlfdboTGFsodokfNFT",
                status: "Success",
                currency: "ETH",
                amount: 100.0,
                date: "2022-06-01T11:30:38.121Z",
                transactions: null,
                protocol: "string",
                blockchain: null,
            },
            {
                id: 5,
                address: "kdgка67lvkdlfdboTGFsodokfNFT",
                status: "Success",
                currency: "BTC",
                amount: 100.0,
                date: "2022-06-01T11:30:38.121Z",
                transactions: null,
                protocol: "string",
                blockchain: null,
            },
            {
                id: 6,
                address: "kdgка67lvkdlfdboTGFsodokfNFT",
                status: "Success",
                currency: "ETH",
                amount: 100.0,
                date: "2022-06-01T11:30:38.121Z",
                transactions: null,
                protocol: "string",
                blockchain: null,
            },
        ],
        cardData: [
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
        bankCardData: [
            {
                id: 1,
                number: 5678,
                logo: masterCard,
            },
            {
                id: 2,
                number: 7658,
                logo: visa,
            },
        ],
        statisticData: [
            {
                id: 1,
                text: "Самая большая покупка",
                title: "Paw*comfortbooking",
                icon: gipo,
                descripthion: "690 $",
            },
            {
                id: 2,
                text: "Чаще всего покупали",
                title: "Яндекс Такси",
                icon: yandex,
                descripthion: "27 раз",
            },
            {
                id: 3,
                text: "Вы заработали на CRYPPO INDEX",
                title: "0.00 $",
                icon: elementum,
                descripthion: "",
            },
            {
                id: 4,
                text: "Всего покупок",
                title: "1.678 $",
                icon: arrow,
                descripthion: "Больше февраля на 345 $",
            },
        ],
        isHover: false,
    },
    templateExpensesStatisticData: [],
    templateArrivalStatisticData: [],
};
const operationReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_OPERATIONS:
            return {
                ...state,
                expensesStatisticData: action.value.currency,
            };
        case CHANGE_ACTIVE_INDEX:
            return {
                ...state,
                barData: {
                    activeIndex: action.value,
                    compositions: state.cryppo.barData.compositions,
                },
            };
        default:
            return state;
    }
};

export const changeActiveIndex = (value) => ({
    type: CHANGE_ACTIVE_INDEX,
    value,
});
export default operationReducer;
