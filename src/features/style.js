import styled from "styled-components";
export const MainWrapper = styled.div`
  width: 100vw;
  background: #e5e5e5;
  display: flex;
  flex-direction: column;
  background: linear-gradient(170.45deg, #f9fafa 12.31%, #ffffff 85.28%);
  justify-content: center;
  .main_header {
    background: #ffffff;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
    width: 100vw;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: left;
    padding-left: 2vw;

    span {
      margin-left: 10px;
      font-family: noto;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      display: flex;
      align-items: center;
      color: #172b4d;
    }
  }
  .main_footer {
    height: 50px;
    left: 0px;
    bottom: 0px;
    margin-top: 40px;
    background: #f5f5f5;
    display: flex;
    justify-content: right;
    align-items: center;
    font-style: Noto sans;
  }
`;
