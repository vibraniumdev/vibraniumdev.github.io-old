import React, { useEffect } from "react"

import Layout from "../components/layout"
import ProjectCard from "../components/projectCard"
import SEO from "../components/seo"
import useFetchProjects from "../hooks/useFetchProjects"
import UseFetchLearningCenterProjects from "../hooks/useFetchLearningCenterProjects"

const Projects = () => {
  const { fetchProjects, reposList, isLoading } = useFetchProjects()
  const {
    fetchLearningCenterProjects,
    learningCenterReposList,
    isLearningCenterLoading,
  } = UseFetchLearningCenterProjects()

  // useEffect(() => {
  //   fetchProjects()
  // }, [])

  useEffect(() => {
    fetchLearningCenterProjects()
  }, [])

  return (
    <Layout>
      <SEO title="Projects" keywords={[`gatsby`, `application`, `react`]} />
      {/* <ProjectCard isLoading={isLoading} reposList={reposList} /> */}
      <ProjectCard
        isLoading={isLearningCenterLoading}
        reposList={learningCenterReposList}
      />
    </Layout>
  )
}

export default Projects
