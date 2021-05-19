import styled, { css } from 'styled-components'
import { darken } from 'polished'
import media from 'styled-media-query'

export const StickyNote = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 2rem;
    margin-bottom: 6rem;
    background-color: ${darken(0.05, theme.colors.mainBg)};
    color: ${theme.colors.white};
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: ${theme.layers.menu};

    a {
      color: ${theme.colors.primary};
    }

    a,
    p {
      font-size: ${theme.font.sizes.small};
      line-height: 1.3;

      ${media.greaterThan('medium')`
        font-size: ${theme.font.sizes.medium}
      `}
    }
  `}
`
