import { render, screen } from 'utils/test-utils'
import NoResults from '.'

describe('<Search />', () => {
  it('should render correctly', () => {
    const { container } = render(<NoResults />)

    expect(screen.getByRole('img')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /no results found/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/try searching another term/i)).toBeInTheDocument()

    expect(
      screen.getByRole('link', { name: /explore all games/i })
    ).toHaveAttribute('href', '/games')

    expect(container.parentElement).toMatchSnapshot()
  })
})
