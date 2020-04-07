import React, { useState } from "react";

import { ReviewItemStyle } from "../../style";

const ReviewItem = ({ children, name, onEditClick }) => {
  return (
    <ReviewItemStyle>
      <div className="header">
        <span className="item_name">{name}</span>
        <img
          className="edit_button"
          onClick={() => onEditClick()}
          src={require("../../../../assets/images/edit.svg")}
        />
      </div>
      {children}
    </ReviewItemStyle>
  );
};
export default ReviewItem;
