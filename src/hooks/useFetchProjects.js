import { useState } from "react"

const UseFetchProjects = () => {
  const [reposList, setReposList] = useState()
  const [learningCenterReposList, setLearningCenterReposList] = useState()
  const [isLoading, setIsLoading] = useState(false)


  async function fetchProjects() {
    setIsLoading(true)
    await fetch(
      `https://api.github.com/users/vibraniumdev/repos?sort=updated&direction=desc`
    )
      .then((response) => response.json())
      .then((resultData) => {
        setReposList(resultData)
      })

    await fetch(
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
