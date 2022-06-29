import { db } from 'src/lib/db'

export const metadatas = () => {
  return db.metadata.findMany()
}

export const metadata = ({ id }) => {
  return db.metadata.findUnique({
    where: { id },
  })
}

export const createMetadata = ({ input }) => {
  return db.metadata.create({
    data: input,
  })
}

export const updateMetadata = ({ id, input }) => {
  return db.metadata.update({
    data: input,
    where: { id },
  })
}

export const deleteMetadata = ({ id }) => {
  return db.metadata.delete({
    where: { id },
  })
}
