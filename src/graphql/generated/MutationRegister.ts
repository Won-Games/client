/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UsersPermissionsRegisterInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: MutationRegister
// ====================================================

export interface MutationRegister_register {
  __typename: "UsersPermissionsLoginPayload";
  jwt: string | null;
}

export interface MutationRegister {
  register: MutationRegister_register;
}

export interface MutationRegisterVariables {
  input: UsersPermissionsRegisterInput;
}
