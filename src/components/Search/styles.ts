import styled, { css } from 'styled-components'
import { List } from './Hits/styles'

export const Overlay = styled.div`
  ${({ theme }) => css`
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: ${theme.layers.overlay};
  `}
`

type WrapperProps = {
  isOpen?: boolean
}

const wrapperModifiers = {
  open: () => css`
    opacity: 1;
    pointer-events: auto;
    visibility: visible;
  `,
  close: () => css`
    opacity: 0;
    pointer-events: none;
    visibility: hidden;
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, isOpen }) => css`
    position: relative;
    width: 100%;

    ${Overlay} {
      transition: opacity ${theme.transition.default};
      ${isOpen && wrapperModifiers.open()}
      ${!isOpen && wrapperModifiers.close()}
    }

    ${List} {
      transform-origin: top center;
      transition: transform 0.3s ease-in, opacity ${theme.transition.default};
      transform: ${isOpen
        ? 'translateY(0)'
        : `translateY(-${theme.spacings.xsmall})`};
      ${isOpen && wrapperModifiers.open()}
      ${!isOpen && wrapperModifiers.close()}
    }
  `}
`
