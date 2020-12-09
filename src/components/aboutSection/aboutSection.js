import React from "react"
import aboutSectionStyles from "./aboutSection.module.css"

export default function aboutSection(props) {
  return <section className={aboutSectionStyles.section}>
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce molestie est et neque rhoncus, et luctus lorem iaculis. Quisque porta in massa eget finibus. Nulla molestie tellus et tempor commodo. Proin iaculis nisi vitae ante elementum lobortis eu et quam. Fusce fermentum lacus ut mauris dapibus, vitae scelerisque est commodo. In hac habitasse platea dictumst. Phasellus tincidunt lorem sapien, non scelerisque metus congue ut. Quisque condimentum turpis sed neque congue volutpat. Nulla blandit id tortor a commodo. Donec id scelerisque leo. Cras at facilisis velit. Cras ornare dictum lorem vel tempor. Nulla congue metus sit amet mauris rutrum scelerisque. Morbi libero turpis, posuere pulvinar tortor et, volutpat volutpat enim. Sed efficitur tellus eget porta interdum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus consequat tellus vel finibus rutrum. In hac habitasse platea dictumst. Quisque semper tincidunt quam id fringilla. Maecenas ipsum augue, varius sit amet augue sed, ultricies placerat tellus.</p>
            <div className={aboutSectionStyles.socials}>
              <span>test</span>
              <span>test2</span> 
              <span>test3</span> 
              <span>test4</span>          
            </div>
        </section>
}



