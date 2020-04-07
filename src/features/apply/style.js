import styled, { Keyframes } from "styled-components";

export const ApplicationViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .segment_details {
    display: flex;
  }
  .segment_name {
    font-size: 24px;
    font-weight: bold;

    line-height: 130%;

    color: #172b4d;
  }
  .segement_content {
    display: flex;
    margin-top: 15px;
  }
  .segement_instruction {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: #00a3a1;
    margin-left: 10px;
    margin-top: 10px;
  }
  .progress_details {
    display: flex;
    flex-direction: column;
    align-items: right;
    text-align: right;
    justify-content: right;
    width: 22vw;
    margin-right: 15px;
    white-space: nowrap !important;
  }
  .job_details {
    width: 262px;
    padding: 10px;
    margin-left: 50px;
    background: #c7d4e8;
    display: flex;
    height: fit-content;
    flex-direction: column;
    align-items: left;
    justify-content: left;
    align-content: left;
    text-align: left;
  }
  .info_container {
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    margin-bottom: 7px;

    .info_title {
      font-weight: 600;
      font-size: 12px;
      line-height: 130%;
    }
    .info_content {
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 130%;
    }
  }
`;

export const FormWrapperStyle = styled.div`
  width: 40vw;
  margin-left: 2vw;
  font-weight: normal;
  font-size: 12px;
  line-height: 130%;
  color: #172b4d;

  .half_view_form {
    display: inline-block;
    width: calc(50% - 12px);
  }
  .ant-form-item {
    margin-bottom: 2px;
  }
  .ant-form-vertical .ant-form-item-label,
  .ant-col-24.ant-form-item-label,
  .ant-col-xl-24.ant-form-item-label {
    padding: 0px;
  }
  .ant-select-selection,
  .ant-input {
    background: #fffff;
    border: 0.5px solid #aeaeb3 !important;
    box-sizing: border-box;
    border-radius: 3px;
  }
  .ant-calendar-picker {
    width: 100% !important;
  }
  .ant-table-thead > tr > th,
  .ant-table-tbody > tr > td {
    padding: 10px 10px;
  }

  @media (max-width: 700px) {
    width: 100% !important;

    .half_view_form {
      display: block;
      width: 100%;
    }
    .ant-calendar-picker {
      width: 100% !important;
    }
  }
  .add_another {
    color: #0091da;
    cursor: pointer;
    margin-top: 15px;
  }
  .remove {
    font-weight: 600;
    font-size: 14px;
    text-align: right;
    cursor: pointer;
    color: #89909e;
  }
  .visible {
    visibility: visible;
    opacity: 1;
    transition: opacity 2s linear;
  }
  .hidden {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s 2s, opacity 2s linear;
  }
  .upload_button {
    background: #ffffff;
    border: 1px solid #00338d;
    color: #00338d;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 3px;
  }
`;

export const AnimationWrapper = styled.div`
  .visible {
    visibility: visible;
    opacity: 1;
    transition: opacity 2s linear;
  }
  .hidden {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s 2s, opacity 2s linear;
  }
`;

export const ReviewItemStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  margin-bottom: 30px;
  .header {
    display: flex;
    justify-content: space-between;
    padding-bottom: 5px;
    border-bottom: 1px solid #c6cbd3;
    margin-bottom: 15px;

    .item_name {
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 130%;
      color: #172b4d;
    }
    .edit_button {
      cursor: pointer;
    }
  }
  .ant-table-thead > tr > th,
  .ant-table-tbody > tr > td {
    padding: 10px 10px;
  }
`;
const maths = 100 % 3;
export const ReviewStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  .info_wrapper {
    display: flex;
    flex-wrap: wrap;
  }
  .info_container {
    flex: 1 0 33.3%;

    .info_header {
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 130%;
      display: flex;
      color: #aeaeb3;
    }
    .info_body {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 130%;
      display: flex;
      align-items: center;
      color: #172b4d;
    }
  }
`;
