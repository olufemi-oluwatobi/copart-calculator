import React, { useState } from "react";
import ReviewItem from "../reviewItem";
import { Table } from "antd";
import { ReviewStyle } from "../../style";

const data = [
  {
    title: "Title/Designation",
    value: "Mr",
  },
  {
    title: "Title/Designation",
    value: "Mr",
  },
  {
    title: "Title/Designation",
    value: "Mr",
  },
  {
    title: "Title/Designation",
    value: "Mr",
  },
  {
    title: "Title/Designation",
    value: "Mr",
  },
];
const eduColumns = [
  {
    title: "University Name",
    dataIndex: "UniversityName",
    key: "UniversityName",
  },
  {
    title: "Type Of Degree",
    dataIndex: "DegreeType",
    key: "DegreeType",
  },
  {
    title: "Location",
    dataIndex: "Location",
    key: "Location",
  },
];
const eduData = [
  {
    UniversityName: "Crawford University",
    Location: "Ogun state",
    DegreeType: "Bsc",
  },
];
const Review = ({ editFunctions }) => {
  return (
    <ReviewStyle>
      <ReviewItem
        onEditClick={() => editFunctions["editInfo"]()}
        name={"Your Information"}
      >
        <div className="info_wrapper">
          {data.map((datum) => (
            <div className="info_container">
              <span className="info_header">{datum.title}</span>
              <span className="info_body">{datum.value}</span>
            </div>
          ))}
        </div>
      </ReviewItem>
      <ReviewItem
        onEditClick={() => editFunctions["workHistory"]()}
        name={"Work History"}
      />
      <ReviewItem
        onEditClick={() => editFunctions["eduBackground"]()}
        name={"Educational Background"}
      >
        <Table columns={eduColumns} dataSource={eduData} pagination={false} />
      </ReviewItem>
      <ReviewItem
        onEditClick={() => editFunctions["professional"]()}
        name={"Professional Qualification"}
      >
        <Table columns={eduColumns} dataSource={eduData} pagination={false} />
      </ReviewItem>
      <ReviewItem
        onEditClick={() => editFunctions["upload"]()}
        name={"Supporting Documents"}
      >
        <Table columns={eduColumns} dataSource={eduData} pagination={false} />
      </ReviewItem>
    </ReviewStyle>
  );
};
export default Review;
