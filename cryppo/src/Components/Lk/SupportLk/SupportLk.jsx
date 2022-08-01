import React from "react";
import CardHelp from "../CardHelp/CardHelp";

export default function SupportLk(props) {
  return (
    <div className="main container flex">
      <div className="sidebar">
        <CardHelp help={props.help} />
      </div>
      <div className="content"></div>
    </div>
  );
}
