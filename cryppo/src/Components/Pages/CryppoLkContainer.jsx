import { connect } from "react-redux";
import CryppoLk from "./CryppoLk";

let mapStateToProps = (state) => {
    return {
        card: state.operation.cryppo.cardData,
        bankCard: state.operation.cryppo.bankCardData,
        invest: state.lk.cryppo.investData,
        news: state.lk.cryppo.newsData,
        translations: state.lk.cryppo.translationsData,
        tabs: state.lk.cryppo.tabsData,
        isLogin: state.user.isLogin,
    };
};

const CryppoLkContainer = connect(mapStateToProps)(CryppoLk);
export default CryppoLkContainer;
