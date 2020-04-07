import React from "react";
import { Button } from "antd";

const Apply = ({ clickFunction }) => {
  return (
    <Button
      style={{
        border: "none",
        color: "white",
        background: "#00338D",
        borderRadius: "3px"
      }}
      onClick={() => clickFunction()}
    >
      Apply Now
    </Button>
  );
};
export default Apply;
