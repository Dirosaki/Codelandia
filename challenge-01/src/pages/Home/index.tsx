import { Typography } from 'components'
import * as Styled from './styles'
import { theme } from 'styles/theme'
import { SearchIcon } from 'assets/icons'

export const Home = () => {
  return (
    <Styled.Header>
      <div>
        <Typography variant="h1" weight={500} color={theme.colors.brand}>
          Code
          <Typography variant="span">lândia</Typography>
        </Typography>
        <Styled.SearchFieldContainer>
          <SearchIcon />
          <input type="text" placeholder="Pesquisar no blog" />
        </Styled.SearchFieldContainer>
      </div>
    </Styled.Header>
  )
}
