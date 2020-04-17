import React, { useState, useEffect } from "react";
import { DetailsViewWrapper } from "./style";
import jobs from "../../config/jobsData";
import Apply from "../../components/applyButton";
import Collapsable from "../../components/collapsable";
import MainLayout from "../mainview";

const contacts = [
  {
    Name: "Brian D’Souza",
    position: "Partner and Head of Consulting",
    telephone: "+254 (0) 709 576 132",
    email: "briandesouza@kpmg.co.ke",
  },
  {
    name: "Titilope Olajide",
    position: "Associate Director, Transformation - People and Change",
    telephone: "+254 (0) 709 576 688",
    email: "titilopeolajide@kpmg.co.ke",
  },
  {
    name: "Hilda Amahundu",
    position: "Manager, Transformation - People and Change ",
    telephone: "+254 (0) 709 576 448",
    email: "hamahundu@kpmg.co.ke",
  },
];
const shouldBeVisible = window.screen.width > 800 ? true : false;
const DetailsView = (props) => {
  const [jobData, setJobData] = useState({});
  useEffect(() => {
    const {
      match: {
        params: { id },
      },
    } = props;
    const parseId = parseInt(id, 10);
    if (parseId) {
      const job = jobs.filter((job) => job.Id == id)[0];
      setJobData(job);
    } else {
      props.history.push("/");
    }
  }, []);
  const [roleIsVisible, setRoleVisibility] = useState(true);
  const [responsibilityIsVisiible, setResponsibilityVisibility] = useState(
    true
  );
  const [minimumIsVisible, setMinimumVisibility] = useState(shouldBeVisible);
  const [contactIsVisible, setContactVisibility] = useState(shouldBeVisible);

  return (
    <MainLayout>
      <DetailsViewWrapper>
        <div className="jobTitle">{jobData && jobData.Title}</div>
        <div>Nairobi, Kenya</div>
        <Apply
          clickFunction={() => props.history.push(`/apply/${jobData.Id}`)}
        />
        <div className="info_segement">
          <div className="segment_details">
            {" "}
            <span>Role details</span>
            <img
              onClick={() => setRoleVisibility(!roleIsVisible)}
              className="plus"
              src={require("../../assets/images/plus.svg")}
            />
          </div>
          <div className="segment_description">
            <Collapsable isVisible={roleIsVisible}>
              {jobData.RoleDetails &&
                jobData.RoleDetails.map((details) => <p>{details}</p>)}
            </Collapsable>
          </div>
        </div>
        <div className="info_segement">
          <div className="segment_details">
            {" "}
            <span>Key Responsibilities</span>
            <img
              onClick={() =>
                setResponsibilityVisibility(!responsibilityIsVisiible)
              }
              className="plus"
              src={require("../../assets/images/plus.svg")}
            />
          </div>
          <div className="segment_description">
            <Collapsable isVisible={responsibilityIsVisiible}>
              {jobData.Responsibilities &&
                jobData.Responsibilities.map((responsibility) => (
                  <li>{responsibility}</li>
                ))}
            </Collapsable>
          </div>
        </div>
        <div className="info_segement">
          <div className="segment_details">
            {" "}
            <span>Minimum Requirements</span>
            <img
              onClick={() => setMinimumVisibility(!minimumIsVisible)}
              className="plus"
              src={require("../../assets/images/plus.svg")}
            />
          </div>
          <div className="segment_description">
            <Collapsable isVisible={minimumIsVisible}>
              <span>Academic Requirements</span>
              {jobData.AcademicQualifications &&
                jobData.AcademicQualifications.map((academic) => (
                  <li>{academic}</li>
                ))}
              <span style={{ marginTop: "40px" }} className="span">
                Experience Requirements
              </span>
              {jobData.ExperienceRequirements &&
                jobData.ExperienceRequirements.map((experience) => (
                  <li>{experience}</li>
                ))}
              <span className="span">Summary of competencies</span>
              {jobData.Competencies &&
                jobData.Competencies.map((competency) => <li>{competency}</li>)}
              <span className="span">
                Summary of behavioural/general competencies
              </span>
              {jobData.Behaviours &&
                jobData.Behaviours.map((behaviour) => <li>{behaviour}</li>)}
            </Collapsable>
          </div>
        </div>
        <div className="info_segement">
          <div className="segment_details">
            <span>Key Contacts</span>{" "}
            <img
              onClick={() => setContactVisibility(!contactIsVisible)}
              className="plus"
              src={require("../../assets/images/plus.svg")}
            />
          </div>
          <div className="segment_description">
            <Collapsable isVisible={contactIsVisible}>
              {contacts.map((contact) => (
                <div className="contact_wrapper">
                  <span>{contact.name}</span>
                  <span>{contact.position}</span>
                  <span>T: {contact.telephone}</span>
                  <span>E: {contact.email}</span>
                </div>
              ))}
            </Collapsable>
          </div>
        </div>
        <Apply
          clickFunction={() => props.history.push(`/apply/${jobData.Id}`)}
        />
      </DetailsViewWrapper>
    </MainLayout>
  );
};
export default DetailsView;
