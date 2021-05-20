import { useWishlist } from 'hooks/use-wishlist'
import { useSession } from 'next-auth/client'

import Button, { ButtonProps } from 'components/Button'

import { Favorite, FavoriteBorder } from '@styled-icons/material-outlined'

type WishlistButtonProps = {
  id: string
  hasText?: boolean
} & Pick<ButtonProps, 'size'>

const WishlistButton = ({
  id,
  hasText,
  size = 'small'
}: WishlistButtonProps) => {
  const [session] = useSession()

  const {
    isInWishlist,
    addToWishlist,
    removeFromWishlist,
    loading: loadingApollo
  } = useWishlist()

  const handleClick = () => {
    return isInWishlist(id) ? removeFromWishlist(id) : addToWishlist(id)
  }

  const ButtonText = isInWishlist(id)
    ? 'Remove from Wishlist'
    : 'Add to Wishlist'

  if (!session) return null

  return (
    <Button
      icon={
        isInWishlist(id) ? (
          <Favorite aria-label={ButtonText} />
        ) : (
          <FavoriteBorder aria-label={ButtonText} />
        )
      }
      onClick={handleClick}
      minimal
      size={size}
      disabled={loadingApollo}
      style={{ filter: 'none' }}
    >
      {hasText && ButtonText}
    </Button>
  )
}

export default WishlistButton
