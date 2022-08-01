import { connect } from "react-redux";
import CryppoLkInvest from "./CryppoLkInvest";
import { ChartPostTC, RevenuePostTC } from "../../../Redux/LkReducer";

let mapStateToProps = (state) => {
    return {
        tabs: state.lk.cryppo.tabsData,
        barData: state.doughunt.barData,
        revenue: state.LK.cryppo.revenue,
        compositionActiveIndex: state.doughunt.barData.activeIndex,
    };
};

const CryppoLkInvestContainer = connect(mapStateToProps, { RevenuePostTC })(
    CryppoLkInvest
);

export default CryppoLkInvestContainer;
