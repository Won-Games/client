import { gql } from '@apollo/client'

export const QUERY_PROFILE_ME = gql`
  query QueryProfileMe {
    me {
      username
      email
    }
  }
`
