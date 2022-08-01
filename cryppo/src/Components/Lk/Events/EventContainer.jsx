import { connect } from "react-redux";
import Event from "./Event";
import { setModal, switchModal } from "../../../Redux/Lk-reducer";

let mapStateToProps = (state) => {
    return {
        operationData: state.operation.cryppo.operationData,
        operationList: state.operation.cryppo.operationList,
        operationModal: state.lk.cryppo.operationModal,
        isModal: state.lk.cryppo.isModal,
        isHover: state.doughunt.isHover,
        doughuntTextData: state.doughunt.doughuntTextData,
        defaultSearch: state.doughunt.defaultSearch,
    };
};

const EventContainer = connect(mapStateToProps, {
    setModal,
    switchModal,
})(Event);
export default EventContainer;
