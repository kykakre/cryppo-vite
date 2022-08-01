import React, { useState } from "react";
import style from "./StatisticCash.module.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import DoughnutChart from "../DoughnutChart/DoughnutChart";
import { useParams } from "react-router";

const StatisticCash = (props) => {
    const { category } = useParams();
    const expenses = props.expenses.filter((e) => {
        if (
            props.filter &&
            e.parentCategory != undefined &&
            e.parentCategory == category
        ) {
            return e;
        }
        if (props.filter == false) {
            if (e.parentCategory == undefined) return e;
        }
    });
    return (
        <div className={style.block}>
            <Tabs>
                <TabList className={style.list}>
                    <Tab
                        className={style.tab}
                        selectedClassName={style.activeTab}
                    >
                        <div>Расходы</div>
                    </Tab>
                    <Tab
                        className={style.tab}
                        selectedClassName={style.activeTab}
                    >
                        <div>Поступления</div>
                    </Tab>
                </TabList>
                <TabPanel>
                    <DoughnutChart
                        operationType="expenses"
                        updateChart={props.updateChart}
                        filter={props.filter}
                        big={props.big}
                        isHover={props.isHover}
                        operations={expenses}
                        doughuntTextData={props.doughuntTextData}
                    />
                </TabPanel>
                <TabPanel>
                    <DoughnutChart
                        operationType="arrival"
                        updateChart={props.updateChart}
                        filter={props.filter}
                        isHover={props.isHover}
                        operations={props.arrival}
                        doughuntTextData={props.doughuntTextData}
                        big={props.big}
                    />
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default StatisticCash;
