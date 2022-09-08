import React from 'react'
import { Col,} from 'react-bootstrap'

export default function ProjectCard({name,img,github,website,}) {
  return (
    <Col sm = {6} md ={4}>
        <div className = "project-imgbx">
            <img src = {img} alt = "project-img" />
        </div>
        <div className = "project-text">
            <h4>{name}</h4>
        </div>
        
    </Col>
  )
}
