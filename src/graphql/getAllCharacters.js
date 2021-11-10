import { gql } from "@apollo/client";
const GET_ALL_CHARACTERS = gql `
  query getAllCharacters{
  characters {
    results {
      id
      name
      image
      status
      location {
        name
      }
    }
  }
}`;

export default GET_ALL_CHARACTERS