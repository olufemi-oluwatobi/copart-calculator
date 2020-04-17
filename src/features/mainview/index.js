import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/kpmg.svg";
import LogoWhite from "../../assets/images/kpmg_white.svg";
import { Steps } from "antd";
import { ErrorComponent } from "../../components/errorNotification/errorComponent";
import { MainWrapper } from "../style";

const { Step } = Steps;
const MainLayout = (props) => {
  console.log(props.currentStep);
  return (
    <ErrorComponent success={props.success} error={props.error}>
      <MainWrapper displaySteps={props.currentStep >= 0 ? true : false}>
        <div className="main_header">
          <Link to="/">
            {" "}
            <img
              style={{ width: "53.5px", height: "23.41px" }}
              src={LogoWhite}
            />
          </Link>
          <span className="platform_name">Recruitment Support</span>
          <Steps className="steps" progressDot current={props.currentStep}>
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <Step title={n} />
            ))}
          </Steps>
        </div>
        <div
          style={{
            width: "100%",
            marginTop: "30px",
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
