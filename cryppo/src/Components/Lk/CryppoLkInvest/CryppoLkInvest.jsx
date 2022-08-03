import React from "react";
import SidebarTabs from "../SidebarTabs/SidebarTabs";
import ChartIndex from "../../Landing/ChartIndex/ChartIndex";
import CompositionIndex from "../CompositionIndex/CompositionIndex";
import SubtitleLk from "../../UI/SubtitleLk/SubtitleLk";
import StatisticIndex from "../../Landing/StatisticIndex/StatisticIndex";
import {Table} from "antd";
import style from "./CryppoLkInvest.module.scss";

export default function CryppoLkInvest(props) {
    return (
        <div className="margin">
            <div className="flex container">
                <div className="sidebar">
                    <div className="sidebar__inner">
                        <SubtitleLk subtitle="Дашборт"/>
                        <SidebarTabs tabs={props.tabs.indexNow}/>
                        <SidebarTabs tabs={props.tabs.volumeIndex}/>
                        <SidebarTabs tabs={props.tabs.indexProfit}/>
                        <SidebarTabs tabs={props.tabs.buyNow}/>
                    </div>
                </div>
                <div className="content">
                    <SubtitleLk subtitle="Состав индекса"/>
                    <CompositionIndex
                        revenue={props.barData.compositions}
                        compositionActiveIndex={props.compositionActiveIndex}
                        RevenuePostTC={props.RevenuePostTC}
                    />
                </div>
            </div>
            <SubtitleLk subtitle="Статистика роста индекса"/>
            <div className="block">
                <ChartIndex
                    ChartPostTC={props.ChartPostTC}
                    chartIndex={props.chartIndex}
                />
            </div>

            <SubtitleLk subtitle="Статистика роста индекса"/>
            <Table
                columns={props.tableColumns}
                className={style.table}
                dataSource={props.tableData}
            />
        </div>
    );
}
