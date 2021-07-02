import Image from 'next/image'
import Link from 'next/link'

import { Highlight } from 'react-instantsearch-dom'
import { getImageUrl } from 'utils/getImageUrl'
import formatPrice from 'utils/format-price'

import { Apple, Windows, Linux } from '@styled-icons/fa-brands'
import * as S from './styles'

import { GameHitProps, Platform } from '.'

export type HitProps = {
  hit: GameHitProps
}

const Hit = ({ hit }: HitProps) => {
  const platformIcons = {
    linux: <Linux title="Linux" />,
    mac: <Apple title="Mac" />,
    windows: <Windows title="Windows" />
  }
  const releaseYear =
    hit.release_date && new Date(hit.release_date).getFullYear()

  return (
    <Link href={`game/${hit.slug}`} passHref>
      <S.Result>
        <S.ImageWrapper>
          <Image
            src={`${getImageUrl(hit.cover?.url)}`}
            alt={hit.name}
            layout="fill"
            objectFit="cover"
          />
        </S.ImageWrapper>
        <S.Info>
          <S.Title>
            <Highlight attribute="name" hit={hit} />
            {releaseYear && (
              <S.ReleaseYear
                itemProp="releaseYear"
                dateTime={hit.release_date!}
              >
                {releaseYear}
              </S.ReleaseYear>
            )}
          </S.Title>
          <S.Details>
            <S.Price>{formatPrice(hit.price)}</S.Price>
            <S.Platform>
              {hit.platforms.map((icon: Platform) => (
                <S.PlatformIcon key={`${hit.id}${icon.name}`}>
                  {platformIcons[icon.name]}
                </S.PlatformIcon>
              ))}
            </S.Platform>
          </S.Details>
          <S.Description>
            <Highlight attribute="short_description" hit={hit} />
          </S.Description>
        </S.Info>
      </S.Result>
    </Link>
  )
}

export default Hit
