import styled from "styled-components";
import leftImage from ".././assets/images/rectangle_left.svg";
import rightImage from ".././assets/images/rectangle_right.svg";

export const MainWrapper = styled.div`
  width: 100vw;
  background: #e5e5e5;
  display: flex;
  flex-direction: column;
  background: linear-gradient(170.45deg, #f9fafa 12.31%, #ffffff 85.28%);
  justify-content: center;
  background-image: url(${leftImage}), url(${rightImage});
  background-position: left top, right top;
  background-size: 20%, 20% contain;
  background-repeat: no-repeat, no-repeat;
  .ant-steps{
    display: none
  }
  .main_header {
    background: #ffffff;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
    width: 100vw;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: left;
    padding-left: 2vw;

    .platform_name {
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
    margin-bottom: 0;
    margin-top: 40px;
    background: #f5f5f5;
    display: flex;
    justify-content: right;
    align-items: center;
    font-style: Noto sans;
      
 }
  @media (max-width: 800px) {
    .main_header {
      justify-content: center;
      display: flex;
      flex-direction: column;
      height: fit-content;
      padding-top: 30px;
    }
    .ant-steps{
      display: ${(props) => (props.displaySteps ? "flex" : "none")}
     
      width: 200px;
      margin-top: 10px;
      margin-right: 40vw;
    }
    .ant-steps-item {

      width: 1px;

  }

    .platform_name {
      visibility: hidden;
    }
  }
`;
