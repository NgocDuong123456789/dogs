import React from "react";
import { Header } from "./Header/index";

export const SumBody: React.FC<{children:JSX.Element}> = ({children}) => { 
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>{children}</div>
    </div>
  );
};
