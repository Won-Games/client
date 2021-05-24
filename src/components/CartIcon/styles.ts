import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const Wrapper = styled.button`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    background-color: transparent;
    border: none;
    cursor: pointer;
    width: 2.4rem;
    height: 2.4rem;
    position: relative;
    transition: color ${theme.transition.default};

    &:hover {
      color: ${darken(0.3, theme.colors.white)};
    }
  `}
`

export const Badge = styled.span`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.secondary};
    color: ${theme.colors.white};
    font-size: 1rem;
    border-radius: 50%;
    width: 1.6rem;
    height: 1.6rem;
    position: absolute;
    top: -0.4rem;
    right: -0.4rem;
  `}
`
