import { render, screen } from '@testing-library/react'

import Profile from '.'

describe('<Profile />', () => {
  it('should render the heading', () => {
    const { container } = render(<Profile />)

    expect(screen.getByRole('heading', { name: /Profile/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
