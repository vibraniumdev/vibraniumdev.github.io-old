import { useState } from "react"

const UseFetchLearningCenterProjects = () => {
  const [learningCenterReposList, setLearningCenterReposList] = useState()
  const [isLearningCenterLoading, setIsLearningCenterLoading] = useState(false)

  const fetchLearningCenterProjects = async () => {
    setIsLearningCenterLoading(true)

    await fetch(
      `https://api.github.com/orgs/divertimentos/repos?sort=updated&direction=desc`
    )
      .then((response) => response.json())
      .then((resultData) => {
        setLearningCenterReposList(resultData)
      })
    setIsLearningCenterLoading(false)
  }

  return {
    fetchLearningCenterProjects,
    learningCenterReposList,
    isLearningCenterLoading,
  }
}

export default UseFetchLearningCenterProjects
