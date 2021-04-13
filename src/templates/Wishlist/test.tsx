import 'session.mock'
import 'match-media-mock'
import { render, screen } from 'utils/test-utils'

import Wishlist from '.'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import { WishlistContextDefaultValues } from 'hooks/use-wishlist'

const props = {
  recommendedTitle: 'You may like these games',
  recommendedHighlight: highlightMock,
  recommendedGames: gamesMock
}

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('components/Showcase', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Showcase" />
  }
}))

describe('<Wishlist />', () => {
  it('should render correctly', () => {
    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      items: [gamesMock[0]]
    }

    render(<Wishlist {...props} />, { wishlistProviderProps })

    expect(
      screen.getByRole('heading', { name: /wishlist/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/population zero/i)).toBeInTheDocument()
    expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument()
  })

  it('should render empty when there are no games', () => {
    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      items: []
    }

    render(
      <Wishlist
        recommendedTitle="You may like these games"
        recommendedGames={gamesMock}
        recommendedHighlight={highlightMock}
      />,
      { wishlistProviderProps }
    )

    expect(screen.queryByText(/population zero/i)).not.toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /your wishlist is empty/i })
    ).toBeInTheDocument()
  })
})
