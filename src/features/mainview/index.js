import React, { Component } from "react";
import { Row, Col } from "antd";
import Logo from "../../assets/images/kpmg.svg";
import LogoWhite from "../../assets/images/kpmg_white.svg";
import { ErrorComponent } from "../../components/errorNotification/errorComponent";
import { MainWrapper } from "../style";

const MainLayout = props => {
  return (
    <ErrorComponent>
      <MainWrapper>
        <div className="main_header">
          <img src={LogoWhite} />
          <span>Recruitment Support</span>
        </div>
        <div
          style={{
            width: "100%",
            marginTop: "30px"
          }}
        >
          {props.children}
        </div>
        <div className="main_footer"></div>
      </MainWrapper>
    </ErrorComponent>
  );
};
export default MainLayout;
