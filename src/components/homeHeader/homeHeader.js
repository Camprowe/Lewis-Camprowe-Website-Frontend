import React from "react"
import Header from "../header/header"
import homeHeaderStyles from "./homeHeader.module.css"
import Img from "gatsby-image"
import TextLoop from "react-text-loop";

export default function homeHeader(props) {
  return <section className={homeHeaderStyles.section}>
        <Header/>
        <Img fluid={props.headerImage} className={homeHeaderStyles.headerImage} alt="..." />          
          <div className={homeHeaderStyles.make}>
            <h2><TextLoop children={["Make", "Build", "Write", "Create", "Develop"]} /></h2>
            <p>The making of something whether physical, digital or something else entirely, is the most exciting thing anyone can do. This is my outlet to discuss and share all the things I have and will be making.</p>
          </div>
        </section>
}



