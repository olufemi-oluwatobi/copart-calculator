import React, { useState } from "react";
import { ButtonStyle } from "../../style";
import styled from "styled-components";
import FormFooter from "./formFooter";
import "./style.css";

const UploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .text_wrapper {
    display: flex;
    flex-direction: column;
  }

  margin-top: 20px;
  .second_text {
    font-family: Rubik;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    color: #162828;
  }
`;

const ActionCardStyle = styled.div`
  background: #ffffff;
  border: 1px solid rgba(22, 40, 40, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
  margin-left: 10px;
  margin-bottom: 10px;
  padding: 10px 20px 30px 20px;
  cursor: pointer;
  .action_text {
    font-family: universe;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    margin-top:10px
    line-height: 19px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #162828;
    width: 150px;
  }
  @media (max-width:700px){
    width: 90%;
    .action_text{
      text-align: center;
      margin-left:15%;
      width: 100%;

    }
  }
 
`;

const ActionCardView = ({ imgPath, text, handleClick, isLoading }) => {
  return (
    <ActionCardStyle className={"swing"} onClick={() => handleClick()}>
      <img style={{ height: isLoading && "50px" }} src={imgPath} />
      <span className="action_text">{text}</span>
    </ActionCardStyle>
  );
};
const STYLE = {
  display: "flex",
  marginBottom: "15px",
  paddingBottom: "7px",
  borderBottom: "1px solid rgba(22, 40, 40, 0.1)"
};
const UploadView = ({ onUpload, onContinue, uploadType, loading }) => {
  return (
    <div>
      <UploadWrapper>
        <div className="text_wrapper">
          <span>What files do you wish to upload</span>
        </div>
        <div
          className="card_container"
          style={{
            ...STYLE
          }}
        >
          {[
            {
              text: "upload your resume",
              imgPath: "upload",
              type: "cv",
              handleClick: () => onUpload("cv")
            },
            {
              text: "continue without upload",
              imgPath: "without",
              handleClick: onContinue
            }
          ].map(obj => (
            <ActionCardView
              text={obj.text}
              imgPath={require(`../../../assets/images/${
                loading && obj.type === uploadType ? "load" : obj.imgPath
              }.svg`)}
              handleClick={obj.handleClick}
              isLoading={loading && obj.type === uploadType}
            />
          ))}
        </div>
      </UploadWrapper>
      {/*<FormFooter actionText={"continue"} action={onContinue} />*/}
    </div>
  );
};
export default UploadView;
