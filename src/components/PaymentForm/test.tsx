import { CartContextData, CartContextDefaultValues } from 'hooks/use-cart'
import { Session } from 'next-auth'
import { render, screen, waitFor } from 'utils/test-utils'

import * as stripeMethods from 'utils/stripe/methods'
import PaymentForm from '.'

import items from 'components/CartList/mock'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

useRouter.mockImplementation(() => ({
  push: jest.fn()
}))

// mock next link
jest.mock('next/link', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>
  }
}))

// Mock Stripe js
jest.mock('@stripe/react-stripe-js', () => ({
  CardElement: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock CardElement">{children}</div>
  },
  Elements: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Elements">{children}</div>
  },
  useStripe: jest.fn().mockReturnValue({
    confirmCardPayment: jest.fn().mockResolvedValue({
      paymentMethod: {
        card: 'card'
      }
    })
  }),
  useElements: jest.fn().mockReturnValue({
    getElement: jest.fn()
  })
}))

// create mock to createPaymentIntent method
const createPaymentIntent = jest.spyOn(stripeMethods, 'createPaymentIntent')

describe('<PaymentForm />', () => {
  let session: Session
  let cartProviderProps: CartContextData

  beforeEach(() => {
    session = {
      jwt: 'token',
      user: {
        email: 'won@games.com'
      },
      expires: '13234'
    }

    cartProviderProps = {
      ...CartContextDefaultValues,
      items
    }
  })

  it('should render the component correctly', () => {
    render(<PaymentForm session={session} />)

    expect(
      screen.getByRole('heading', { name: /Payment/i })
    ).toBeInTheDocument()

    expect(screen.getByTestId(/Mock CardElement/i)).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /buy now/i })).toBeDisabled()
  })

  it('should call createPayment when it renders and render free if gets freeGames', async () => {
    createPaymentIntent.mockResolvedValueOnce({ freeGames: true })

    render(<PaymentForm session={session} />, { cartProviderProps })

    expect(createPaymentIntent).toHaveBeenCalled()

    await waitFor(() => {
      expect(
        screen.getByText(/Only free games, click buy and enjoy!/i)
      ).toBeInTheDocument()
    })
  })

  it('should call createPayment when it renders and render error if has any issue', async () => {
    createPaymentIntent.mockResolvedValueOnce({ error: 'Error message' })

    render(<PaymentForm session={session} />, { cartProviderProps })

    expect(createPaymentIntent).toHaveBeenCalled()

    await waitFor(() => {
      expect(screen.getByText(/Error message/i)).toBeInTheDocument()
    })
  })
})
