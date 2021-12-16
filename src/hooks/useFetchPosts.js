import { useState } from "react"

const useFetchPosts = () => {
  const [postList, setPostList] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchPosts = async () => {
    setIsLoading(true)
    await fetch(`https://dev.to/api/articles/latest?username=guiteixeira`)
      .then((response) => response.json())
      .then((resultData) => {
        setPostList(resultData)
      })

    setIsLoading(false)
  }

  return {
    fetchPosts,
    postList,
    isLoading,
  }
}

export default useFetchPosts
