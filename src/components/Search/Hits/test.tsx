import { render, screen } from 'utils/test-utils'
import Hits, { GameHitProps } from '.'
import Hit from './Hit'
import mockedHits from './mocks'

jest.mock('components/Search/NoResults', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock NoResults" />
  }
}))

let mockQuery = ''
let mockHits: GameHitProps[] = []

jest.mock('react-instantsearch-dom', () => ({
  Highlight: function Mock({ attribute }: { attribute: string }) {
    return <span data-testid="Mock Highlight">{attribute}</span>
  },
  connectStateResults: jest.fn().mockImplementation(
    (component) => () =>
      component({
        searching: false,
        searchState: {
          query: mockQuery
        }
      })
  ),
  connectHits: jest.fn().mockImplementation(
    (component) => () =>
      component({
        hits: mockHits
      })
  )
}))

describe('<Hits />', () => {
  it('should not render when there is no query', () => {
    mockQuery = ''

    render(<Hits />)

    expect(screen.queryByRole('list')).not.toBeInTheDocument()
  })

  it('should render NoResults when there is a query but no hits', () => {
    mockQuery = 'query'
    mockHits = []

    render(<Hits />)

    expect(screen.getByTestId(/mock noresults/i)).toBeInTheDocument()
  })

  it('should render hits in the results list', () => {
    mockHits = mockedHits

    render(<Hits />)

    expect(screen.getAllByRole('listitem')).toHaveLength(2)
  })
})

describe('<Hit />', () => {
  it('should render properly', () => {
    render(<Hit hit={mockedHits[0]} />)

    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      `/game/${mockedHits[0].slug}`
    )
    expect(screen.getByText(/\$25\.00/)).toBeInTheDocument()
    expect(screen.getByText(/2015/)).toBeInTheDocument() // Release year
    expect(screen.getByRole('img', { name: /windows/i })).toBeInTheDocument()
  })

  it('should render highlighting name and short_description', () => {
    render(<Hit hit={mockedHits[0]} />)

    const highlights = screen.getAllByTestId(/mock highlight/i)

    expect(highlights[0]).toHaveTextContent('name')
    expect(highlights[1]).toHaveTextContent('short_description')
  })
})
