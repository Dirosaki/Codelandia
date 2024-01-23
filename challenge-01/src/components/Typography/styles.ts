import { ReactNode, createElement } from 'react'
import styled, { css } from 'styled-components'

type Headings = 'h1' | 'h2' | 'h3' | 'h4' | 'h4' | 'h6'

export type TypographyProps = {
  variant?: Headings | 'p' | 'span' | 'strong' | 'small'
  children: ReactNode
  size?: number
  weight?: 400 | 500
  color?: string
}

const PIXEL_VALUE = 16

export const Typography = styled(
  ({ variant = 'p', children, ...props }: TypographyProps) =>
    createElement(variant, props, children)
)(
  ({ theme, variant, weight = 500, size = 20, color }) => css`
    font-size: ${size / PIXEL_VALUE}rem;
    font-weight: ${weight};
    color: ${color ?? theme.colors.dark[60]};

    ${(variant?.startsWith('h') || variant === 'strong') &&
    css`
      font-family: 'Space Grotesk', sans-serif;
    `}
  `
)
