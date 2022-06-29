import {
  metadatas,
  metadata,
  createMetadata,
  updateMetadata,
  deleteMetadata,
} from './metadatas'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('metadatas', () => {
  scenario('returns all metadatas', async (scenario) => {
    const result = await metadatas()

    expect(result.length).toEqual(Object.keys(scenario.metadata).length)
  })

  scenario('returns a single metadata', async (scenario) => {
    const result = await metadata({ id: scenario.metadata.one.id })

    expect(result).toEqual(scenario.metadata.one)
  })

  scenario('creates a metadata', async () => {
    const result = await createMetadata({
      input: { board_name: 'String', user_name: 'String' },
    })

    expect(result.board_name).toEqual('String')
    expect(result.user_name).toEqual('String')
  })

  scenario('updates a metadata', async (scenario) => {
    const original = await metadata({ id: scenario.metadata.one.id })
    const result = await updateMetadata({
      id: original.id,
      input: { board_name: 'String2' },
    })

    expect(result.board_name).toEqual('String2')
  })

  scenario('deletes a metadata', async (scenario) => {
    const original = await deleteMetadata({ id: scenario.metadata.one.id })
    const result = await metadata({ id: original.id })

    expect(result).toEqual(null)
  })
})
