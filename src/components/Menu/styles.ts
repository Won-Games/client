import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: ${theme.spacings.small} 0;
    position: relative;
  `}
`

export const LogoWrapper = styled.div`
  ${media.lessThan('medium')`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  `}
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    cursor: pointer;
    width: 2.4rem;
    height: 2.4rem;
  `}
`

export const MenuGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;

    > div {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`
