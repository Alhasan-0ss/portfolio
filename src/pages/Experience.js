import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
    <VerticalTimeline lineColor="#FFFF00">
      <VerticalTimelineElement 
      className="Vertical-timeline-element--education" 
      date="2019 - Present"
      iconStyle={{background: "#3e497a", color: "#fff"}}
     
      icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
        4th year Degree Student
        </h3>

        <h4 className="vertical-timeline-element-subtitle">
          Bachelor's Degree
        </h4>

        <p> Computer Science</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
       className="vertical-timeline-element--work"
       date="2018 - 2023"
       iconStyle={{ background: "#e9d35b", color: "#fff" }}
       icon={<WorkIcon />}
     >
       <h3 className="vertical-timeline-element-title">
         Business Developer - SHEBEL AY
       </h3>
       <h4 className="vertical-timeline-element-subtitle">
         Espoo, Finland
       </h4>
       <p>
         Business creation, content managment, Email setup, Hosting setup, accounts maintenance .
       </p>
        
      </VerticalTimelineElement>

      <VerticalTimelineElement
      className="vertical-timeline-element--work"
        date="2019 - 2023"
        iconStyle={{ background: "#e9d35b", color: "#fff" }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Inbound Team Logistic - IKEA
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Espoo, Finland
        </h4>
        <p>Reciving Goods, driving Forkleft, and Data entry.</p>
       


      </VerticalTimelineElement>
      </VerticalTimeline>
      
      </div>
  )
}

export default Experience;