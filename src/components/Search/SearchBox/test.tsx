import userEvent from '@testing-library/user-event'
import { render, screen, waitFor } from 'utils/test-utils'
import SearchBox, { SearchBoxProps } from '.'

const mockRefine = jest.fn()

jest.mock('react-instantsearch-dom', () => ({
  connectSearchBox: jest.fn().mockImplementation(
    (component) => (props: SearchBoxProps) =>
      component({
        ...props,
        currentRefinement: '',
        refine: mockRefine
      })
  )
}))

describe('<SearchBox />', () => {
  it('should render correctly when is closed', () => {
    render(<SearchBox isOpen={false} />)

    const input = screen.getByPlaceholderText(/search here…/i)

    expect(input).toBeDisabled()
    expect(input).toHaveStyle({ width: '0', opacity: '0' })

    expect(screen.getByLabelText(/open search/i)).toBeInTheDocument()
    expect(screen.queryByLabelText(/close search/i)).not.toBeInTheDocument()
  })

  it('should render correctly when is open', () => {
    render(<SearchBox isOpen={true} />)

    const input = screen.getByRole('searchbox')

    expect(input).toHaveFocus()
    expect(input).toHaveStyle({ width: '100%', opacity: '1' })

    expect(screen.getByLabelText(/close search/i)).toBeInTheDocument()
    expect(screen.queryByLabelText(/open search/i)).not.toBeInTheDocument()
  })

  it('should call refine method every time the user types', async () => {
    render(<SearchBox isOpen={true} />)

    const input = screen.getByRole('searchbox')
    const text = 'game'

    userEvent.type(input, text)

    await waitFor(() => {
      expect(mockRefine).toHaveBeenCalledTimes(text.length)
    })
  })
})
