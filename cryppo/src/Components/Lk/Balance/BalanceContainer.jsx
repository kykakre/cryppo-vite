import { connect } from "react-redux";
import Balance from "./Balance";
let mapStateToProps = (state) => {
    return {
        cardList: state.user.business.cardList,
        doughuntTextData: state.doughunt.doughuntTextData,
        currencyList: state.user.business.balances,
        isHover: state.lk.business.isHover,
        expenses: state.doughunt.expenses,
        balances: state.user.business.balances,
    };
};

const BalanceContainer = connect(mapStateToProps, {})(Balance);

export default BalanceContainer;
