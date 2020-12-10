import React from "react"
import blogSectionStyles from "./blogSection.module.css"

export default function blogSection(props) {
  return <section className={blogSectionStyles.section}>
            <h1>Blog</h1>
            <div className={blogSectionStyles.gridContainer}>
              <div className={blogSectionStyles.gridItem}>
                <img src="https://images.unsplash.com/photo-1607514835229-e4d12ac1acdc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" />
                <div className={blogSectionStyles.details}>
                  <h2>This is a title</h2>
                  <p>This is a brief description of the blog post</p>
                </div>
              </div>
              <div className={blogSectionStyles.gridItem}>
                <img src="https://images.unsplash.com/photo-1607514835229-e4d12ac1acdc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" />
                <div className={blogSectionStyles.details}>
                  <h2>This is a title</h2>
                  <p>This is a brief description of the blog post</p>
                </div>
              </div>
              <div className={blogSectionStyles.gridItem}>
                <img src="https://images.unsplash.com/photo-1607514835229-e4d12ac1acdc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" />
                <div className={blogSectionStyles.details}>
                  <h2>This is a title</h2>
                  <p>This is a brief description of the blog post</p>
                </div>
              </div>             
            </div>
            <a href="./blog" className={"button"}>More Posts</a>
          </section>
}



