import styled from "styled-components";

// HEADER
export const HeaderContainer = styled.div`
  width: 100%;
  height: 64px;
  position: fixed;
  z-index: 1;
  display: flex;
  background: #483698;
  box-sizing: border-box;
`;
export const HeaderLeftStyle = styled.div`
  @media (min-width: 992px) {
    display: flex;
    justify-content: space-between;
    margin-left: 40px;
    align-items: center;

    h2 {
      margin: 0;
      padding-left: 8px;
      font-size: 18px;
      line-height: 24px;
      font-weight: 500;
    }
    .link {
      font-size: 14px;
      color: #9b91c6;
    }
    .active {
      padding-bottom: 19px;
      border-bottom: 4px solid #fff;
      color: #fff;
    }
    .logo_nav_link {
      margin-left: 65px;
    }
  }
  @media (min-width: 1200px) {
    display: flex;
    justify-content: space-between;
    margin-left: 66px;
    align-items: center;

    h2 {
      margin: 0;
      padding-left: 8px;
      font-size: 18px;
      line-height: 24px;
      font-weight: 500;
    }
    .link {
      font-size: 14px;
      color: #9b91c6;
    }
    .active {
      padding-bottom: 19px;
      border-bottom: 4px solid #fff;
      color: #fff;
    }
    .logo_nav_link {
      margin-left: 100px;
    }
  }
`;
export const HeaderRightStyle = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  right: 0;
  margin-right: 32px;
  align-items: center;
  padding-top: 16px;

  .profile {
    padding: 0px 15px 0px 15px;

    .profile-bg {
      background: rgba(255, 255, 255, 0.1) !important;
      border-radius: 3px;
    }
  }
`;
export const InnerRightStyle = styled.div`
  display: flex;
  flex-direction: column;

  #name {
    margin: 0;
    color: #fff;
    font-size: 14px;
    font-weight: 400;
  }

  #title {
    margin: 0;
    color: #fff;
    font-size: 11px;
    opacity: 0.5;
    // line-height: 14px;
  }
`;

export const SidebarStyle = styled.div`
  @media (min-width: 992px) {
    width: 22.5%;
    height: 100%;
    display: flex;
    position: fixed;
    flex-direction: column;
    box-sizing: border-box;
    background-color: #f4f5f7;
    justify-content: flex-start;
  }
  @media (min-width: 1200px) {
    width: 18.5%;
    height: 100%;
    display: flex;
    position: fixed;
    flex-direction: column;
    box-sizing: border-box;
    background-color: #f4f5f7;
    justify-content: flex-start;
  }
`;
export const MainContentStyle = styled.div`
  @media (min-width: 992px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 24%;
    margin-top: 20px;
    margin-right: 32px;

    .ant-spin {
      color: #483698;
    }
    #top_title {
      font-size: 12px;
      margin-bottom: 10px;
      color: rgb(50, 50, 61, 0.5);
    }
    .container {
      padding-right: 0px;
      padding-left: 0px;
    }
  }
  @media (min-width: 1200px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 21%;
    margin-top: 20px;
    margin-right: 32px;

    #top_title {
      font-size: 12px;
      margin-bottom: 10px;
      color: rgb(50, 50, 61, 0.5);
    }
    .container {
      padding-right: 0px;
      padding-left: 0px;
    }
    .ant-select-selection {
      background-color: rgba(50, 50, 61, 0.1);
      height: 30px;
      width: 150px;
    }
  }
`;
