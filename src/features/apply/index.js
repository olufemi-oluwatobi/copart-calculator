import React, { useState, useEffect } from "react";
import MainLayout from "../mainview";
import update from "immutability-helper";
import { Timeline } from "antd";
import {
  InfoFormView,
  WorkFormView,
  EduFormView,
  ProfessionalFormView,
  DocumentFormView,
} from "./components/Forms";
import Review from "./components/review";
import useHttpRequest from "./../../hooks/useHttpRequest";
import { ApplicationViewWrapper } from "./style";

const ApplicationView = (props) => {
  const [segments] = useState([
    "Your Information",
    "Work History",
    "Educational Background",
    "Professional Qualifications",
    "File Upload",
    "Application Review",
  ]);

  const [currentSegment, setCurrentSegment] = useState(segments[0]);
  const [{ response, error, loading }, setRequestInfo] = useHttpRequest();

  const [userData, setUserData] = useState({
    "Your Information": {},
    "Work History": [],
    "Educational Background": [],
    "Professional Qualifications": [],
    "File Upload": [],
  });
  const getTimelineColor = (segment) => {
    const currentSegmentIndex = segments.indexOf(currentSegment);
    const segmentIndex = segments.indexOf(segment);
    return segmentIndex > currentSegmentIndex ? "#AEAEB3" : "#00338D";
  };
  const isCurrentSegment = (segment) => {
    const currentSegmentIndex = segments.indexOf(currentSegment);
    const segmentIndex = segments.indexOf(segment);
    return segmentIndex === currentSegmentIndex;
  };

  const editObj = {
    editInfo: () => setCurrentSegment(segments[0]),
    workHistory: () => setCurrentSegment(segments[1]),
    eduBackground: () => setCurrentSegment(segments[2]),
    upload: () => setCurrentSegment(segments[4]),
    professional: () => setCurrentSegment(segments[3]),
  };
  let basicFormInitValue = {
    FirstName: "",
    LastName: "",
    Email: "",
    Phone: null,
    PostalAddress: "",
    CurrentTakeHome: null,
    Title: "",
  };
  let workInformation = {
    Employer: "",
    JobTitle: "",
    Responsibilities: "",
    Industry: "",
    isCurrentJob: false,
  };
  let educationalBackground = {
    Location: "",
    UniversityName: "",
    Concentration: "",
    DegreeType: "",
  };
  let professionalQualification = {
    Name: "",
    Body: "",
    ObtainedAt: "",
  };
  const jobDetails = {
    "Employment Type": "Full Time, Permanent or Contract",
    "Direct Report": "Chief Executive Officer",
    "Profile Within the Organization": "Senior Leadership Team",
    Location: "Nairobi, Kenya",
  };
  const goBackToPreviousSegment = () => {
    setCurrentSegment((segment) => {
      const indexOfCurrentSegment = segments.indexOf(segment);
      return segments[indexOfCurrentSegment - 1];
    });
  };
  const goToNextSegment = () => {
    setCurrentSegment((segment) => {
      const indexOfCurrentSegment = segments.indexOf(segment);
      return segments[indexOfCurrentSegment + 1];
    });
  };
  const getUrl = () => {
    switch (currentSegment) {
      case "Your Information":
        return "SetPersonalData";
      case "Work History":
        return "SetWorkHistory";
      case "Educational Background":
        return "SetEducationBackground";
      case "Professional Qualifications":
        return "SetQualification";
      case "File Upload":
        return "UploadDocuments";
    }
  };
  const handleSubmit = (values) => {
    const url = getUrl();
    console.log(values);
    setUserData((value) => {
      console.log("here");
      return update(value, {
        [currentSegment]: {
          $set: values,
        },
      });
    });
    setRequestInfo({
      url: `Applicants/${url}`,
      options: {
        method: "POST",
        body: JSON.stringify(values),
      },
    });
  };
  const displayCurrentForm = () => {
    switch (currentSegment) {
      case "Your Information":
        return (
          <InfoFormView
            isLoading={loading}
            onSubmit={handleSubmit}
            initialValues={basicFormInitValue}
            displayPreviousForm={goBackToPreviousSegment}
          />
        );
      case "Work History":
        return (
          <WorkFormView
            isLoading={loading}
            onSubmit={handleSubmit}
            displayPreviousForm={goBackToPreviousSegment}
            initialValues={{ workExperience: [workInformation] }}
          />
        );
      case "Educational Background":
        return (
          <EduFormView
            isLoading={loading}
            onSubmit={handleSubmit}
            displayPreviousForm={goBackToPreviousSegment}
            initialValues={{ educationalBackground: [educationalBackground] }}
          />
        );
      case "Professional Qualifications":
        return (
          <ProfessionalFormView
            onSubmit={handleSubmit}
            isLoading={loading}
            displayPreviousForm={goBackToPreviousSegment}
            initialValues={{
              professionalQualification: [professionalQualification],
            }}
          />
        );
      case "File Upload":
        return (
          <DocumentFormView
            isLoading={loading}
            displayPreviousForm={goBackToPreviousSegment}
            onSubmit={handleSubmit}
            initialValues={{}}
          />
        );
      case "Application Review":
        return <Review editFunctions={editObj} />;
    }
  };

  return (
    <MainLayout>
      <ApplicationViewWrapper>
        <div className="segment_details">
          <div className="segment_name">{currentSegment}</div>
          <div className="segement_instruction">All fields are required</div>
        </div>
        <div className="segement_content">
          <div className="progress_details">
            <span>1 of 6</span>
            <Timeline mode="right">
              {segments.map((segment) => (
                <Timeline.Item
                  style={{
                    color: getTimelineColor(segment),
                    fontWeight: isCurrentSegment(segment) && "bold",
                  }}
                  color={getTimelineColor(segment)}
                >
                  {segment}
                </Timeline.Item>
              ))}
            </Timeline>
          </div>
          {
            //<InfoFormView initialValues={basicFormInitValue} />
          }
          {displayCurrentForm()}
          <div className="job_details">
            <span>Human Resource Lead</span>
            {Object.entries(jobDetails).map(([key, value]) => (
              <div className="info_container">
                <span className="info_title">{key}</span>
                <span className="info_content">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </ApplicationViewWrapper>
    </MainLayout>
  );
};
export default ApplicationView;
