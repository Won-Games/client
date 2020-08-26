import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

import { HeadingProps } from '.'

const wrapperModifiers = {
  lineLeft: (theme: DefaultTheme) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.7rem solid ${theme.colors.secondary};
  `,

  lineBottom: (theme: DefaultTheme) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};

    &::after {
      position: absolute;
      left: 0;
      bottom: -1rem;
      content: '';
      width: 5rem;
      border: 0.4rem solid ${theme.colors.primary};
    }
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color, lineLeft, lineBottom }) => css`
    color: ${theme.colors[color!]};
    font-size: ${theme.font.sizes.xlarge};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}

    ${lineLeft && wrapperModifiers.lineLeft(theme)}
    ${lineBottom && wrapperModifiers.lineBottom(theme)}
  `}
`
