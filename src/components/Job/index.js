import React from "react";



const Job = (props) => {
  
  return (
    <div className="Job">

      <div className="job"> {props.job.jobTitle} </div>
      <div className="company"> {props.job.company} </div>
      <div className="jobStart"> {props.job.jobStart} </div>
      <div className="jobEnd"> {props.job.jobEnd} </div>
      <div className="jobDescription"> {props.job.jobDescription}</div>
    </div>
  )
}

export default Job;
