import React from "react"
import Header from "../header/header"
import blogHeaderStyles from "./blogHeader.module.css"
import Img from "gatsby-image"

export default function blogHeader(props) {
  return <section className={blogHeaderStyles.section}>
        <Header/>
        <Img fluid={props.headerImage} className={blogHeaderStyles.headerImage} alt="..." />          
          <div className={blogHeaderStyles.make}>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
          </div>
        </section>
}



