import styled from "styled-components";

export const FormWrapperStyle = styled.div`
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
    background: #f2f2f2;
  }
  .ant-calendar-picker {
    width: 100% !important;
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
`;
