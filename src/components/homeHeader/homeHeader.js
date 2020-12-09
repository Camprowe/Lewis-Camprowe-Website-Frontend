import React from "react"
import Header from "../header/header"
import homeHeaderStyles from "./homeHeader.module.css"
import Img from "gatsby-image"

export default function homeHeader(props) {
  return <section className={homeHeaderStyles.homeHeader}>
        <Header/>
        <Img fluid={props.headerImage} className={homeHeaderStyles.headerImage} alt="..." />          
          <div className={homeHeaderStyles.make}>
            <h2>Make</h2>
            <p>I make things every week to grow and build and learn new things.</p>
          </div>
        </section>
}



