import React from "react";
import ExchangeCash from "../../UI/ExchangeCash/ExchangeCash";
import ExchangeOutput from "../../UI/ExchangeCash/ExchangeOutput";
import SubtitleLk from "../../UI/SubtitleLk/SubtitleLk";
import Check from "../CheckLk/Check";
import DoughnutChart from "../DoughnutChart/DoughnutChart";
import three from "../../../Images/payIcon/3.svg";

export default function Balance(props) {
    const expenses = props.expenses.filter((e) => {
        if (e.parentCategory == undefined) return e;
    });
    const currencyList = props.currencyList.map((e) => {
        return {
            img: e.image ?? three,
            value: e.currency,
            amount: e.amount,
            amountInViewCurrency: e.amountInViewCurrency,
        };
    });
    return (
        <div className="main container">
            <div className="flex ">
                <div className="sidebar">
                    <div className="sidebar__inner">
                        <SubtitleLk arrow={false} subtitle="Балансы" />
                        <Check
                            isBankCard={false}
                            cardList={props.cardList}
                            currencyList={currencyList}
                        />
                    </div>
                </div>
                <div className="content">
                    <SubtitleLk subtitle="Дашборд" />
                    <div className="block">
                        <DoughnutChart
                            operationType="expenses"
                            updateChart={props.updateChart}
                            filter={true}
                            isHover={props.isHover}
                            operations={expenses}
                            doughuntTextData={props.doughuntTextData}
                        />
                    </div>
                    <SubtitleLk arrow={false} subtitle="Обмен" />
                    <ExchangeCash currencyList={currencyList} />
                    <SubtitleLk arrow={false} subtitle="Вывод" />
                    <ExchangeOutput currencyList={currencyList} />
                </div>
            </div>
        </div>
    );
}
