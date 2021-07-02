import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.li`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(10rem + (${theme.spacings.xxsmall} * 2));

    ${media.lessThan('medium')`
      img {
        display: none;
      }
    `}
  `}
`

export const Info = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: 0 ${theme.spacings.small};
  `}
`

export const Title = styled.h3`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.large};
    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.medium};
    `}
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.small};
    `}
  `}
`
