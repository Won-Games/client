import styled, { css, DefaultTheme } from 'styled-components'
import { darken } from 'polished'

export const SearchForm = styled.form`
  display: flex;
  justify-content: flex-end;
`

export const Input = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
    padding-right: ${theme.spacings.small};
    background: transparent;
    border: 0;
    outline: none;

    &::placeholder {
      color: ${theme.colors.white};
    }

    &::-webkit-search-cancel-button {
      -webkit-appearance: none;
    }
  `}
`

const inputModifiers = {
  open: (theme: DefaultTheme) => css`
    background: ${theme.colors.darkGray};
    border-color: ${theme.colors.white};
    width: 100%;
    ${Input} {
      transition: opacity ${theme.transition.default} 0.2s;
      width: 100%;
      opacity: 1;
      pointer-events: auto;
      visibility: visible;
    }
  `,
  close: (theme: DefaultTheme) => css`
    background: none;
    border-color: transparent;
    width: 0;
    ${Input} {
      transition: opacity ${theme.transition.fast};
      width: 0;
      opacity: 0;
      pointer-events: none;
      visibility: hidden;
    }
  `
}

type InputWrapperProps = {
  isOpen?: boolean
}

export const InputWrapper = styled.div<InputWrapperProps>`
  ${({ theme, isOpen }) => css`
    position: relative;
    max-height: 4.2rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 ${theme.spacings.xsmall};
    border-radius: ${theme.border.radius};
    z-index: ${theme.layers.alwaysOnTop};
    border: 0.1rem solid;
    transition: width ${theme.transition.default},
      border-color ${theme.transition.fast} 0.1s,
      background ${theme.transition.fast} 0.1s;

    ${isOpen && inputModifiers.open(theme)}
    ${!isOpen && inputModifiers.close(theme)}
  `}
`

export const Icon = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    cursor: pointer;
    transition: color ${theme.transition.default};

    &:hover {
      color: ${darken(0.3, theme.colors.white)};
    }

    & > svg {
      width: 2.4rem;
      height: 2.4rem;
    }
  `}
`
