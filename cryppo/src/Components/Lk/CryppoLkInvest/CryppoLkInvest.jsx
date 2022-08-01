import React from "react";
import SidebarTabs from "../SidebarTabs/SidebarTabs";
import ChartIndex from "../../Landing/ChartIndex/ChartIndex";
import CompositionIndex from "../CompositionIndex/CompositionIndex";
import SubtitleLk from "../../UI/SubtitleLk/SubtitleLk";

export default function CryppoLkInvest(props) {
  return (
    <>
      <div className="flex container">
        <div className="sidebar">
          <div className="sidebar__inner">
            <SubtitleLk subtitle="Дашборт" />
            <SidebarTabs tabs={props.tabs.indexNow} />
            <SidebarTabs tabs={props.tabs.volumeIndex} />
            <SidebarTabs tabs={props.tabs.indexProfit} />
            <SidebarTabs tabs={props.tabs.buyNow} />
          </div>
        </div>
        <div className="content">
          <SubtitleLk subtitle="Состав индекса" />
          <CompositionIndex
            revenue={props.barData.compositions}
            compositionActiveIndex={props.compositionActiveIndex}
            RevenuePostTC={props.RevenuePostTC}
          />
        </div>
      </div>
    </>
  );
}
