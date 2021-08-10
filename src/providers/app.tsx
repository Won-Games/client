/* eslint-disable react/jsx-key */
import { CartProvider } from 'hooks/use-cart'
import { WishlistProvider } from 'hooks/use-wishlist'
import theme from 'styles/theme'

import React, { cloneElement, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

interface AppProviderProps {
  children: ReactNode
}

const contexts = [
  <ThemeProvider theme={theme} />,
  <CartProvider />,
  <WishlistProvider />
] as JSX.Element[]

export const AppProvider = ({
  children: app
}: AppProviderProps): JSX.Element => (
  <>
    {contexts.reduce(
      (children, parent) => cloneElement(parent, { children }),
      app
    )}
  </>
)
