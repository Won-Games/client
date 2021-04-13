import styled, { css } from 'styled-components'

export const Wrapper = styled.svg`
  ${({ theme }) => css`
    stroke: ${theme.colors.primary};
    padding: 0.1rem;
    margin: 0.2rem;
  `}
`
