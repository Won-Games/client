import { GameHitProps } from '.'

export default [
  {
    id: '1',
    name: 'Game 1',
    short_description: 'Description',
    cover: {
      url: '/cover-1.jpg'
    },
    slug: 'game-1',
    price: 25,
    platforms: [{ name: 'windows' }],
    release_date: '2015-12-05'
  },
  {
    id: '2',
    name: 'Game 2',
    short_description: 'Description',
    cover: {
      url: '/cover-2.jpg'
    },
    slug: 'game-2',
    price: 12,
    platforms: [{ name: 'linux' }],
    release_date: '2006-10-30'
  }
] as GameHitProps[]
