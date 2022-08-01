import { connect } from "react-redux";
import BusinessLkHistory from "./BusinessLkHistory";
import { setModal, switchModal } from "../../../Redux/Lk-reducer";
import { PaymentsPostTC } from "../../../Redux/payments-reducer";

let mapStateToProps = (state) => {
  return {
    paymentList: state.payments.business,
    operationList: state.operation.business.operationList,
    operationModal: state.lk.business.operationModal,
    isModal: state.lk.business.isModal,
    currencyList: state.user.business.balances,
  };
};

const BusinessLkHistoryContainer = connect(mapStateToProps, {
  setModal,
  switchModal,
  PaymentsPostTC,
})(BusinessLkHistory);

export default BusinessLkHistoryContainer;
