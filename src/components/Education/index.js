import React from "react";



const Education= (props) => {

  return (
  
    <div className="Education">

    <div className="school">{props.education.school}</div> }
    <div className="start"> {props.education.start} </div>
      <div className="end"> {props.education.end} </div>
      <div className="eduDescription"> {props.education.eduDescription}</div>
    </div>
  )
}


export default Education; 