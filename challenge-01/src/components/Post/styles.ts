import styled, { css } from 'styled-components'

type PostProps = {
  $saved: boolean
}

export const Post = styled.li<PostProps>(
  ({ theme, $saved }) => css`
    padding: 2rem 1.5rem;
    display: grid;
    grid-template-columns: 1fr max-content;
    background: ${theme.colors.dark[20]};
    border: 2px solid ${$saved ? theme.colors.brand : theme.colors.dark[40]};
    border-radius: 0.5rem;
    transition: 0.25s;

    small {
      align-self: center;
      font-size: 0.75rem;
      color: ${theme.colors.brand};
    }

    button {
      all: unset;
      line-height: 0;
      cursor: pointer;
    }

    svg {
      height: 1.25rem;
      width: 1.25rem;
      transition: 0.25s;

      ${$saved &&
      css`
        path {
          fill: ${theme.colors.brand};
        }
      `}
    }

    strong {
      margin-top: 1.25rem;
      grid-column: 1 / -1;
    }

    p {
      margin-top: 1rem;
      grid-column: 1 / -1;
      font-size: 0.875rem;
      line-height: 1.6;
      color: ${theme.colors.dark[50]};
    }

    @media (min-width: 48rem) {
      padding: 2.5rem;

      small {
        font-size: 0.875rem;
      }

      svg {
        height: 1.5rem;
        width: 1.5rem;
      }

      strong {
        margin-top: 1.5rem;
      }

      p {
        font-size: 1rem;
      }
    }

    @media (min-width: 64rem) {
      small {
        font-size: 1rem;
      }

      svg {
        height: 2rem;
        width: 2rem;

        &:hover path {
          fill: ${theme.colors.brand};
        }
      }

      strong {
        margin-top: 1.25rem;
        font-size: 1.5rem;
      }

      p {
        font-size: 1.25rem;
      }
    }
  `
)
