import React from "react"
import Header from "../header/header"
import homeHeaderStyles from "./homeHeader.module.css"
import Img from "gatsby-image"
import TextLoop from "react-text-loop";

export default function homeHeader(props) {
  return <section className={homeHeaderStyles.homeHeader}>
        <Header/>
        <Img fluid={props.headerImage} className={homeHeaderStyles.headerImage} alt="..." />          
          <div className={homeHeaderStyles.make}>
            <h2><TextLoop children={["Make", "Build", "Write", "Create", "Develop"]} /></h2>
            <p>I make things every week to grow and build and learn new things.</p>
          </div>
        </section>
}



