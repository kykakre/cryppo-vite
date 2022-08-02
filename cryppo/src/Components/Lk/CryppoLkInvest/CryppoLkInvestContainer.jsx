import { connect } from "react-redux";
import CryppoLkInvest from "./CryppoLkInvest";
import { ChartPostTC, RevenuePostTC } from "../../../Redux/LkReducer";

let mapStateToProps = (state) => {
  return {
    tabs: state.lk.cryppo.tabsData,
    barData: state.doughunt.barData,
    revenue: state.LK.cryppo.revenue,
    compositionActiveIndex: state.doughunt.barData.activeIndex,
    chartIndex: state.LK.business.chartIndex,
    tableData: state.lk.cryppo.tableData,
    tableColumns: state.lk.cryppo.tableColumns,
  };
};

const CryppoLkInvestContainer = connect(mapStateToProps, { RevenuePostTC })(
  CryppoLkInvest
);

export default CryppoLkInvestContainer;
