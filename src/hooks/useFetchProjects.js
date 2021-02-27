import { useState } from "react"

const UseFetchProjects = () => {
  const [reposList, setReposList] = useState()
  const [isLoading, setIsLoading] = useState(false)

  const [learningCenterReposList, setLearningCenterReposList] = useState()

  const fetchProjects = () => {
    setIsLoading(true)
    // get data from GitHub api
    fetch(
      `https://api.github.com/users/vibraniumdev/repos?sort=updated&direction=desc`
    )
      .then((response) => response.json()) // parse JSON from request
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
