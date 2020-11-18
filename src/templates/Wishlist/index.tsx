import Base from 'templates/Base'
import { Container } from 'components/Container'
import Heading from 'components/Heading'

import * as S from './styles'

const Wishlist = () => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Wishlist
      </Heading>
    </Container>
  </Base>
)

export default Wishlist
