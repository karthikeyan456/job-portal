import React from "react";
import { JobsList } from "../helpers/JobsList.js";
import JobsItem from "../components/JobsItem.js";
import '../styles/Jobs.css'
import { Link } from "react-router-dom/cjs/react-router-dom.min.js";

function Jobs() {
  return (
    <div className="Jobs">
        <div className='Title'>
        <h1>JOB LIST</h1>
        <Link to="/Student"> BACK </Link>
      </div>
      <div className="jobsList">
        {JobsList.map((jobsItem, key) => {
          return (
            <JobsItem
              job ID={key}
              image={jobsItem.image}
              Username={jobsItem.name}
              Username1={jobsItem.name1}
              Location={jobsItem.loc}
              Salary={jobsItem.Salary}
              Info={jobsItem.Info}
              Experience={jobsItem.Experience}

            />
          );
        })}
      </div>
    </div>
  );
}

export default Jobs;

// Job ID (Primary Key), Employer ID (Foreign Key referencing Users Table), Title, Description, Location, Salary, experience required and any other job-related information.