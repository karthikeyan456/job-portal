import React from "react";
//import '../styles/Jobs.css';
import {Link} from 'react-router-dom';

function JobsItem({ image, Username,Username1, Location ,Info,  Salary,Experience }) {
  return (
    <div className="jobsItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h2> {Username} </h2>
      <h4> {Username1} </h4>
      <p>{Experience}</p>
      <p>{Info}</p>
      <p>{Location}</p>
      <Link to="/JobApplicationForm">
      <button id="apply-now" type="submit">Apply Now</button>
      </Link>

    </div>
  );
}

export default JobsItem;
