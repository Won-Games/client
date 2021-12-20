import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const List = styled.ul`
  ${({ theme }) => css`
    position: absolute;
    width: 100%;
    max-height: 54rem;
    margin-top: ${theme.spacings.xxsmall};
    background: ${theme.colors.lightBg};
    box-shadow: 0 0.2rem 1.6rem 0.1rem ${theme.colors.black};
    overflow-y: auto;
    overflow-x: hidden;
    list-style: none;
    z-index: ${theme.layers.alwaysOnTop};

    li:not(:last-child) {
      border-bottom: 0.1rem solid ${theme.colors.lightGray};
    }

    ${media.lessThan('large')`
      position: fixed;
      max-height: calc(100vh - (7rem + 4.2rem + ${theme.spacings.xxsmall} + ${theme.spacings.small})); //Sticky Note + Input height + Menu padding-top + List margin-top
      right: 0;
      left: 0;
    `}
  `}
`

export const ListItem = styled.li`
  ${({ theme }) => css`
    padding: 0.2rem ${theme.spacings.xxsmall};

    &:first-child {
      padding-top: ${theme.spacings.xxsmall};
    }
    &:last-child {
      padding-bottom: ${theme.spacings.xxsmall};
    }
  `}
`

export const Result = styled.a`
  ${({ theme }) => css`
    display: flex;
    padding: 0.6rem ${theme.spacings.xxsmall};
    background: ${theme.colors.lightBg};
    color: ${theme.colors.darkGray};
    height: 10rem;
    font-size: ${theme.font.sizes.small};
    cursor: pointer;
    text-decoration: none;
    border-radius: ${theme.border.radius};
    transition: background ${theme.transition.fast},
      color ${theme.transition.fast};

    &:hover {
      color: ${theme.colors.white};
      background: ${theme.colors.primary};

      * > time {
        color: ${theme.colors.lightGray};
      }
    }

    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.xsmall};
    `}
  `}
`

export const ImageWrapper = styled.div`
  position: relative;
  min-width: 22rem;

  img {
    max-width: 100%;
    max-height: 100%;
  }

  ${media.lessThan('medium')`
      min-width: 12rem;
      height: 6rem;
      align-self: center;
  `}

  ${media.lessThan('small')`
     display: none;
  `}
`

export const Info = styled.div`
  ${({ theme }) => css`
    align-self: center;
    padding: 0 ${theme.spacings.xsmall};
    overflow: hidden;

    em {
      font-style: normal;
      font-weight: ${theme.font.bold};
      color: ${theme.colors.black};
      background: #fdf39a;
      border-radius: 0.2rem;
    }

    ${media.lessThan('small')`
      padding: 0;
    `}
  `}
`

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.small};
    `}
  `}
`

export const ReleaseYear = styled.time`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.gray};
    margin: 0 ${theme.spacings.xxsmall};
    transition: color ${theme.transition.fast};
  `}
`

export const Details = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.xxsmall};
  `}
`

export const Price = styled.strong`
  ${({ theme }) => css`
    display: inline-flex;
    font-weight: ${theme.font.bold};
    padding: 0 0.4rem;
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.white};
  `}
`

export const Platform = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacings.xxsmall};
  `}
`

export const PlatformIcon = styled.span`
  ${({ theme }) => css`
    & > svg {
      fill: ${theme.colors.lightGray};
      width: 1.4rem;
      height: 1.4rem;
    }
  `}
`

export const Description = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`
