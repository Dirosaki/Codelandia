import { usePosts } from 'hooks/usePosts'

import { Post, Typography } from 'components'

import { SearchIcon } from 'assets/icons'

import { theme } from 'styles/theme'

import * as Styled from './styles'

export const Home = () => {
  const { search, setSearch, posts, toggleSavePost } = usePosts()

  return (
    <>
      <Styled.Header>
        <div>
          <Typography variant="h1" weight={500} color={theme.colors.brand}>
            Code
            <Typography variant="span">lândia</Typography>
          </Typography>
          <Styled.SearchFieldContainer>
            <SearchIcon />
            <input
              type="text"
              placeholder="Pesquisar no blog"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </Styled.SearchFieldContainer>
        </div>
      </Styled.Header>

      <Styled.Container>
        <Styled.PostList>
          {posts.map(({ id, createdAt, title, description, saved }) => (
            <Post
              key={id}
              id={id}
              createdAt={createdAt}
              title={title}
              description={description}
              saved={saved}
              savedButton={toggleSavePost}
            />
          ))}
        </Styled.PostList>
      </Styled.Container>
    </>
  )
}
