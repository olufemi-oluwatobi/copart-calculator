import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const AnimationWrapper = styled.div`
  .visible {
    visibility: visible;
    opacity: 1;
    transition: opacity 2s linear;
  }
  .form_content {
    border: 1px solid #c4c4c4;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 20px;
    margin-bottom: 10px;
  }
  .hidden {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s 2s, opacity 2s linear;
  }
`;
const AnimateView = (props) => {
  const wrapper = useRef();
  useEffect(() => {
    console.log(wrapper);
    setTimeout(() => (wrapper.current.className = "visible"), 200);
  }, []);
  return (
    <AnimationWrapper>
      <div className="hidden" ref={wrapper}>
        {props.children}
      </div>
    </AnimationWrapper>
  );
};
export default AnimateView;
