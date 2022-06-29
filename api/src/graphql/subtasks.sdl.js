export const schema = gql`
  type Subtask {
    id: Int!
    title: String!
    isCompleted: Boolean!
    task: Task
    taskId: Int
  }

  type Query {
    subtasks(isCompleted: Boolean, taskId: Int): [Subtask!]!  @requireAuth
    subtask(id: Int!): Subtask @requireAuth
  }

  input CreateSubtaskInput {
    title: String!
    isCompleted: Boolean!
    taskId: Int
  }

  input UpdateSubtaskInput {
    title: String
    isCompleted: Boolean
    taskId: Int
  }

  type Mutation {
    createSubtask(input: CreateSubtaskInput!): Subtask! @requireAuth
    updateSubtask(id: Int!, input: UpdateSubtaskInput!): Subtask! @requireAuth
    deleteSubtask(id: Int!): Subtask! @requireAuth
  }
`
