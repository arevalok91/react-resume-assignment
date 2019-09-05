import React from "react";
import Skill from '../Skill'



const Skills = (props) => {
  const skills= props.skills
  const skillslist = skills.map((skill)=>{
    console.log('skill', skill);
    return <Skill skill={skill.fields} />
  })
  return(
    <ul className="skills-list">
      {skillslist}
    </ul>
  )
}

export default Skills;