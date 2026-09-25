import { createServerFn } from '@tanstack/react-start'
import { prisma } from '@/db'
import { EditCompteSchema } from '#/types/compte'

export const createCompte = createServerFn({ method: 'POST' })
  .validator(EditCompteSchema)
  .handler(async ({ data }) => {
    const name = data.name

    const user = await prisma.compte.create({
      data: { name },
    })

    return { user }
  })
