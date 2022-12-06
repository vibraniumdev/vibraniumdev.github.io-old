import React, { useEffect } from "react"

import Layout from "../components/layout"
import ProjectCard from "../components/projectCard"
import Seo from "../components/seo"

const Learning = () => {
  return (
    <Layout>
      <Seo
        title="LearningCenter"
        keywords={[`gatsby`, `application`, `react`]}
      />
      <ProjectCard />
    </Layout>
  )
}

export default Learning
