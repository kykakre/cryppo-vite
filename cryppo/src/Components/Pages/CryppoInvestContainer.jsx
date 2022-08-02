import { connect } from "react-redux";
import CryppoInvest from "./CryppoInvest";
import { ChartPostTC, RevenuePostTC } from "../../Redux/LkReducer";

let mapStateToProps = (state) => {
  return {
    benefits: state.landing.invest.benefitsData,
    suggestions: state.landing.invest.suggestionsData,
    banner: state.landing.invest.bannerData,
    aboutDataIndex: state.landing.invest.aboutDataIndex,
    bannerIndex: state.landing.invest.bannerIndex,
    step: state.landing.invest.step,
    isLogin: state.user.cryppo.isLogin,
    header: state.header.invest,
    user: state.user.cryppo,
    isLk: state.user.isLk,
    card: state.operation.cryppo.cardData,
    alert: state.lk.cryppo.alertData,
    logo: state.header.invest.route.logo,
    routeLk: state.header.invest.route.routeLk,
    chartIndex: state.LK.business.chartIndex,
  };
};

const CryppoInvestContainer = connect(mapStateToProps, { ChartPostTC })(
  CryppoInvest
);
export default CryppoInvestContainer;
