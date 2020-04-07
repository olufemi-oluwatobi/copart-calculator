import React from "react";
import "./style.css";
import { Select } from "antd";
const { Option } = Select;

const SelectComponent = ({
  onSelected,
  dropDownContent = [],
  placeholder,
  tag
}) => (
  <Select
    placeholder={placeholder}
    onSelect={onSelected}
    defaultValue={placeholder}
  >
    {dropDownContent.map(data => (
      <Option type={tag} value={data}>
        {data}
      </Option>
    ))}
  </Select>
);
export default SelectComponent;
