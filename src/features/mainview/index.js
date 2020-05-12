import React from "react";
import { MainWrapper } from "../style";
const MainLayout = (props) => {
  return (
    <MainWrapper>
      <div
        style={{
          width: "100%",
          marginTop: "30px",
          minHeight: "calc(100vh - 140px)",
        }}
      >
        {props.children}
      </div>
    </MainWrapper>
  );
};
export default MainLayout;
