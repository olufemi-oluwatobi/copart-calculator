import React from "react";
import { DetailsViewWrapper } from "./style";
import Apply from "../../components/applyButton";
import MainLayout from "../mainview";

const roleDetails = [
  "Our client, a reputable financial institution within the region, is looking for a forward-thinking and experienced individual to lead its people transformation agenda as the Human Resource Lead",
  " The ideal candidate will be experienced in driving transformation from a people, organization and culture perspective and will be a strategic leader vast in the use of data and analytics to support decision-making relating to assigned portfolio",
  " Reporting to the Chief Executive Officer, the Human Resource Lead will provide strategic leadership for all people-related initiatives critical to enabling the organisation achieve its objectives",
  " The role holder will be a member of the senior leadership team and will be responsible for developing and overseeing the implementation of leading practice people management strategies, policies and programmes to drive a strong employee experience for about 1000 staff and promote productivity",
];
const responsibilities = [
  " Develop and ensure implementation of a people management strategy for the organization that is aligned to the objectives and highly dynamic priorities of the organization. ",
  " Ensure the development and consistent implementation of leading practice frameworks and processes to guide attraction, development, effective deployment and retention of the requisite skill set for the organization. These frameworks include but are not limited to resourcing, performance and career management, leadership development, employee relations, reward management, etc. ",
  " Ensure the above strategies are cascaded into actionable work plans, policies, processes and programmes and also ensure that these are in line with applicable labour laws. ",
  " Serve as a strategic business partner to management and other leaders in the organization to ensure consistent implementation of agreed people management policies. ",
  " Stay abreast of applicable leading practices relating to themes that impact productivity, employee engagement, culture alignment, etc. and make recommendations to the CEO on how these affect the deliverables of the HR department. ",
  " Provide leadership to the entire human resource department to ensure provision of best-in-class services to the organization. ",
  " Take responsibility for ensuring that the organization’s operating structure and culture continuously enable the delivery of strategic objectives. ",
  " Place strategic focus on succession planning and create and maintain a process for continuous strengthening of leadership capacity within the organization. ",
  " As a member of the leadership team, serve as a role model for the core values of the organization to peers, assigned staff as well as all stakeholder groups. ",
  " Ensure effective use of relevant data and supporting technology in the delivery of HR services to the organization. ",
  " Provide people-related insights to the organization and ensure these are effectively leveraged to improve productivity and employee engagement. ",
  " Perform other duties as assigned by the CEO in line with agreed delegation matrix.",
];
const academicQualification = "A Bachelor’s degree in the humanities, social sciences, or human resource management. ▪ A Master’s degree in strategic human resource management, organization development, business administration, etc. from a reputable institution will be an added advantage. ▪ Membership with relevant local, regional or global professional bodies is required.".split(
  "▪"
);
const experienceRequirements = [
  "10 to 15 years’ experience in strategic human resource management in dynamic and complex organizational environment is key. ",
  " At least five years in career history must be in a similar role in terms of scale and complexity.",
];

const competencies = [
  "Demonstrable knowledge of and exposure to all aspects of human resource management along the employee lifecycle. o Broad knowledge and experience in resourcing, organization development, change management, employee experience, reward management, learning and leadership development, etc. ",
  " Understanding of applicable laws and regulations. ",
  " Ability to effectively leverage data to present insights. ",
  " Familiarity with leading practice ERP solutions, particularly is it relates to people management",
];
const behaviours = [
  "Professionalism and integrity in line with organisation values ",
  " Planning and organization ",
  " Strategic thinking skills ",
  " Commercial acumen ",
  " Communication and interpersonal skills ",
  " Ability to effectively manage multiple stakeholders ",
  " Tact and diplomacy ",
  " Ability to manage and drive change",
];
const contacts = [
  {
    name: "Brain D'Souza",
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
const DetailsView = (props) => {
  return (
    <MainLayout>
      <DetailsViewWrapper>
        <div className="jobTitle">Human Resource Lead</div>
        <div>Nairobi, Kenya</div>
        <Apply clickFunction={() => props.history.push("apply")} />
        <div className="info_segement">
          <div className="segment_details"> Role details</div>
          <div className="segment_description">
            {roleDetails.map((details) => (
              <p>{details}</p>
            ))}
          </div>
        </div>
        <div className="info_segement">
          <div className="segment_details"> Key Responsibilities</div>
          <div className="segment_description">
            {responsibilities.map((responsibility) => (
              <li>{responsibility}</li>
            ))}
          </div>
        </div>
        <div className="info_segement">
          <div className="segment_details"> Minimum Requirements</div>
          <div className="segment_description">
            <span>Acedemic Requirements</span>
            {academicQualification.map((academic) => (
              <li>{academic}</li>
            ))}
            <span style={{ marginTop: "40px" }} className="span">
              Experience Requirements
            </span>
            {experienceRequirements.map((experience) => (
              <li>{experience}</li>
            ))}
            <span className="span">Summary of competencies</span>
            {competencies.map((competency) => (
              <li>{competency}</li>
            ))}
            <span className="span">
              Summary of behavioural/general competencies
            </span>
            {behaviours.map((behaviour) => (
              <li>{behaviour}</li>
            ))}
          </div>
        </div>
        <div className="info_segement">
          <div className="segment_details"> Key Contacts</div>
          <div className="segment_description">
            {contacts.map((contact) => (
              <div className="contact_wrapper">
                <span>{contact.name}</span>
                <span>{contact.position}</span>
                <span>T: {contact.telephone}</span>
                <span>E: {contact.email}</span>
              </div>
            ))}
          </div>
        </div>
        <Apply clickFunction={() => props.history.push("apply")} />
      </DetailsViewWrapper>
    </MainLayout>
  );
};
export default DetailsView;
