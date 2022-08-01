import { connect } from "react-redux";
import CryppoLkTranslation from "./CryppoLkTranslation";

let mapStateToProps = (state) => {
    return {
        translations: state.lk.cryppo.translationsData,
    };
};

const CryppoLkTranslationContainer = connect(
    mapStateToProps,
    {}
)(CryppoLkTranslation);

export default CryppoLkTranslationContainer;
