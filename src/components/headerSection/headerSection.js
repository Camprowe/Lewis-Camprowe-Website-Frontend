import React from "react"
import headerSectionStyles from "./headerSection.module.css"
import Img from "gatsby-image"

export default function homeHeader(props) {
  return <section className={headerSectionStyles.section}>
          <div className={headerSectionStyles.gridContainer}>
            <div className={headerSectionStyles.gridItem}>
              <div className={headerSectionStyles.make}>
                <h2>Maker of Things</h2>
                <p>The making of something whether physical, digital or something else entirely, is the most exciting thing anyone can do. This is my outlet to discuss and share all the things I have and will be making.</p>
              </div>
            </div>
            <div className={headerSectionStyles.gridItem}>
              <Img fluid={props.headerImage} alt="..." />  
            </div>
          </div>
        </section>
}



