import React from "react";
import Job from '../Job'


const Jobs = (props) => {
  const jobs= props.jobs
  const jobslist = jobs.map((job)=>{
    console.log('job', job);
    return <Job job={job.fields} />
  })
  return(
    <ul className="job-list">
      {jobslist}
    </ul>
  )
}
export default Jobs;
