import React from 'react'
import { Col } from 'react-bootstrap'

const ProjectCard = ({title,techstack, description,imgUrl}) => {
  return (
    <Col size={12}  lg={4} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl}/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <h5 style={{color:"black"}}>{techstack}</h5>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}

export default ProjectCard