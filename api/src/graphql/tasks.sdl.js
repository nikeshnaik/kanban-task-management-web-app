export const schema = gql`
  type Task {
    id: Int!
    title: String!
    description: String
    status: String!
    subtasks: [Subtask]!
    board_name: String!
    column_name: String!
    createdAt: DateTime
  }

  type Query {
    tasks(board_name: String, status: String): [Task!]! @requireAuth
    task(id: Int!): Task @requireAuth

  }

  input CreateTaskInput {
    title: String!
    description: String
    status: String!
    board_name: String!
    column_name: String!
  }

  input UpdateTaskInput {
    title: String
    description: String
    status: String
    board_name: String
    column_name: String
  }

  type Mutation {
    createTask(input: CreateTaskInput!): Task! @requireAuth
    updateTask(id: Int!, input: UpdateTaskInput!): Task! @requireAuth
    deleteTask(id: Int!): Task! @requireAuth
  }
`
