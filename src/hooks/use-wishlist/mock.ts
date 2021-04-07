import { QUERY_WISHLIST } from 'graphql/queries/wishlist'

const gameMock = (id: string) => ({
  id,
  name: `Sample Game ${id}`,
  slug: `sample-game-${id}`,
  price: 10.5,
  developers: [{ name: 'sample developer' }],
  cover: {
    url: '/sample-game.jpg'
  },
  __typename: 'Game'
})

export const wishlistMock = {
  request: {
    query: QUERY_WISHLIST,
    context: { session: { jwt: '123' } },
    variables: {
      identifier: 'lorem@ipsum.com'
    }
  },
  result: {
    data: {
      wishlists: [
        {
          id: 1,
          games: [gameMock('1'), gameMock('2')]
        }
      ]
    }
  }
}

export const wishlistItems = [
  {
    id: '1',
    title: 'Sample Game 1',
    slug: 'sample-game-1',
    developer: 'sample developer',
    img: 'http://localhost:1337/sample-game.jpg',
    price: 10.5
  },
  {
    id: '2',
    title: 'Sample Game 2',
    slug: 'sample-game-2',
    developer: 'sample developer',
    img: 'http://localhost:1337/sample-game.jpg',
    price: 10.5
  },
  {
    id: '3',
    title: 'Sample Game 3',
    slug: 'sample-game-3',
    developer: 'sample developer',
    img: 'http://localhost:1337/sample-game.jpg',
    price: 10.5
  }
]
