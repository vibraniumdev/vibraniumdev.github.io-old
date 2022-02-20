import { useState } from "react"
import * as NProgress from "nprogress"

const useFetchProjects = () => {
  const [reposList, setReposList] = useState()
  const [isLoading, setIsLoading] = useState(false)

  const fetchProjects = async () => {
    setIsLoading(true)
    NProgress.start()

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

export default useFetchProjects
