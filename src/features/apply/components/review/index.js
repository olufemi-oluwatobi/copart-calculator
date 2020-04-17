import React, { useState } from "react";
import ReviewItem from "../reviewItem";
import FormFooter from "../formFooter";
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
const profColumns = [
  {
    title: "Name",
    dataIndex: "Name",
    key: "Name",
  },
  {
    title: "Body",
    dataIndex: "Body",
    key: "Body",
  },
  {
    title: "Obtained At",
    dataIndex: "ObtainedAt",
    key: "ObtainedAt",
  },
];
const fileColumns = [
  {
    title: "Document Type",
    dataIndex: "DocTypeName",
    key: "DocTypeName",
  },
  {
    title: "File Name",
    dataIndex: "FileNameWithFormat",
    key: "FileNameWithFormat",
  },
];
const workColumns = [
  {
    title: "Employer",
    dataIndex: "Employer",
    key: "DocTypeName",
  },
  {
    title: "Job Title",
    dataIndex: "JobTitle",
    key: "JobTitle",
  },
  {
    title: "Industry",
    dataIndex: "Industry",
    key: "Industry",
  },
];
const eduData = [
  {
    UniversityName: "Crawford University",
    Location: "Ogun state",
    DegreeType: "Bsc",
  },
];
const Review = ({
  data,
  editFunctions,
  displayPreviousForm,
  handleSubmit,
  isLoading,
}) => {
  const extractData = () => {
    return Object.entries(data["Your Information"]).map(([title, value]) => {
      return {
        title,
        value,
      };
    });
  };
  return (
    <ReviewStyle>
      <ReviewItem
        onEditClick={() => editFunctions["editInfo"]()}
        name={"Your Information"}
      >
        <div className="info_wrapper">
          {extractData().map((datum) => (
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
      >
        <Table
          columns={workColumns}
          dataSource={data["Work History"]}
          pagination={false}
        />
      </ReviewItem>
      <ReviewItem
        onEditClick={() => editFunctions["eduBackground"]()}
        name={"Educational Background"}
      >
        <Table
          columns={eduColumns}
          dataSource={data["Educational Background"]}
          pagination={false}
        />
      </ReviewItem>
      <ReviewItem
        onEditClick={() => editFunctions["professional"]()}
        name={"Professional Qualification"}
      >
        <Table
          columns={profColumns}
          dataSource={data["Professional Qualifications"]}
          pagination={false}
        />
      </ReviewItem>
      <ReviewItem
        onEditClick={() => editFunctions["upload"]()}
        name={"Supporting Documents"}
      >
        <Table
          columns={fileColumns}
          dataSource={data["File Upload"]}
          pagination={false}
        />
      </ReviewItem>
      <FormFooter
        isLoading={isLoading}
        previousButtonAction={displayPreviousForm}
        action={handleSubmit}
        hasPreviousButton
        width="100%"
        actionText="Submit Application"
      />
    </ReviewStyle>
  );
};
export default Review;
