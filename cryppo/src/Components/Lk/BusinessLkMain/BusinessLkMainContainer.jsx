import { connect } from "react-redux";
import BusinessLkMain from "./BusinessLkMain";
import { setModal, switchModal } from "../../../Redux/Lk-reducer";
import { PaymentsPostTC } from "../../../Redux/payments-reducer";
import { GeneralInfoGetTC } from "../../../Redux/user-reducer";

let mapStateToProps = (state) => {
    return {
        barData: state.doughunt.barData,
        revenue: state.LK.business.revenue,
        tabs: state.lk.business.tabsData,
        cardList: state.user.business.cardList,
        bankCardList: state.user.business.bankCardList,
        operationList: state.operation.business.operationList,
        operationModal: state.lk.business.operationModal,
        isModal: state.lk.business.isModal,
        filter: false,
        isHover: state.doughunt.isHover,
        doughuntTextData: state.doughunt.doughuntTextData,
        currencyList: state.lk.business.currencyList,
        expenses: state.doughunt.expenses,
        arrival: state.doughunt.arrival,
        paymentList: state.payments.business,
        balances: state.user.business.balances,
    };
};

const BusinessLkMainContainer = connect(mapStateToProps, {
    setModal,
    switchModal,
    PaymentsPostTC,
    GeneralInfoGetTC,
})(BusinessLkMain);

export default BusinessLkMainContainer;
