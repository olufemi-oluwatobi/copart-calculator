import React, { useEffect, useState } from "react";
import { CollapsableStyle } from "./style";
export const Collapsable = ({ isVisible, children }) => {
  const [showContent, setShowContent] = useState(isVisible);
  useEffect(() => {
    setTimeout(() => setShowContent(isVisible), 200);
  }, [isVisible]);
  return (
    <CollapsableStyle>
      <div className={` ${showContent ? "opened" : "closed"}`}>{children}</div>
    </CollapsableStyle>
  );
};
export default Collapsable;
