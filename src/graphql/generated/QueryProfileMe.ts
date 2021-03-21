/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryProfileMe
// ====================================================

export interface QueryProfileMe_me {
  __typename: "UsersPermissionsMe";
  username: string;
  email: string;
}

export interface QueryProfileMe {
  me: QueryProfileMe_me | null;
}
