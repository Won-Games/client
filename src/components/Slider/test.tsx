import { render, screen } from '@testing-library/react'

import Slider from '.'

describe('<Slider />', () => {
  it('should render the heading', () => {
    const { container } = render(<Slider />)

    expect(screen.getByRole('heading', { name: /Slider/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
