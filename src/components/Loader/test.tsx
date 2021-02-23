import { render, screen } from 'utils/test-utils'
import Loader from '.'

describe('<Loader />', () => {
  it('Should render correctly', () => {
    render(<Loader />)

    expect(screen.getByTitle(/loading/i)).toBeInTheDocument()
  })
})
