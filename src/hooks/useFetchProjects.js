import { useState } from "react"
import NProgress from "nprogress"

const UseFetchProjects = () => {
  const [reposList, setReposList] = useState()
  const [isLoading, setIsLoading] = useState(false)

  const fetchProjects = async () => {
    NProgress.start()
    setIsLoading(true)

    await fetch(
      `https://api.github.com/users/ggteixeira/repos?sort=updated&direction=desc`
    )
      .then((response) => response.json())
      .then((resultData) => {
        setReposList(resultData)
      })

    setIsLoading(false)
    NProgress.done()
  }

  return {
    fetchProjects,
    reposList,
    isLoading,
  }
}

export default UseFetchProjects
