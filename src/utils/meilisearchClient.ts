import { instantMeiliSearch } from '@meilisearch/instant-meilisearch'

if (!process.env.NEXT_PUBLIC_MEILISEARCH_SERVER)
  throw new Error('Missing env.NEXT_PUBLIC_MEILISEARCH_SERVER')

const server = process.env.NEXT_PUBLIC_MEILISEARCH_SERVER
const key = process.env.NEXT_PUBLIC_MEILISEARCH_PUBLIC_KEY ?? ''

export const searchClient = instantMeiliSearch(server, key)
