import React, { useEffect } from "react"

import Layout from "../components/layout"
import ProjectCard from "../components/projectCard"
import Seo from "../components/seo"
import useFetchLearningCenter from "../hooks/useFetchLearningCenterProjects"

const Learning = () => {
  const {
    fetchLearningCenterProjects,
    learningCenterReposList,
    isLearningCenterLoading,
  } = useFetchLearningCenter()

  useEffect(() => {
    fetchLearningCenterProjects()
  }, [])

  return (
    <Layout>
      <Seo
        title="LearningCenter"
        keywords={[`gatsby`, `application`, `react`]}
      />
      <ProjectCard
        isLoading={isLearningCenterLoading}
        reposList={learningCenterReposList}
      />
    </Layout>
  )
}

export default Learning
