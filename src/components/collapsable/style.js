import styled from "styled-components";

export const CollapsableStyle = styled.div`
  .slider {
    height: 100%;

    -webkit-transition: -webkit-transform 0.3s ease;
    -moz-transition: -moz-transform 0.3s ease;
    -ms-transition: -ms-transform 0.3s ease;
    transition: transform 0.3s ease;
  }

  .opened {
    visibility: visible;
    max-height: 1000%
    transition: max-height 0.5s linear;
  }
  .closed {
    visibility: hidden;
    max-height: 0px
    transition: visibility 0s 0.5s, max-height 0.5s linear;
  }
`;
