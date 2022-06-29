import { db } from 'src/lib/db'

export const subtasks = ({isCompleted, taskId}) => {
  return db.subtask.findMany({
    where: {
      isCompleted: isCompleted,
      taskId: taskId
    }
  })
}

export const subtask = ({ id }) => {
  return db.subtask.findUnique({
    where: { id },
  })
}

export const createSubtask = ({ input }) => {
  return db.subtask.create({
    data: input,
  })
}

export const updateSubtask = ({ id, input }) => {
  return db.subtask.update({
    data: input,
    where: { id },
  })
}

export const deleteSubtask = ({ id }) => {
  return db.subtask.delete({
    where: { id },
  })
}

export const Subtask = {
  task: (_obj, { root }) =>
    db.subtask.findUnique({ where: { id: root.id } })
}
