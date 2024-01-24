import styled, { css } from 'styled-components'

export const Header = styled.header(
  ({ theme }) => css`
    padding: 3rem 1.5rem;
    background: ${theme.colors.dark[20]};

    > div {
      margin-inline: auto;
      max-width: 76rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;

      h1 {
        font-size: 1.5rem;

        span {
          font-size: inherit;
          font-family: inherit;
        }
      }
    }

    @media (min-width: 48rem) {
      padding: 4rem 2rem;

      > div {
        gap: 3rem;

        h1 {
          font-size: 2.5rem;
        }
      }
    }
  `
)

export const SearchFieldContainer = styled.div(
  ({ theme }) => css`
    padding: 0.875rem 1.5rem;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    background: ${theme.colors.dark[30]};
    border: 2px solid ${theme.colors.dark[40]};
    border-radius: 0.5rem;

    svg {
      height: 1.125rem;
      width: 1.125rem;
    }

    input {
      flex: 1;
      height: auto;
      background: transparent;
      border: none;
      caret-color: ${theme.colors.dark[60]};
      font-size: 0.875rem;
      color: ${theme.colors.dark[60]};

      &::placeholder {
        color: ${theme.colors.dark[50]};
      }
    }

    @media (min-width: 48rem) {
      gap: 1rem;

      svg {
        height: 2rem;
        width: 2rem;
      }

      input {
        font-size: 1.25rem;
      }
    }
  `
)

export const Container = styled.main`
  padding-inline: 1.5rem;

  @media (min-width: 48rem) {
    padding-inline: 2rem;
  }
`

export const PostList = styled.ul`
  margin-inline: auto;
  padding-block: 2.5rem;
  max-width: 76rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  @media (min-width: 48rem) {
    padding-block: 3.5rem;
  }

  @media (min-width: 64rem) {
    padding-block: 5rem;
  }
`
