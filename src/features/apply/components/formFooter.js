import React from "react";
import styled from "styled-components";
import { Icon } from "antd";

const FooterStyle = styled.div`
  width: ${(props) => props.width || "80%"};
  margin-top: 2px
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  
  .continue_button {
    background: #00a3a1;
    border-radius: 3px;
    font-family: Univers for KPMG;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    color: #ffffff;
    padding: 7px;
    cursor: pointer;
    min-width: 125px;
  }
`;
const FormFooter = ({
  actionText,
  action,
  previousButtonAction,
  width,
  hasPreviousButton,
  isLoading,
}) => (
  <FooterStyle width={width}>
    <span style={{ cursor: "pointer" }} onClick={() => previousButtonAction()}>
      {hasPreviousButton && "previous"}
    </span>
    <div onClick={() => action()} className="continue_button">
      {!isLoading ? actionText : <Icon type={"loading"} />}
    </div>
  </FooterStyle>
);

export default FormFooter;
