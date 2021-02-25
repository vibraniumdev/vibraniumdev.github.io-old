import { useState } from "react"

const useFetchProjects = () => {
  const [reposList, setReposList] = useState()
  const [isLoading, setIsLoading] = useState(false)

  const fetchProjects = () => {
    setIsLoading(true)
    // get data from GitHub api
    fetch(
      `https://api.github.com/users/vibraniumdev/repos?sort=updated&direction=desc`
    )
      .then((response) => response.json()) // parse JSON from request
      .then((resultData) => {
        setReposList(resultData)
        setIsLoading(false)
      })
  }

  return { fetchProjects, reposList, isLoading }
}

export default useFetchProjects
