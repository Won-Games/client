import { render, screen } from '@testing-library/react'

import Checkbox from '.'

describe('<Checkbox />', () => {
  it('should render the heading', () => {
    const { container } = render(<Checkbox />)
  })
})
