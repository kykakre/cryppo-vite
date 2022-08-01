import businessSvg from "../Images/cryppo-business.svg";
import cryppoSvg from "../Images/cryppo.svg";
import indexSvg from "../Images/cryppo-index.svg";
import { createSlice } from "@reduxjs/toolkit";
let initialState = {
  business: {
    route: {
      logo: businessSvg,
      btn: [
        {
          id: 1,
          name: "Кому подойдет",
          to: "about",
        },
        {
          id: 2,
          name: "Преимущества",
          to: "benefitsBusiness",
        },
        {
          id: 3,
          name: "Как подключить",
          to: "connect",
        },
        {
          id: 4,
          name: "FAQ",
          to: "faq",
        },
      ],
      routeLk: "/business",
    },
    navData: [
      {
        id: 1,
        name: "Главная",
        href: "/business/lk",
      },
      {
        id: 2,
        name: "Балансы",
        href: "/business/lk/balance",
      },
      {
        id: 3,
        name: "История операций",
        href: "/business/lk/history",
      },
      {
        id: 4,
        name: "Статистика",
        href: "/business/lk/statistic",
      },
      { id: 5, name: "Настройки", href: "/business/lk/setting" },
    ],
  },
  cryppo: {
    route: {
      logo: cryppoSvg,
      btn: [
        {
          id: 1,
          name: "Кому подойдет",
          to: "about",
        },
      ],
      routeLk: "/cryppo",
    },
    navData: [
      {
        id: 1,
        name: "Главная",
        href: "cryppo/lk",
      },
      {
        id: 2,
        name: "События",
        href: "cryppo/lk/event",
      },
      {
        id: 3,
        name: "Переводы",
        href: "cryppo/lk/translations",
      },
      {
        id: 5,
        name: "Настройки",
        href: "cryppo/lk/settings",
      },
      {
        id: 4,
        name: "Инвестиции",
        href: "cryppo/lk/invest",
      },
    ],
  },
  invest: {
    navData: [
      {
        id: 1,
        name: "Главная",
        href: "/lk",
      },
      {
        id: 2,
        name: "События",
        href: "lk/event",
      },
      {
        id: 3,
        name: "Переводы",
        href: "lk/translations",
      },
      {
        id: 4,
        name: "Инвестиции",
        href: "lk/invest",
      },

      {
        id: 5,
        name: "Настройки",
        href: "lk/settings",
      },
    ],
    route: {
      logo: indexSvg,
      btn: [
        {
          id: 2,
          name: "Преимущества",
          to: "benefitsIndex",
        },
      ],
      routeLk: "/cryppo",
    },
  },
};

export const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: { }
});

export default headerSlice.reducer;
