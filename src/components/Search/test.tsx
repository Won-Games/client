import userEvent from '@testing-library/user-event'
import { render, screen } from 'utils/test-utils'

import Search from '.'
import { SearchBoxProps } from './SearchBox'

jest.mock('next/link', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>
  }
}))

jest.mock('./Hits', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Hits" />
  }
}))

jest.mock('utils/meilisearchClient', () => ({
  searchClient: jest.fn().mockResolvedValue({})
}))

jest.mock('react-instantsearch-dom', () => ({
  InstantSearch: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock InstantSearch">{children}</div>
  },
  Configure: jest.fn().mockImplementation(() => null),
  connectSearchBox: jest.fn().mockImplementation(
    (component) => (props: SearchBoxProps) =>
      component({
        ...props,
        currentRefinement: '',
        refine: jest.fn()
      })
  )
}))

describe('<Search />', () => {
  it('should hide input when clicking on overlay', () => {
    render(<Search />)

    const overlay = screen.getByTestId(/mock instantsearch/i).nextElementSibling

    userEvent.click(screen.getByLabelText(/open search/i))

    expect(overlay).toHaveStyle({ opacity: 1 })
    expect(overlay!.getAttribute('aria-hidden')).toBe('false')

    userEvent.click(overlay!)

    expect(screen.getByPlaceholderText(/search here…/i)).toHaveStyle({
      opacity: 0
    })
    expect(overlay).toHaveStyle({ opacity: 0 })
    expect(overlay!.getAttribute('aria-hidden')).toBe('true')
  })
})
