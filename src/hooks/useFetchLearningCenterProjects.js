import { useState } from "react"

const UseFetchLearningCenterProjects = () => {
  const [learningCenterReposList, setLearningCenterReposList] = useState()
  const [isLearningCenterLoading, setIsLearningCenterLoading] = useState(false)

  const fetchLearningCenterProjects = () => {
    setIsLearningCenterLoading(true)

    fetch(`https://api.github.com/orgs/guilherme-learning-center/repos`)
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
