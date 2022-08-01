import one from "../Images/payIcon/1.svg";
import two from "../Images/payIcon/2.svg";
import three from "../Images/payIcon/3.svg";
import four from "../Images/payIcon/4.svg";
import five from "../Images/payIcon/5.svg";
import six from "../Images/payIcon/6.svg";
import seven from "../Images/payIcon/7.svg";
import each from "../Images/payIcon/8.svg";
import nine from "../Images/payIcon/9.svg";
import ten from "../Images/payIcon/10.svg";
import eleven from "../Images/payIcon/11.svg";
import tvelve from "../Images/payIcon/12.svg";
import money from "../Images/icon/money.svg";
import shield from "../Images/icon/shield.svg";
import world from "../Images/icon/world.svg";
import world2 from "../Images/icon/world-2.svg";
import shop from "../Images/icon/shop.svg";
import heart from "../Images/icon/heart.svg";
import handshake from "../Images/icon/handshake.svg";
import briefcase from "../Images/icon/briefcase.svg";
import password from "../Images/icon/password.svg";
import shield2 from "../Images/icon/shield-2.svg";
import blockchain from "../Images/icon/blockchain.svg";
import bannerBusiness from "../Images/content/banner-business.png";
import img1 from "../Images/payIcon/1.svg";
import img2 from "../Images/payIcon/2.svg";
import img3 from "../Images/payIcon/3.svg";
import img4 from "../Images/payIcon/4.svg";
import img5 from "../Images/payIcon/5.svg";
import img6 from "../Images/payIcon/6.svg";
import img7 from "../Images/payIcon/11.svg";
import Benefist1 from "../Images/icon/Benefist1.svg";
import Benefist2 from "../Images/icon/Benefist2.svg";
import Benefist3 from "../Images/icon/Benefist3.svg";
import Benefist4 from "../Images/icon/Benefist4.svg";
import bannerInvest from "../Images/content/banner-index.svg";
import { createSlice } from "@reduxjs/toolkit";
let initialState = {
  business: {
    bannerData: {
      title: "Принимайте платежи в криптовалюте по всему миру",
      gradient: ".",
      text: "С автоматической стабилизацией курса в USDT и BUSD",
      img: bannerBusiness,
    },
    appIconData: [
      {
        id: 1,
        svg: one,
        text: "BTC",
      },
      {
        id: 2,
        svg: two,
        text: "BTC2",
      },
      {
        id: 3,
        svg: three,
        text: "BTC3",
      },
      {
        id: 4,
        svg: four,
        text: "BTC4",
      },
      {
        id: 5,
        svg: five,
        text: "BT5",
      },
      {
        id: 6,
        svg: six,
        text: "BTC6",
      },
      {
        id: 7,
        svg: seven,
        text: "BTC7",
      },
      {
        id: 8,
        svg: each,
        text: "BTC8",
      },
      {
        id: 9,
        svg: nine,
        text: "BTC9",
      },
      {
        id: 10,
        svg: ten,
        text: "BTC10",
      },
      {
        id: 11,
        svg: eleven,
        text: "BTC11",
      },
      {
        id: 12,
        svg: tvelve,
        text: "BTC12",
      },
    ],
    descriptionData: [
      {
        id: 1,
        number: 13,
        text: "самых популярных криптовалют",
        img: money,
      },
      {
        id: 2,
        number: 7,
        text: "стейблкоинов, чтобы защитить ваш доход от высокой волатильности",
        img: shield,
      },
      {
        id: 3,
        number: 190,
        text: "стран, из которых вы сможете принимать платежи",
        img: world,
      },
    ],
    whoSuitsData: [
      {
        id: 1,
        title: "Международный бизнес",
        text: "CRYPPO Business упрощает работу с иностранными покупателями и делает ваш бизнес более открытым для новых клиентов и партнёров.",
        img: world2,
      },
      {
        id: 2,
        title: "Интернет-магазины",
        text: "CRYPPO Business подходит для оплаты любых товаров или услуг в криптовалюте и помогает вашему магазину выйти на новую аудиторию покупателей.",
        img: shop,
      },
      {
        id: 3,
        title: "Краудфандинг",
        text: "CRYPPO Business позволяет принимать пожертвования в криптовалюте со всего мира, чтобы ваш проект получил поддержку в других странах и смог собрать больше денег.",
        img: heart,
      },
      {
        id: 4,
        title: "Малый бизнес",
        text: "Условия платёжной системы CRYPPO Business подойдут для компаний с небольшими оборотами и локальных проектов, которые ищут возможности для дальнейшего развития.",
        img: handshake,
      },
      {
        id: 5,
        title: "Стартапы",
        text: "CRYPPO Business поможет начать быстрый рост в сфере криптовалютной коммерции и получить преимущество перед конкурентами с первых дней работы. ",
        img: briefcase,
      },
    ],
    aboutData: [
      {
        id: 1,
        title: "Защита от волатильности",
        text: "CRYPPO Business можно настроить так, чтобы все поступающие средства автоматически переводились в стейблкоины. Это криптовалюты, курс которых привязан к обычным валютам, в нашем случае ‒ к доллару. Благодаря этому вы не потеряете средства при перепадах курсов криптовалют.",
      },
      {
        id: 2,
        title: "Настройка комиссии",
        text: "CRYPPO Business подходит для оплаты любых товаров или услуг в криптовалюте и помогает вашему магазину выйти на новую аудиторию покупателей.",
      },
      {
        id: 3,
        title: "Экономия на транзакциях",
        text: "CRYPPO Business позволяет принимать пожертвования в криптовалюте со всего мира, чтобы ваш проект получил поддержку в других странах и смог собрать больше денег.",
      },
      {
        id: 4,
        title: "Единый стиль",
        text: "CRYPPO Business можно настроить так, чтобы все поступающие средства автоматически переводились в стейблкоины. Это криптовалюты, курс которых привязан к обычным валютам, в нашем случае ‒ к доллару. Благодаря этому вы не потеряете средства при перепадах курсов криптовалют.",
      },
      {
        id: 5,
        title: "Отслеживание заказов",
        text: "CRYPPO Business поможет начать быстрый рост в сфере криптовалютной коммерции и получить преимущество перед конкурентами с первых дней работы.",
      },
      {
        id: 6,
        title: "Без переплат",
        text: "CRYPPO Business позволяет принимать пожертвования в криптовалюте со всего мира, чтобы ваш проект получил поддержку в других странах и смог собрать больше денег.",
      },
    ],
    securityData: [
      {
        id: 1,
        title: "Шифрование информации",
        text: "Все платежи проходят через систему блокчейн, где данные хранятся на нескольких устройствах вместо одной базы данных. Это позволяет снизить риск сбоев и сохранить информацию о каждой транзакции.",
        img: password,
      },
      {
        id: 2,
        title: "Личные данные под защитой",
        text: "При оплате через CRYPPO Business вашему клиенту не нужно указывать личные данные, которые могут попасть к злоумышленникам.",
        img: shield2,
      },
      {
        id: 3,
        title: "Шифрование информации",
        text: "CRYPPO Business использует передовые протоколы безопасности, которые пом огают зашифровать передаваемые данные и защитить их от перехвата третьими лицами.",
        img: blockchain,
      },
    ],
    connectionData: {
      listData: [
        {
          id: 1,
          text: "Зарегистрируйтесь в личном кабинете CRYPPO Business.",
        },
        {
          id: 2,
          text: "Укажите реквизиты вашего криптовалютного кошелька, куда будут приходить платежи.",
        },
        {
          id: 3,
          text: "Настройте кнопку или форму для оплаты криптовалютой на вашем сайте.",
        },
        {
          id: 4,
          text: "Добавьте сгенерированный код на ваш сайт, где вы хотите принимать оплату криптовалютой или выберите подключение через API.",
        },
      ],
    },
    faqData: [
      {
        id: 1,
        title: "Зачем нужен CRYPPO Business?",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        id: 2,
        title: "Какую комиссию я буду платить?",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        id: 3,
        title: "Будут ли добавляться новые криптовалюты?",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        id: 4,
        title: "Что такое стейблкоины?",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        id: 5,
        title: "Я могу создать свой кошелёк с помощью CRYPPO Business?",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        id: 6,
        title: "Безопасно ли работать с CRYPPO Business?",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        id: 7,
        title: "Cryptadium принимает оплату через Visa и Mastercard?",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        id: 8,
        title: "У вас есть техническая поддержка?",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        id: 9,
        title: "Может ли физическое лицо работать с CRYPPO Business?",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        id: 10,
        title: "У вас есть реферальная программа?",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
    ],
  },
  invest: {
    aboutDataIndex: {
      Index: {
        id: 1,
        text: "$45.78",
        title: "Index",
      },
      CoinItem: [
        {
          id: 1,
          img: one,
          title: "ICX",
          number: 78.444,
        },
        {
          id: 2,
          img: three,
          title: "ETH",
          number: 1.347,
        },
        {
          id: 3,
          img: two,
          title: "ARDE",
          number: 18.769,
        },
      ],
      Bar: [
        {
          id: 1,
          value: "50%",
        },
        {
          id: 2,
          value: "15%",
        },
      ],
    },
    suggestionsData: [
      {
        id: 1,
        number: "390",
        text: "ДНЕЙ ТЕСТОВОЙ РАБОТЫ",
      },
      {
        id: 2,
        number: "1574",
        text: "ИНВЕСТИЦИОННЫЕ ОПЕРАЦИИ",
      },
      {
        id: 3,
        number: "38%",
        text: "ПРИБЫЛИ USDT",
      },
    ],
    bannerIndex: {
      icon: [
        {
          id: 1,
          img: img1,
        },
        {
          id: 2,
          img: img2,
        },
        {
          id: 3,
          img: img3,
        },
        {
          id: 4,
          img: img4,
        },
        {
          id: 5,
          img: img5,
        },
        {
          id: 6,
          img: img6,
        },
        {
          id: 7,
          img: img7,
        },
      ],
    },
    step: 1,
    benefitsData: [
      {
        id: 1,
        icon: Benefist1,
        text: "Ваши инвестиции на личном кошельке инвестора внутри блокчейна CRYPPO INVEST",
      },
      {
        id: 2,
        icon: Benefist2,
        text: "Абсолютная прозрачность всех инвестиционных транзакций",
      },
      {
        id: 3,
        icon: Benefist3,
        text: "Отсутствие спекуляций и манипуляций курсом индекса: после вывода средств токены инвестора уничтожаются",
      },
      {
        id: 4,
        icon: Benefist4,
        text: "Свободный вывод средств по истечении рекомендованного периода",
      },
    ],
    bannerData: {
      title: "CRYPPO Invest",
      gradient: ".",
      text: "Автоматически ребалансируемый индекс из 8 самых высококапитализированных цифровых активов на основе машинного обучения (искусственного интеллекта)",
      img: bannerInvest,
    },
  },
};
export const landingSlice = createSlice({
  name: "landing",
  initialState,
  reducers: {
    AddStep(state, action) {
      state.invest.step = action.payload;
    },
  },
});

export default landingSlice.reducer;
