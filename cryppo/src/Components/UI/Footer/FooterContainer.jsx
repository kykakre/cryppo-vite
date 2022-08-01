import { connect } from "react-redux";
import Footer from "./Footer";
let mapStateToProps = (state) => {
    return {
        mail: state.footer.mail,
        icon: state.footer.social,
        phone: state.footer.phone,
    }
}
const FooterContainer = connect(mapStateToProps)(Footer);

export default FooterContainer;
