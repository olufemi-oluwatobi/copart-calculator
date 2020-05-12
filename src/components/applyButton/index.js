import React, { forwardRef } from "react";
import { Button } from "antd";

const Apply = forwardRef(({ clickFunction }, ref) => {
  return (
    <div ref={ref}>
      <Button
        style={{
          border: "none",
          color: "white",
          background: "#00338D",
          borderRadius: "3px",
        }}
        onClick={() => clickFunction()}
      >
        Apply Now
      </Button>
    </div>
  );
});
export default Apply;
