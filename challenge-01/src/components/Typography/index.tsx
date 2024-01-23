import * as Styled from './styles'

export const Typography = ({ children, ...props }: Styled.TypographyProps) => {
  return <Styled.Typography {...props}>{children}</Styled.Typography>
}
