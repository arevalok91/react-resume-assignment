import React from "react";
import Education from '../Education'



const Educations = (props) => {
  const educations= props.educations
  const educationslist = educations.map((education)=>{
    console.log('education', education);
    return <Education education={education.fields} />
  })
  return(
    <ul className="education-list">
      {educationslist}
    </ul>
  )
}

export default Educations;