import React from "react";
import ResumeHeader from "../../components/ResumeHeader";
import Jobs from "../../components/Jobs";
import Educations from "../../components/Educations";



class Resume extends React.Component{
  constructor(props) {
  super(props);
  this.state = {
    loading: false,
    jobs:[],
    educations:[],
  };
}
  componentDidMount() {
    this.getJobs();
    this.getEducation();
  }

 
  getJobs () {
    const url = "https://api.airtable.com/v0/appvVlUYy2M2kPc2k/Job%20Section?maxRecords=20&view=Grid%20view"
    fetch(
      url,
      {
        headers : {Authorization: "Bearer " + process.env.REACT_APP_AIRTABLE_KEY}
      }

    )
    .then(response => response.json())
  .then(responseData => {
    console.log ( 'Job Data', responseData)
    const jobs= responseData.records;
    this.setState({ jobs:jobs });
  })
  };
  
  /***** end of jobs */

  getEducation() {
    const url = "https://api.airtable.com/v0/appvVlUYy2M2kPc2k/Education%20Section?maxRecords=20&view=Grid%20view" 
    fetch( 
      url,
      {
        headers : { Authorization: "Bearer " + process.env.REACT_APP_AIRTABLE_KEY }
      }
    )
    .then(response => response.json())
    .then(responseData => {
      console.log('Education', responseData);
      const educations = responseData.records;
      this.setState({ educations:educations }, () => {

      });
  });
 }

  //End of Education

   render() {  

    return(
    
        <div>
          <ResumeHeader/>

          
          <div className="headers">
            <h2>Jobs</h2></div>
              <Jobs jobs={this.state.jobs}/>
            
      
          <h2>Education</h2>
              <Educations educations={this.state.educations}/>

          <h2>Skills</h2> 
      
          
        </div> 

    )

  }
}



export default Resume;
