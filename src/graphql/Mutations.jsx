import { gql } from "@apollo/client";

export const Mutations = {
  REGISTER: gql`
  mutation RegisterUser(
    $email: String!
    $username: String!
    $name: String!
    $surname: String!
    $password: String!
  ) {
    Verify(
      name: $name
      surname: $surname
      username: $username
      email: $email
      password: $password
    ) {
      email
      name
      password
      surname
      username
      timestamp
      token
      error
    }
  }
`,
  LOGIN: gql`
  mutation LoginUser(
    $email: String!
    $password: String!
  ) {
    Login(
      email: $email
      password: $password
    )
  }
`,
  VERIFY_EMAIL: gql`
  mutation VerifyEmail(
    $email: String!
    $username: String!
    $name: String!
    $surname: String!
    $password: String!
    $timestamp: String!
    $token1: String!
    $token2: String!
  ) {
    Register(
      name: $name
      surname: $surname
      username: $username
      email: $email
      password: $password
      timestamp: $timestamp
      token1: $token1
      token2: $token2
    )
  }
`,
};
