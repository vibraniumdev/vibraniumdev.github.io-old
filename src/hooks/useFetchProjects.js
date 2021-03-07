import { useState } from "react"

const UseFetchProjects = () => {
  const [reposList, setReposList] = useState()
  const [isLoading, setIsLoading] = useState(false)

  const [learningCenterReposList, setLearningCenterReposList] = useState()

  async function fetchProjects() {
    setIsLoading(true)
    await fetch(
      `https://api.github.com/users/vibraniumdev/repos?sort=updated&direction=desc`
    )
      .then((response) => response.json())
      .then((resultData) => {
        setReposList(resultData)
      })

    fetch(
      `https://api.github.com/orgs/guilherme-learning-center/repos?sort=updated&direction=desc`
    )
      .then((response) => response.json())
      .then((resultData) => {
        setLearningCenterReposList(resultData)
      })
    setIsLoading(false)
  }

  return {
    fetchProjects,
    learningCenterReposList,
    reposList,
    isLoading,
  }
}

export default UseFetchProjects
