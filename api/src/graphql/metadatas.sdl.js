export const schema = gql`
  type Metadata {
    id: Int!
    board_name: String!
    user_name: String!
  }

  type Query {
    metadatas: [Metadata!]! @requireAuth
    metadata(id: Int!): Metadata @requireAuth
  }

  input CreateMetadataInput {
    board_name: String!
    user_name: String!
  }

  input UpdateMetadataInput {
    board_name: String
    user_name: String
  }

  type Mutation {
    createMetadata(input: CreateMetadataInput!): Metadata! @requireAuth
    updateMetadata(id: Int!, input: UpdateMetadataInput!): Metadata!
      @requireAuth
    deleteMetadata(id: Int!): Metadata! @requireAuth
  }
`
