import { useEffect, useState } from 'react'

import type { PostProps } from 'components'

import { formatDateForPost } from 'utils/formatters'

import data from 'assets/data/posts.json'

export const usePosts = () => {
  const [search, setSearch] = useState('')
  const [posts, setPosts] = useState<Omit<PostProps, 'savedButton'>[]>(() => {
    const getPosts = localStorage.getItem('posts')

    return getPosts ? JSON.parse(getPosts) : data
  })

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts))
  }, [posts])

  const toggleSavePost = (id: number, saved: boolean) => {
    setPosts((state) =>
      state.map((post) => {
        if (post.id === id) {
          return {
            ...post,
            saved: !saved,
          }
        }

        return post
      })
    )
  }

  const filteredPosts = posts.filter(({ createdAt, title, description }) => {
    const searchLowercase = search.toLowerCase()
    const formattedDate = formatDateForPost(new Date(createdAt))
    const lowercaseTitle = title.toLowerCase()
    const lowercaseDescription = description.toLowerCase()

    return (
      formattedDate.includes(searchLowercase) ||
      lowercaseTitle.includes(searchLowercase) ||
      lowercaseDescription.includes(searchLowercase)
    )
  })

  return {
    posts: filteredPosts,
    toggleSavePost,
    search,
    setSearch,
  }
}
