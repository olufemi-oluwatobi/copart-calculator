import styled from "styled-components";

export const DetailsViewWrapper = styled.div`
  text-align: center;
  div {
    margin-bottom: 10px;
  }
  .plus {
    display: none;
  }

  .jobTitle {
    font-family: Noto Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    color: #172b4d;
  }
  .info_segement {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 10vw;
    margin-right: 10vw;
    margin-top: 32px;
    padding-bottom: 20px;
    border-bottom: 1px solid #c6cbd3;
    justify-content: space-between;
  }
  .segment_description {
    width: 80%;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 150.5%;
    text-align: left;
    text-wrap: wrap;

    color: #172b4d;
    p,
    li {
      margin-bottom: 7px;
    }
    .span {
      margin-top: 30px;
    }
    .contact_wrapper {
      display: flex;
      flex-direction: column;
      margin-bottom: 15px;
    }
    .contact_wrapper span:nth-child(1) {
      font-weight: 600;
      font-size: 14px;
    }
  }
  @media (max-width: 800px) {
    .segment_description {
      width: 100%;
    }
    .segment_details {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }
    .plus {
      display: block;
    }
  }
`;
