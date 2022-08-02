import React from "react";
import Check from "../CheckLk/Check";
import Operation from "../OperationLk/Operation";
import Statistic from "../StatisticLk/Statistic";

import News from "../News/News";
import StatisticCash from "../StatisticCash/StatisticCash";
import SidebarTabs from "../SidebarTabs/SidebarTabs";
import SubtitleLk from "../../UI/SubtitleLk/SubtitleLk";
import CheckCardBlock from "../CheckLk/CheckCardBlock.jsx";
export default function CryppoLkMain(props) {
  return (
    <>
      <div className="flex container margin">
        <div className="sidebar">
          <div className="sidebar__inner">
            <SubtitleLk arrow={false} subtitle="Счета и карты" />
            <Check
              cardList={props.cardList}
              bankCardList={props.bankCardList}
              children={<CheckCardBlock />}
            />

            <SidebarTabs tabs={props.tabs.invest} />
            <SidebarTabs tabs={props.tabs.addCart} />
          </div>
        </div>
        <div className="content">
          <News news={props.news} />
          <SubtitleLk arrow={true} subtitle="Последние операции" />
          <Operation
            operationList={props.operationList}
            setModal={props.setModal}
            operationModal={props.operationModal}
            bankCardData={props.bankCardList}
            isModal={props.isModal}
            switchModal={props.switchModal}
          />
          <SubtitleLk arrow={true} subtitle="Статистика за март" />
          <StatisticCash
            filter={false}
            isHover={props.isHover}
            expenses={props.expenses}
            arrival={props.arrival}
            doughuntTextData={props.doughuntTextData}
            operationData={props.operationData}
            setModal={props.setModal}
            operationModal={props.operationModal}
            isModal={props.isModal}
            switchModal={props.switchModal}
            updateChart={props.updateChart}
          />
          <Statistic statistic={props.statistic} />
        </div>
      </div>
    </>
  );
}
