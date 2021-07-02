import { useEffect, useState } from 'react'

import { searchClient } from 'utils/meilisearchClient'
import { InstantSearch, Configure } from 'react-instantsearch-dom'

import SearchBox from './SearchBox'
import Hits from './Hits'

import * as S from './styles'

const Search = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset'

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <S.Wrapper isOpen={isOpen}>
      <InstantSearch indexName="game" searchClient={searchClient}>
        <SearchBox
          handleVisibility={() => setIsOpen(!isOpen)}
          isOpen={isOpen}
        />
        {/** Maximum number of results */}
        <Configure hitsPerPage={12} />
        <Hits />
      </InstantSearch>
      <S.Overlay onClick={() => setIsOpen(!isOpen)} aria-hidden={!isOpen} />
    </S.Wrapper>
  )
}

export default Search
