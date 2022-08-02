import bag from "../Images/icon/bag.svg";
import qron from "../Images/icon/qron.svg";
import elementum from "../Images/icon/elementum.svg";
import index from "../Images/icon/index.svg";
import profit from "../Images/icon/profit.svg";
import plus from "../Images/icon/plus.svg";
import calculate from "../Images/news/1.svg";
import analitica from "../Images/news/2.svg";
import cryptocard from "../Images/news/3.svg";
import cryptocard2 from "../Images/news/4.svg";
import gipo from "../Images/icon/gipo.svg";
import three from "../Images/payIcon/3.svg";
import five from "../Images/payIcon/5.svg";
import six from "../Images/payIcon/6.svg";
import rus from "../Images/counry/russia.png";
import ukr from "../Images/counry/ukraine.png";
import kaz from "../Images/counry/kazakhstan.png";
import masterCard from "../Images/icon/mastercard.svg";
import yandex from "../Images/icon/yandex.svg";
import eth from "../Images/payIcon/eth.svg";
import one from "../Images/payIcon/eth.svg";
import two from "../Images/payIcon/2.svg";
import four from "../Images/payIcon/4.svg";
const SET_MODAL = "SET_MODAL";
const SWITCH_MODAL = "SWITCH_MODAL";
const SET_CHART_TEXT = "SET_CHART_TEXT";
const INIT_CHART_TEXT = "INIT_CHART_TEXT";
const REMOVE_ALERT = "REMOVE_ALERT";
const DELETE_ITEM = "DELETE_ITEM";

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
    access: {
      color: "linear-gradient(91.42deg, #2F69FF 0%, #00C0A9 100%)",
      text: "Операция одобрена",
    },
  },
};
let initialState = {
  business: {
    expenses: [
      {
        id: 1,
        category: "Транспорт",
        cash: 9.56,
        currency: "USD",
        color: "#2F69FF",
        percent: 10,
        disable: false,
        childExpensesStatistics: [
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
        ],
      },
      {
        id: 2,
        category: "Cвязь",
        cash: 4.56,
        currency: "USD",
        color: "#FF612F",
        percent: 5,
        disable: false,
        childExpensesStatistics: [
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
        ],
      },
      {
        id: 3,
        category: "Супермаркеты",
        cash: 6.56,
        currency: "USD",
        color: "#BC2FFF",
        percent: 8,
        disable: false,
        childExpensesStatistics: [
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
        ],
      },
      {
        id: 4,
        category: "Переводы",
        cash: 5.56,
        currency: "USD",
        color: "#FF40D5",
        percent: 5,
        disable: false,
        childExpensesStatistics: [
          {
            id: 1,
            parentCategory: "Перевод",
            category: "Tinkoff",
            cash: 9.56,
            currency: "USD",
            color: "#BF54A8",
            percent: 35,
            disable: false,
          },
          {
            id: 2,
            parentCategory: "Перевод",
            category: "Сбербанк",
            cash: 9.56,
            currency: "USD",
            color: "#A61586",
            percent: 40,
            disable: false,
          },
          {
            id: 3,
            parentCategory: "Перевод",
            category: "ВТБ",
            cash: 9.56,
            currency: "USD",
            color: "#FF96E8",
            percent: 25,
            disable: false,
          },
        ],
      },
      {
        id: 5,
        category: "Остальное",
        cash: 12.56,
        currency: "USD",
        color: "#FF4949",
        percent: 12,
        disable: false,
        childExpensesStatistics: [],
      },
    ],
    arrival: [{}],
    alertData: [
      {
        id: 1,
        message: "Вывод прошел успешно",
        description: "Вывод средств с криптокошелька на карту прошел успешно",
        type: "success",
      },
      {
        id: 2,
        message: "Внимание",
        description:
          "Настоятельно рекомендуем подключить двухфакторную аунтификацию",
        type: "info",
      },
      {
        id: 3,
        message: "Опасность",
        description: "Выполнен вход с чужого аккаунта",
        type: "warning",
      },
    ],
    currencyList: [
      {
        id: 5,
        value: "ETH",
        img: one,
      },
      {
        id: 6,
        value: "Bitcoin1",
        img: two,
      },
      {
        id: 7,
        value: "Bitcoin2",
        img: three,
      },
      {
        id: 8,
        value: "Bitcoin3",
        img: four,
      },
      {
        id: 9,
        value: "Bitcoin4",
        img: five,
      },
      {
        id: 10,
        value: "Bitcoin5",
        img: six,
      },
    ],
    langOption: [
      {
        id: 1,
        flag: rus,
        name: "Русский",
      },
      {
        id: 2,
        flag: ukr,
        name: "Украинский",
      },
      {
        id: 3,
        flag: kaz,
        name: "Казахстанский",
      },
    ],

    settingData: [
      {
        id: 1,
        icon: one,
        name: "BTC",
        value: true,
      },
      {
        id: 2,
        icon: two,
        name: "ETX",
        value: true,
      },
      {
        id: 3,
        icon: three,
        name: "ICX",
        value: true,
      },
      {
        id: 4,
        icon: four,
        name: "ARDE",
        value: true,
      },
      {
        id: 5,
        icon: two,
        name: "ETH",
        value: true,
      },
      {
        id: 6,
        icon: one,
        name: "ARDE",
        value: true,
      },
      {
        id: 7,
        icon: four,
        name: "BTC",
        value: true,
      },
      {
        id: 8,
        icon: one,
        name: "BTC",
        value: true,
      },
      {
        id: 9,
        icon: five,
        name: "BTC",
        value: true,
      },
      {
        id: 10,
        icon: six,
        name: "BTC",
        value: true,
      },
    ],
    isModal: false,
    tabsData: {
      invest: {
        id: 1,
        icon: bag,
        title: "Инвестиции CRYPPO INVEST",
        statistic: "0.00000000",
        cash: "$ 0.00",
        text: "Powered by Elementum",
        povered: elementum,
        href: "",
      },
      addCart: {
        id: 1,
        icon: plus,
        title: "Привязать карту",
        text: "Powered by QRON",
        povered: qron,
        href: "pageWork/",
      },
      addTerminal: {
        id: 1,
        icon: plus,
        title: "Привязать терминал",
        text: "Powered by QRON",
        povered: qron,
        href: "setting/terminal",
      },
      indexNow: {
        id: 1,
        icon: index,
        title: "Текущая стоимость индекса",
        cash: "$ 28.84",
        href: "",
      },

      volumeIndex: {
        id: 1,
        icon: bag,
        title: "Объем вашего индекса",
        statistic: "0.00000000 TOP8",
        cash: "$ 0.00",
        href: "",
      },

      buyNow: {
        id: 1,
        icon: plus,
        title: "Купить индекс",
        href: "cryppo/lk/pageWork",
      },
    },
    operationModal: {
      id: null,
      type: null,
      icon: null,
      title: null,
      check: null,
      data: null,
      iconPay: null,
      currencyPay: null,
      cash: null,
      firm: null,
      bankCardData: {
        id: null,
        number: null,
        logo: null,
        color: null,
      },
      status: {
        color: null,
        text: null,
      },
    },
    helpData: [
      {
        id: 1,
        number: "+7 800 123-23-23",
        country: "Россия",
        flag: rus,
      },
      {
        id: 2,
        number: "+38 0443 123-233",
        country: "Украина",
        flag: ukr,
      },
      {
        id: 3,
        number: "+77 273 505-233",
        country: "Казахстан",
        flag: kaz,
      },
    ],
  },
  cryppo: {
    alertData: [
      {
        id: 1,
        message: "Вывод прошел успешно",
        description: "Вывод средств с криптокошелька на карту прошел успешно",
        type: "success",
      },
      {
        id: 2,
        message: "Внимание",
        description:
          "Настоятельно рекомендуем подключить двухфакторную аунтификацию",
        type: "info",
      },
      {
        id: 3,
        message: "Опасность",
        description: "Выполнен вход с чужого аккаунта",
        type: "warning",
      },
    ],
    investData: {
      id: 1,
      title: "Инвестиции CRYPPO INDEX",
      icon: bag,
      crypto: "0.00000000",
      cash: "0.00",
      povered: "Powered by Elementum",
      poveredIcon: elementum,
    },
    cardData: {
      id: 1,
      title: "Привязать карту",
      povered: "Powered by QRON",
      poveredIcon: qron,
      href: "pageWork",
    },
    translationsData: [
      {
        id: 1,
        icon: gipo,
        title: "По номеру телефона",
      },
      {
        id: 2,
        icon: gipo,
        title: "По номеру карты",
      },
      {
        id: 3,
        icon: gipo,
        title: "По реквизитам",
      },
      {
        id: 4,
        icon: gipo,
        title: "Между своими счетами",
      },
      {
        id: 5,
        icon: gipo,
        title: "По номеру карты",
      },
      {
        id: 6,
        icon: gipo,
        title: "По реквизитам",
      },
    ],
    isModal: false,
    tabsData: {
      invest: {
        id: 1,
        icon: bag,
        title: "Инвестиции CRYPPO INVEST",
        statistic: "0.00000000",
        cash: "$ 0.00",
        text: "Powered by Elementum",
        povered: elementum,
      },
      addCart: {
        id: 1,
        icon: plus,
        title: "Привязать карту",
        text: "Powered by QRON",
        povered: qron,
        href: "pageWork",
      },
      addTerminal: {
        id: 1,
        icon: plus,
        title: "Привязать терминал",
        text: "Powered by QRON",
        povered: qron,
      },
      indexNow: {
        id: 1,
        icon: index,
        title: "Текущая стоимость индекса",
        cash: "$ 28.84",
      },
      buyNow: {
        id: 1,
        icon: plus,
        title: "Купить индекс",
      },
      volumeIndex: {
        id: 1,
        icon: index,
        title: "Текущая стоимость индекса",
        cash: "$ 28.84",
      },
      indexProfit: {
        id: 1,
        icon: bag,
        title: "Объем вашего индекса",
        statistic: "0.00000000 TOP8",
        cash: "$ 0.00",
      },
    },
    operationModal: {
      id: null,
      type: null,
      icon: null,
      title: null,
      check: null,
      data: null,
      iconPay: null,
      currencyPay: null,
      cash: null,
      firm: null,
      bankCardData: {
        id: null,
        number: null,
        logo: null,
        color: null,
      },
      status: {
        color: null,
        text: null,
      },
    },
    newsData: [
      { id: 1, text: "Ваши траты за месяц", img: calculate },
      { id: 2, text: "Аналитика", img: analitica },
      { id: 3, text: "Криптокарта", img: cryptocard },
      { id: 4, text: "Криптокарта", img: cryptocard2 },
      { id: 5, text: "Криптокарта", img: cryptocard },
    ],
    tableData: [],
    tableColumns: [
      {
        title: "ID транзакции",
        dataIndex: "transaction",
        key: "transaction",
      },
      {
        title: "Дата",
        dataIndex: "date",
        key: "date",
      },
      {
        title: "Сумма",
        dataIndex: "sum",
        key: "sum",
      },
      {
        title: "Комиссия",
        dataIndex: "comission",
        key: "comission",
      },
      {
        title: "Валюта",
        dataIndex: "valute",
        key: "valute",
      },
      {
        title: "Направление",
        dataIndex: "move",
        key: "move",
      },
      {
        title: "Статус",
        dataIndex: "status",
        key: "status",
      },
    ],
  },
};
const LkReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_ITEM:
      return {
        ...state,
        connectOption: state.connectOption.filter((e) => e.id !== action.value),
      };
    case SET_MODAL:
      return {
        ...state,
        operationModal: action.value,
      };
    case SWITCH_MODAL:
      return {
        ...state,
        isModal: action.isModal,
      };

    case REMOVE_ALERT:
      return {
        ...state,
        alertData: state.alertData.filter((e) => e.id !== action.value),
      };
    default:
      return state;
  }
};
export const removeAlert = (value) => ({ type: REMOVE_ALERT, value });
export const switchModal = (isModal) => ({ type: SWITCH_MODAL, isModal });
export const setModal = (value) => ({ type: SET_MODAL, value });
export default LkReducer;
