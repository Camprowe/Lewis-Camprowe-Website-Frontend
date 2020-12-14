import React from "react"
import headerSectionStyles from "./headerSection.module.css"
import Img from "gatsby-image"

export default function homeHeader(props) {
  return <section className={headerSectionStyles.section}>
            <div className={headerSectionStyles.gridContainer}>
              <div className={headerSectionStyles.gridItem}>
                <div className={headerSectionStyles.make}>
                  <h2>{props.title}</h2>
                  <p>{props.description}</p>
                </div>
              </div>
              <div className={headerSectionStyles.gridItem}>
                <Img fluid={props.image} alt="..." />  
              </div>
            </div>
        </section>
}



