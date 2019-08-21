import React from "react";
import { Link } from 'react-router-dom'


const Job = (props) => {
  console.log(props);
  return (
    <div className="Job">
      <div className="jobTitle"> {props.jobItem.jobTitle} </div>
      <div className="company"> {props.jobItem.company} </div>
      <span className="jobStart"> {props.jobItem.jobStart} </span>
      <span className="jobEnd"> {props.jobItem.jobEnd} </span>
      <div className="jobDescription"> {props.jobItem.jobDescription}
      </div>
    </div>
  )
}

export default Job;
