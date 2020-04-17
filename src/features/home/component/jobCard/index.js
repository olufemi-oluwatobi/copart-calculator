import React from "react";
import { Link } from "react-router-dom";
import { CardStyle } from "./style";

const JobCard = ({ content }) => {
  const { title, posted, location, description, id } = content;
  return (
    <CardStyle>
      <div className="title_wrapper">
        <span className="title">{title}</span>
        <div>
          <span className="posted">Posted on</span>
          <span className="date">{posted}</span>
        </div>
      </div>
      <span className="location">{location}</span>
      <div className="description">{description}</div>
      <div className="job_link">
        <Link to={`/details/${id}`}>See job details</Link>
      </div>
    </CardStyle>
  );
};
export default JobCard;
