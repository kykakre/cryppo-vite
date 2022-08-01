import React, { Children } from "react";

export default function Btn({ children, ...props }) {
  return (
    <a {...props} className="btn">
      {children}
    </a>
  );
}
