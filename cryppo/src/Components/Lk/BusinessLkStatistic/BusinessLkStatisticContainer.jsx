import { connect } from "react-redux";
import BusinessLkStatistic from "./BusinessLkStatistic";
import { setModal, switchModal } from "../../../Redux/Lk-reducer";
import { changeActiveIndex } from "../../../Redux/operation-reducer";
import { ChartPostTC, RevenuePostTC } from "../../../Redux/LkReducer";
let mapStateToProps = (state) => {
    return {
        paymentList: state.payments.business,
        revenue: state.LK.business.revenue,
        chartIndex: state.LK.business.chartIndex,
        barData: state.doughunt.barData,
        isModal: state.lk.business.isModal,
        operationModal: state.lk.business.operationModal,
        filter: false,
        cardList: state.user.business.cardList,
        chartTextData: state.operation.business.chartTextData,
        currencyList: state.lk.business.currencyList,
        isHover: state.doughunt.isHover,
        expenses: state.doughunt.expenses,
        arrival: state.doughunt.arrival,
        compositionActiveIndex: state.doughunt.barData.activeIndex,
        doughuntTextData: state.doughunt.doughuntTextData,
    };
};

const BusinessLkStatisticContainer = connect(mapStateToProps, {
    changeActiveIndex,
    setModal,
    switchModal,
    RevenuePostTC,
    ChartPostTC,
})(BusinessLkStatistic);

export default BusinessLkStatisticContainer;
