import React from "react";
import Job from '../Job'


const Jobs = (props) => {
  const jobs= props.jobs
  const jobslist = jobs.map((job)=>{
    console.log('jobs component', job)
    return <Job jobItem={job} />
  })
  return(
    <ul className="jobList">
      {jobslist}
    </ul>
  )
}
export default Jobs;
