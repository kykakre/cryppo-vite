import React from "react";
import EventContainer from "../../Events/EventContainer";
import SubtitleLk from "../../../UI/SubtitleLk/SubtitleLk";
export default function CryppoLkCheckEvent(props) {
  return (
    <div>
      <SubtitleLk subtitle="События" />
      <EventContainer
        expenses={props.expenses}
        arrival={props.arrival}
        filter={false}
      />
    </div>
  );
}
