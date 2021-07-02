import { connectHits, connectStateResults } from 'react-instantsearch-dom'

import NoResults from '../NoResults'
import Hit from './Hit'

import * as S from './styles'

export type Platform = {
  name: 'windows' | 'linux' | 'mac'
}

export type Cover = {
  url: string
}

export type GameHitProps = {
  id: string
  name: string
  short_description: string
  cover: Cover | null
  slug: string
  price: number
  platforms: Platform[]
  release_date: string | null
}

export type HitsProps = {
  hits: GameHitProps[]
}

const Hits = connectHits(({ hits }: HitsProps) => (
  <S.List>
    {hits.length ? (
      hits.map((hit) => (
        <S.ListItem key={hit.id}>
          <Hit hit={hit} />
        </S.ListItem>
      ))
    ) : (
      <NoResults />
    )}
  </S.List>
))

export default connectStateResults(({ searchState }) =>
  searchState?.query ? <Hits /> : null
)
