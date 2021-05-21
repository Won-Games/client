import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { darken } from 'polished'

import { Container } from 'components/Container'

export const Main = styled(Container)`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
    display: grid;
    grid-template-columns: 26rem 1fr;
    gap: ${theme.grid.gutter};
    `}
  `}
`

export const ShowMore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10rem;
`

export const ShowMoreButton = styled.button`
  ${({ theme }) => css`
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    color: ${theme.colors.white};
    background-color: transparent;
    border: none;
    padding: ${theme.spacings.xsmall};
    transition: color ${theme.transition.default};

    > svg {
      transition: color ${theme.transition.default};
      color: ${theme.colors.primary};
    }

    &:hover {
      color: ${darken(0.3, theme.colors.white)};

      > svg {
        color: ${darken(0.2, theme.colors.primary)};
      }
    }
  `}
`
export const ShowMoreLoading = styled.img`
  width: 4rem;
`
