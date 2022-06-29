import {
  subtasks,
  subtask,
  createSubtask,
  updateSubtask,
  deleteSubtask,
} from './subtasks'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('subtasks', () => {
  scenario('returns all subtasks', async (scenario) => {
    const result = await subtasks()

    expect(result.length).toEqual(Object.keys(scenario.subtask).length)
  })

  scenario('returns a single subtask', async (scenario) => {
    const result = await subtask({ id: scenario.subtask.one.id })

    expect(result).toEqual(scenario.subtask.one)
  })

  scenario('creates a subtask', async () => {
    const result = await createSubtask({
      input: { title: 'String' },
    })

    expect(result.title).toEqual('String')
  })

  scenario('updates a subtask', async (scenario) => {
    const original = await subtask({ id: scenario.subtask.one.id })
    const result = await updateSubtask({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a subtask', async (scenario) => {
    const original = await deleteSubtask({ id: scenario.subtask.one.id })
    const result = await subtask({ id: original.id })

    expect(result).toEqual(null)
  })
})
