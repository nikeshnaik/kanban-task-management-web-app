import { db } from 'src/lib/db'

export const tasks = ({board_name, status}) => {
  return db.task.findMany({ where: {
    board_name: board_name,
    status: status
  }
  })
}

export const task = ({ id }) => {
  return db.task.findUnique({
    where: { id }
    }
  )
}

export const createTask = ({ input }) => {
  return db.task.create({
    data: input,
  })
}

export const updateTask = ({ id, input }) => {
  return db.task.update({
    data: input,
    where: { id },
  })
}

export const deleteTask = ({ id }) => {
  return db.task.delete({
    where: { id },
  })
}

export const Task = {
  subtasks: (_obj, { root }) => db.task.findUnique({where: {id: root.id}}).Subtask({where: {taskId: root.id}}),
  }

