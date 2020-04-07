import React, { useState, useEffect, useRef } from "react";
import { AnimationWrapper } from "../../style";

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
