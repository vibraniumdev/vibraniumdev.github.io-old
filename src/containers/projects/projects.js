import React, { useState, useEffect } from "react"

import Layout from "../../components/layout"
import ProjectCard from "../../components/projectCard"
import SEO from "../../components/seo"
import useFetchProjects from "./useFetchProjects"

const Projects = () => {
  const { fetchProjects, reposList, isLoading } = useFetchProjects()

  useEffect(() => {
    fetchProjects()
  }, [])

  return (
    <Layout>
      <SEO title="Projects" keywords={[`gatsby`, `application`, `react`]} />
      <ProjectCard isLoading={isLoading} reposList={reposList} />
    </Layout>
  )
}

export default Projects
