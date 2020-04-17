import styled from "styled-components";

export const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  padding: 20px;
  align-items: left;
  background: #FFFFFF;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);

  .title_wrapper {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 5px;
    justify-content: space-between;
    width: 100%;
    .title{
        font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 130%;
text-align: left;

display: flex;
align-items: center;
text-align: center;

/* text blue */

color: #172B4D;

    }
    .posted {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 150.5%;
      

      color: #172b4d;
    }
    .date {
      font-style: normal;
      font-weight: bolde;
      font-size: 14px;
      line-height: 150.5%;
      margin-left: 2px;

      color: #172b4d;
    }
  }
  .location {
    margin-bottom: 15px;

    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 150.5%;
    color: #42526e;
  }
  .description {
    margin-bottom: 5px;

    width:100%
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 150.5%;
    color: #172b4d;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .job_link{
    width: 100%;

    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 130%;

    
    display: flex;
    justify-content: flex-end;

    
    color: #00A3A1 !important;
    
  }
  @media (max-width: 800px){
    .title_wrapper {
        display: flex;
        flex-direction: column;
    }
  }
`;
