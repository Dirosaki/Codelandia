import { Typography } from 'components'

import { formatDateForPost } from 'utils/formatters'

import { HeartIcon } from 'assets/icons'

import * as Styled from './styles'

export type PostProps = {
  id: number
  createdAt: string
  title: string
  description: string
  saved: boolean
  savedButton(id: number, saved: boolean): void
}

export const Post = ({
  id,
  createdAt,
  title,
  description,
  saved,
  savedButton,
}: PostProps) => {
  return (
    <Styled.Post $saved={saved}>
      <Typography variant="small">
        {formatDateForPost(new Date(createdAt))}
      </Typography>
      <button
        type="button"
        onClick={() => savedButton(id, saved)}
        title="Salvar postagem"
      >
        <HeartIcon aria-label="Ícone de coração" />
      </button>

      <Typography variant="strong">{title}</Typography>
      <Typography>{description}</Typography>
    </Styled.Post>
  )
}
