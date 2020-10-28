import { render, screen } from '@testing-library/react'

import Auth from '.'

describe('<Auth />', () => {
  it('should render all components and children', () => {
    render(
      <Auth title="Auth Title">
        <input type="text" />
      </Auth>
    )

    // verifiquem se tem 2 logos

    // verifica se tem o heading principal do banner

    // verifica se tem o subtitle

    // verifica se tem o title do content

    // verifica se o children tá sendo renderizado
  })
})
