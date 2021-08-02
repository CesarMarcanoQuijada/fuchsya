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
    Register(
      name: $name
      surname: $surname
      username: $username
      email: $email
      password: $password
    )
  }
`,
};
