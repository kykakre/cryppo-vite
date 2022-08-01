import { connect } from "react-redux";
import SupportLk from "./SupportLk";

let mapStateToProps = (state) => {
    return {
        help: state.lk.business.helpData,
    };
};

const SupportLkContainer = connect(mapStateToProps)(SupportLk);

export default SupportLkContainer;
