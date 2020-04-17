import React, { useState, useEffect } from "react";
import { Input, Button, Descriptions } from "antd";
import jobs from "../../config/jobsData";
import JobCard from "./component/jobCard";
import MainLayout from "../mainview";
import { HomeStyle } from "./style";

const { Search } = Input;

const HomeView = () => {
  const [jobData, setJobData] = useState(jobs);
  const data = jobData.map((job) => {
    return {
      id: job.Id,
      title: job.Title,
      description: job.RoleDetails.join(" "),
      location: job.location,
      posted: "7th of April, 2020",
    };
  });
  const searchJob = (e) => {
    const { value } = e.target;
    if (value.length > 0) {
      const jobsToBeSearched = jobs;
      const result = [];
      jobsToBeSearched.forEach((job) => {
        delete job.Id;
        const values = Object.values(job);
        var searchPattern = new RegExp(value, "i");
        var atLeastOneMatches = values.some((e) => searchPattern.test(e));
        if (atLeastOneMatches) {
          result.push(job);
        }
      });
      setJobData(result);
    } else {
      setJobData(jobs);
    }
  };
  console.log(jobData);
  return (
    <MainLayout>
      <HomeStyle>
        <div className="banner">
          <span className="banner_text">Find the job that suits you.</span>
          <div className="search_container">
            <Search
              onChange={searchJob}
              placeholder={"search for job or keyword"}
            />
            <Button
              style={{
                color: "white",
                border: "none",
                background: "#00338D",
                borderRadius: "0",
                width: "140px",
                height: "initial",
              }}
            >
              Search
            </Button>
          </div>
        </div>
        <div className="main_content">
          <span style={{ marginBottom: "10px" }}>
            {" "}
            Showing {jobData.length > 0 ? 1 : 0} - {jobData.length} of 5 jobs
          </span>
          {data.map((d) => (
            <JobCard content={d} />
          ))}
        </div>
      </HomeStyle>
    </MainLayout>
  );
};
export default HomeView;
