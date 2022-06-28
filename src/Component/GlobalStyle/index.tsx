import React, { ReactNode } from "react";
import "./GlobalStyle.module.scss";

export const GlobalStyle: React.FC<{ children: ReactNode }> = ({
  children,
}) => {

  return <div>{children}</div>;

};