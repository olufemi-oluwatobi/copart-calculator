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
import jobs from "../../config/jobsData";

const ApplicationView = (props) => {
  const [segments] = useState([
    "Your Information",
    "Work History",
    "Educational Background",
    "Professional Qualifications",
    "File Upload",
    "Application Review",
  ]);
  const [job, setJob] = useState({});
  const [currentSegment, setCurrentSegment] = useState(segments[0]);
  const [success, setSuccess] = useState(null);
  const [ApplicationId, setApplicationId] = useState(1);
  const [
    { response, error, loading, setError },
    setRequestInfo,
  ] = useHttpRequest();
  useEffect(() => {
    const {
      match: {
        params: { id },
      },
    } = props;
    const parseId = parseInt(id, 10);
    if (parseId) {
      const job = jobs.filter((job) => job.Id == id)[0];
      setJob(job);
    } else {
      props.history.push("/");
    }
  }, []);
  useEffect(() => {
    if (error) {
      setTimeout(setError(null), 5000);
    }
  }, [error]);

  useEffect(() => {
    if (success) {
      setTimeout(() => setSuccess(null), 5000);
    }
  }, [success]);
  const [userData, setUserData] = useState({
    "Your Information": {
      // FirstName: "Olufemi",
      // LastName: "oluwatobi",
      // Email: "olufemioluwatobi1996@gmail.com",
      // Phone: "2020202",
      // PostalAddress: "23 Irone",
      // CurrentTakeHome: 200,
      // Title: "Mr",
      // AccessCode: "unique",
      // JobId: 2,
    },
    "Work History": [
      {
        // Employer: "new name",
        // JobTitle: "CEO",
        // Responsibilities: "ssss",
        // Industry: "Airlines / Aviation",
        // IsCurrentWork: false,
        // AccessCode: "unique",
        // JobId: 2,
      },
    ],
    "Educational Background": [
      // {
      // //   Location: "ss",
      // //   UniversityName: "sss",
      // //   Concentration: "Audit",
      // //   DegreeType: "Bsc",
      // //   AccessCode: "unique",
      // //   JobId: 2,
      // // },
    ],
    "Professional Qualifications": [
      // {
      //   Name: "new",
      //   Body: "nan",
      //   ObtainedAt: "nns",
      //   AccessCode: "unique",
      //   JobId: 2,
      // },
    ],
    "File Upload": [
      // {
      //   DocTypeName: "Curriculum Vitae",
      //   FileNameWithFormat: "cg.docx",
      //   B64: "msms",
      // },
    ],
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
  const returnInitArrayOrValueArray = (array, initValue) => {
    return array[0] ? array : [initValue];
  };
  const editObj = {
    editInfo: () => setCurrentSegment(segments[0]),
    workHistory: () => setCurrentSegment(segments[1]),
    eduBackground: () => setCurrentSegment(segments[2]),
    upload: () => setCurrentSegment(segments[4]),
    professional: () => setCurrentSegment(segments[3]),
  };
  let basicFormInitValue = {
    FirstName: userData["Your Information"].FirstName || "",
    LastName: userData["Your Information"].LastName || "",
    Email: userData["Your Information"].Email || "",
    Phone: userData["Your Information"].Phone || null,
    PostalAddress: userData["Your Information"].PostalAddress || "",
    CurrentTakeHome: userData["Your Information"].CurrentTakeHome || null,
    Title: userData["Your Information"].Title || "",
  };
  let workInformation = {
    Employer: "",
    JobTitle: "",
    Responsibilities: "",
    Industry: "",
    IsCurrentWork: false,
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
  let fileInfo = {
    DocTypeName: "",
    FileNameWithFormat: "",
    B64: "",
  };
  const jobDetails = {
    "Employment Type": job.EmpType,
    "Direct Report": job.DirectReport,
    "Profile Within the Organization": job.ProfileWithinOrg,
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
  useEffect(() => {
    if (response) {
      console.log("here");
      if (currentSegment !== segments[5]) {
        if (currentSegment === segments[0]) {
          setApplicationId(response.ApplicationId);
        }
        goToNextSegment();
      } else {
        console.log("here");
        setSuccess("your application was succesful");
      }
    }
  }, [response]);
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
  const getMargin = () => {
    switch (currentSegment) {
      case "Your Information":
        return "-17vw";
      case "Work History":
        return "-20vw";
      case "Educational Background":
        return "-10vw";
      case "Professional Qualifications":
        return "-9vw";
      case "File Upload":
        return "-21vw";
    }
  };
  const appendObjToArrayOfObj = (array, obj) => {
    return array.map((arr) => {
      return { ...arr, ...obj };
    });
  };
  const generateValues = (values) => {
    const extraInfo = { AccessCode: "unique", JobId: job.Id };
    switch (currentSegment) {
      case "Your Information":
        return { ...values, ...extraInfo };
      case "Work History":
        return appendObjToArrayOfObj(values["workExperience"], extraInfo);
      case "Educational Background":
        return appendObjToArrayOfObj(
          values["educationalBackground"],
          extraInfo
        );
      case "Professional Qualifications":
        return appendObjToArrayOfObj(
          values["professionalQualification"],
          extraInfo
        );
      case "File Upload":
        return { ...values, ...extraInfo, ApplicationId };
    }
  };
  const handleSubmit = (values) => {
    const url = getUrl();
    setUserData((value) => {
      return update(value, {
        [currentSegment]: {
          $set: generateValues(values),
        },
      });
    });
    setRequestInfo({
      url: `Applicants/${url}`,
      options: {
        method: "POST",
        body: JSON.stringify(generateValues(values)),
      },
    });
  };
  const handleFileSubmit = (values) => {
    const url = getUrl();
    setUserData((value) => {
      return update(value, {
        [currentSegment]: {
          $push: [values],
        },
      });
    });
    setRequestInfo({
      url: `Applicants/${url}`,
      options: {
        method: "POST",
        body: JSON.stringify(generateValues(values)),
      },
    });
  };
  const submitApplication = () => {
    setRequestInfo({
      url: `Applicants/SubmitApplication?ApplicationId=${ApplicationId}`,
      options: {
        method: "GET",
      },
    });
  };
  console.log("success", success);
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
            initialValues={{
              workExperience: returnInitArrayOrValueArray(
                userData["Work History"],
                workInformation
              ),
            }}
          />
        );
      case "Educational Background":
        return (
          <EduFormView
            isLoading={loading}
            onSubmit={handleSubmit}
            displayPreviousForm={goBackToPreviousSegment}
            initialValues={{
              educationalBackground: returnInitArrayOrValueArray(
                userData["Educational Background"],
                educationalBackground
              ),
            }}
          />
        );
      case "Professional Qualifications":
        return (
          <ProfessionalFormView
            onSubmit={handleSubmit}
            isLoading={loading}
            displayPreviousForm={goBackToPreviousSegment}
            initialValues={{
              professionalQualification: returnInitArrayOrValueArray(
                userData["Professional Qualifications"],
                professionalQualification
              ),
            }}
          />
        );
      case "File Upload":
        return (
          <DocumentFormView
            isLoading={loading}
            displayPreviousForm={goBackToPreviousSegment}
            onSubmit={handleFileSubmit}
            initialValues={fileInfo}
            tableData={userData["File Upload"]}
          />
        );
      case "Application Review":
        return (
          <Review
            isLoading={loading}
            displayPreviousForm={goBackToPreviousSegment}
            handleSubmit={submitApplication}
            editFunctions={editObj}
            data={userData}
          />
        );
    }
  };

  return (
    <MainLayout
      success={success}
      currentStep={segments.indexOf(currentSegment)}
      error={error}
    >
      <ApplicationViewWrapper headerMargin={getMargin}>
        <div className="segment_details">
          <div className="segment_name">{currentSegment}</div>
          <div className="segement_instruction">All fields are required</div>
        </div>
        <div className="segement_content">
          <div className="progress_details">
            <span className="step_number">
              {segments.indexOf(currentSegment) + 1} of 6
            </span>
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
            <span>{job.Title}</span>
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
