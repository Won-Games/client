import { gql } from '@apollo/client'
import { GameFragment } from 'graphql/fragments/game'

export const QUERY_ORDERS = gql`
  query QueryOrders($identifier: ID!) {
    orders(where: { user: { id: $identifier } }) {
      id
      created_at
      card_brand
      card_last4
      games {
        ...GameFragment
      }
    }
  }
  ${GameFragment}
`
