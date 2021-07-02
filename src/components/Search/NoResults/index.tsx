import Image from 'next/image'
import Link from 'next/link'

import Button from 'components/Button'

import { Search as SearchIcon } from '@styled-icons/material-outlined'
import * as S from './styles'

const NoResults = () => (
  <S.Wrapper>
    <Image
      src="/img/empty.svg"
      alt="A gamer in a couch playing videogame"
      width={110}
      height={110}
    />

    <S.Info>
      <S.Title>
        <SearchIcon size={24} /> No Results Found
      </S.Title>
      <S.Description>Try searching another term.</S.Description>
      <Link href="/games" passHref>
        <Button as="a">Explore all games </Button>
      </Link>
    </S.Info>
  </S.Wrapper>
)

export default NoResults
