import Link from 'next/link'
import Button from 'components/Button'
import GameItem from 'components/GameItem'

import * as S from './styles'
import Empty from 'components/Empty'
import { useCart } from 'hooks/use-cart'

export type CartListProps = {
  hasButton?: boolean
}

const CartList = ({ hasButton = false }: CartListProps) => {
  const { items, total } = useCart()

  return (
    <S.Wrapper isEmpty={!items.length}>
      {items.length ? (
        <>
          {items.map((item) => (
            <GameItem key={item.title} {...item} />
          ))}

          <S.Footer>
            {!hasButton && <span>Total:</span>}
            <S.Total>{total}</S.Total>

            {hasButton && (
              <Link href="/cart">
                <Button as="a">Buy it now</Button>
              </Link>
            )}
          </S.Footer>
        </>
      ) : (
        <Empty
          title="Your cart is empty"
          description="Go back to the store and explore great games and offers."
          hasLink
        />
      )}
    </S.Wrapper>
  )
}

export default CartList
