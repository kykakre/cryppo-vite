import { connect } from "react-redux";
import CryppoLkCheck from "./CryppoLkCheck";

let mapStateToProps = (state) => {
  return {
    cardList: state.user.cryppo.cardList,
    bankCardList: state.user.cryppo.bankCardList,
    operationData: state.operation.cryppo.operationData,
    operationList: state.operation.cryppo.operationList,
    operationModal: state.lk.cryppo.operationModal,
    isModal: state.lk.cryppo.isModal,
    isHover: state.doughunt.isHover,
    doughuntTextData: state.doughunt.doughuntTextData,
    defaultSearch: state.doughunt.defaultSearch,
    statistic: state.operation.cryppo.statisticData,
    invest: state.lk.cryppo.investData,
    newCard: state.user.cryppo.cardData,
    news: state.lk.cryppo.newsData,
    expenses: state.doughunt.expenses,
    arrival: state.doughunt.arrival,
    filter: false,
  };
};

const CryppoLkCheckContainer = connect(mapStateToProps, {})(CryppoLkCheck);
export default CryppoLkCheckContainer;
