import { useRef, useEffect } from 'react'
import { connectSearchBox } from 'react-instantsearch-dom'

import {
  Search as SearchIcon,
  Close as CloseIcon
} from '@styled-icons/material-outlined'
import * as S from './styles'

export type SearchBoxProps = {
  handleVisibility?: () => void
  isOpen: boolean
  currentRefinement: string
  refine: (v: string) => void
}

const SearchBox = connectSearchBox(
  ({ handleVisibility, isOpen, currentRefinement, refine }: SearchBoxProps) => {
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
      if (isOpen && inputRef.current) {
        inputRef.current.focus()
      }
    }, [isOpen])

    return (
      <S.SearchForm role="search">
        <S.InputWrapper isOpen={isOpen}>
          <S.Input
            type="search"
            ref={inputRef}
            placeholder="Search here…"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            value={currentRefinement}
            onChange={(event) => refine(event.currentTarget.value)}
            disabled={!isOpen}
          />

          <S.Icon>
            {isOpen ? (
              <CloseIcon onClick={handleVisibility} aria-label="Close Search" />
            ) : (
              <SearchIcon onClick={handleVisibility} aria-label="Open Search" />
            )}
          </S.Icon>
        </S.InputWrapper>
      </S.SearchForm>
    )
  }
)

export default SearchBox
