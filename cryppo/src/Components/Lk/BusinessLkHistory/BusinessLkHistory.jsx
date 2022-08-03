import React, {useEffect, useState} from "react";
import SubtitleLk from "../../UI/SubtitleLk/SubtitleLk";
import FilterHistory from "../FilterHistory/FilterHistory";
import Operation from "../OperationLk/Operation";
import style from "./BusinessLKHistory.module.scss";
import * as Scroll from "react-scroll";
import {
    Link,
    Button,
    Element,
    Events,
    animateScroll as scroll,
    scrollSpy,
    scroller,
} from "react-scroll";

export default function BusinessLkHistory(props) {
    const [walletAddress, setWalletAddress] = useState(null);
    const [dateRange, setDateRange] = useState([null, null]);
    const [currency, setCurrency] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [pageSize, setPageSize] = useState(4);
    const [operationList, setOperationList] = useState(props.operationList);
    useEffect(() => {
        if (currency != null && currency != "allCoin") {
            setOperationList(
                props.operationList.filter((item) => {
                    if (item.currency === currency) {
                        return item;
                    }
                })
            );
        } else {
            setOperationList(props.operationList);
        }
        if (walletAddress != null && walletAddress != "") {
            setOperationList(
                operationList.filter((item) => {
                    return item.address.includes(walletAddress);
                })
            );
        } else {
            if (currency != null && currency != "allCoin") {
                setOperationList(
                    props.operationList.filter((item) => {
                        if (item.currency === currency) {
                            return item;
                        }
                    })
                );
            } else {
                setOperationList(props.operationList);
            }
        }
    }, [currency, dateRange, walletAddress, pageSize, pageNumber, props]);
    return (
        <div className="main container">
            <div className="flex margin">
                <div className="sidebar">
                    <div className="sidebar__inner">
                        <SubtitleLk arrow={false} subtitle="Фильтр"/>
                        <FilterHistory
                            setCurrency={setCurrency}
                            setWalletAddress={setWalletAddress}
                            setDateRange={setDateRange}
                            walletAddress={walletAddress}
                            currencyList={props.currencyList}
                            PaymentsPostTC={props.PaymentsPostTC}
                        />
                    </div>
                </div>
                <div className="content">
                    <SubtitleLk arrow={false} subtitle="История"/>
                    <Element name="myScrollToElement"/>
                    {operationList.length !== 0 ? (
                        <Operation
                            PaymentsPostTC={props.PaymentsPostTC}
                            fullOperation={true}
                            pagination={true}
                            pageNumber={pageNumber}
                            pageSize={pageSize}
                            setPageNumber={setPageNumber}
                            setPageSize={setPageSize}
                            operationList={operationList}
                            paymentList={props.paymentList}
                            setModal={props.setModal}
                            operationModal={props.operationModal}
                            isModal={props.isModal}
                            switchModal={props.switchModal}
                        />
                    ) : (
                        <div className={style.container}>Нет результатов</div>
                    )}
                </div>
            </div>
        </div>
    );
}
