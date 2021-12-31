import { useState } from "react"
import * as NProgress from "nprogress"

const UseFetchLearningCenterProjects = () => {
  const [learningCenterReposList, setLearningCenterReposList] = useState()
  const [isLearningCenterLoading, setIsLearningCenterLoading] = useState(false)

  const fetchLearningCenterProjects = async () => {
    NProgress.start()
    setIsLearningCenterLoading(true)

    await fetch(
      `https://api.github.com/orgs/divertimentos/repos?sort=updated&direction=desc`
    )
      .then((response) => response.json())
      .then((resultData) => {
        setLearningCenterReposList(resultData)
      })
    setIsLearningCenterLoading(false)
    NProgress.done()
  }

  return {
    fetchLearningCenterProjects,
    learningCenterReposList,
    isLearningCenterLoading,
  }
}

export default UseFetchLearningCenterProjects
