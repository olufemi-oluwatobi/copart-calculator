import styled from "styled-components";
import banner from "../../assets/images/banner.jpg";

export const HomeStyle = styled.div`
  .banner {
    background: url(${banner});
    background-position: no-repeat;
    width: 100vw;
    margin-top: -30px !important;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .banner_text {
      font-style: normal;
      font-weight: bold;
      font-size: 64px;
      line-height: 130%;
      color: #ffffff;
    }
    .search_container {
      background: #ffffff;
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
      width: 818px;
      height: 84px;
      display: flex;
      padding: 20px 16px;
      position: absolute;
      margin-top: 100px;
      justify-content: space-between;
    }
  }
  .ant-input-affix-wrapper {
    margin-right: 10px;
    border-radius: 0;
    width: ;
  }
  .main_content {
    width: 80vw;
    margin-left: 10vw;
    margin-right: 10vw;
    min-height: 30vh;
    margin-top: 70px;
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 800px) {
    .main_content {
      width: 90vw;
      margin-left: 5vw;
      margin-right: 5vw;
      margin-top: 100px;
      display: flex;
      flex-direction: column;
    }
    .banner_text {
      font-style: normal;
      font-weight: bold;
      font-size: 24px !important;
      width: 140px;
      line-height: 130%;
      display: flex;
      align-items: center;
      text-align: center;
      color: #ffffff;
    }
    .search_container {
      width: 90vw !important;
    }
  }
`;
