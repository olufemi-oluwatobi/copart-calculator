import styled from "styled-components";
import banner from "../../assets/images/banner.jpg";

export const HomeStyle = styled.div`
  .banner {
    background:url(${banner}); no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    width: 100vw;
    margin-top: -30px !important;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    padding-left: 5vw;
    
    .banner_text {
      font-family: noto;
      font-style: normal;
      font-weight: normal;
      font-size: 22px;
      line-height: 30px;
      color: #FFFFFF;
    }
    .banner_header{
      font-family: Open Sans;
      font-style: normal;
      font-weight: 800;
      font-size: 36px;
      line-height: 49px;
      color: #FFFFFF;

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
  .main_body{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding-left: 5vw;
    justify-content: space-between;
    padding-right: 5vw;
    margin-top: 40px;
    .membership_info, .car_info, .results {
      width: 25vw;
      display: flex;
      flex-direction: column;
    }
    .segment_header{
      font-family: Open Sans;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 14px;
      margin-bottom: 10px;


      color: #969998;
    }

  }
  .ant-input-affix-wrapper {
    margin-right: 10px;
    border-radius: 0;
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
  .amount_wrapper{
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 35px;
    color: #1D1D1D;
    .dollars{
      margin-right: 10px;
    }
  }
  .total{
    font-size: 30px;
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
    .banner_header{
      font-family: noto;
      font-style: normal;
      font-weight: 800;
      font-size: 20px;
      line-height: 27px;

      color: #FFFFFF;
    }
    .banner_text {
      font-family: noto;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 19px;


      color: #FFFFFF
    }
    .search_container {
      width: 90vw !important;
    }
    .main_body{
      flex-direction: column;
    }
    .membership_info, .car_info .results { width: 90vw}

  }
  .fade-in {
    animation: fadeIn ease 2s;
    -webkit-animation: fadeIn ease 5s;
    -moz-animation: fadeIn ease 5s;
    -o-animation: fadeIn ease 5s;
    -ms-animation: fadeIn ease 5s;
    }
    @keyframes fadeIn {
    0% {opacity:0.2;}
    100% {opacity:1;}
    }
    
    @-moz-keyframes fadeIn {
    0% {opacity:0.2;}
    100% {opacity:1;}
    }
    
    @-webkit-keyframes fadeIn {
    0% {opacity:0.2;}
    100% {opacity:1;}
    }
    
    @-o-keyframes fadeIn {
    0% {opacity:0.2;}
    100% {opacity:1;}
    }
    
    @-ms-keyframes fadeIn {
    0% {opacity:0.2;}
    100% {opacity:1;}
    }
    .pounds:before{
      content: "£";
      margin-right: 3px;
    }
    .dollars:before{
      content: "$";
      margin-right: 3px;
    }

`;
