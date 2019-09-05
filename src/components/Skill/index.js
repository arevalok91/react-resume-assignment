import React from "react";



const Skill= (props) => {

  return (
  
    <div className="Skills">

    <div className="type">{props.skill.type}</div> 
    <div className="description"> {props.skill.description} </div>
      
    </div>
  )
}


export default Skill; 