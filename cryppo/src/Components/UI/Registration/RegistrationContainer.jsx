import { connect } from "react-redux";
import Registration from "./Registration";
import {registrationPostThunkCreator } from '../../../Redux/user-reducer';


let mapStateToProps = (state) => {
        return null
}

const RegistrationContainer = connect(mapStateToProps, {registrationPostThunkCreator})(Registration);

export default RegistrationContainer;