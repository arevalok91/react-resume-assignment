import React from "react";
import { Link } from "react-router-dom";
import ResumeHeader from "../../components/ResumeHeader";
import Job from "../../components/Job";
import Jobs from "../../components/Jobs";


const jobData = [
  {
    jobTitle:" Software Developer Intern ",
    company:" Code The Dream",
    jobStart:"August 19 ,2019",
    jobEnd:"Present",
    jobDescription:"Interning at Code The Dream at The FrontierRTP in Durham, NC. Working on real-world developing Projects with a great group of talented people and senior developers. "
  },
  {
    jobTitle:" FreeLancer Designer ",
    company:"SelfEmployed",
    jobStart:"Janury 2018",
    jobEnd:"Present",
    jobDescription:"1234"
    
  },
  {
    jobTitle:"Online Marketing",
    company:"B&L Construction",
    jobStart:"September 22,2014",
    jobEnd:"June 23,2019",
    jobDescription:"1234"
    
  }
]

const Resume = () => (
  <div className="view-container resume-page">
    <ResumeHeader />
    <h2>Jobs</h2>
    <Jobs jobs={jobData} />

    <h2>Education</h2>
  </div> 

  
); 


export default Resume;
