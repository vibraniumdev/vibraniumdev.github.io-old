import { useState } from "react"

const useFetchProjects = () => {
  const [reposList, setReposList] = useState()
  const [isLoading, setIsLoading] = useState(false)

  const fetchProjects = async () => {
    setIsLoading(true)
    await fetch(
      `https://api.github.com/users/vibraniumdev/repos?sort=updated&direction=desc`
    )
      .then((response) => response.json())
      .then((resultData) => {
        setReposList(resultData)
      })

    setIsLoading(false)
  }

  return {
    fetchProjects,
    reposList,
    isLoading,
  }
}

export default useFetchProjects
