import { connect } from "react-redux";
import CryppoLkMain from "./CryppoLkMain";
import { setModal, switchModal } from "../../../Redux/Lk-reducer";

let mapStateToProps = (state) => {
    return {
        statistic: state.operation.cryppo.statisticData,
        cardList: state.user.cryppo.cardList,
        bankCardList: state.user.cryppo.bankCardList,
        invest: state.lk.cryppo.investData,
        newCard: state.user.cryppo.cardData,
        news: state.lk.cryppo.newsData,
        expenses: state.doughunt.expenses,
        arrival: state.doughunt.arrival,
        doughuntTextData: state.doughunt.doughuntTextData,
        tabs: state.lk.cryppo.tabsData,
        operationData: state.operation.cryppo.operationData,
        operationModal: state.lk.cryppo.operationModal,
        isModal: state.lk.cryppo.isModal,
        filter: false,
        isHover: state.doughunt.isHover,
        operationList: state.operation.cryppo.operationList,
    };
};

const CryppoLkMainContainer = connect(mapStateToProps, {
    setModal,
    switchModal,
})(CryppoLkMain);

export default CryppoLkMainContainer;
