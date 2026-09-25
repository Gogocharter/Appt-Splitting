import { createServerFn } from '@tanstack/react-start'
import { prisma } from '@/db'
import { EditCompteSchema } from '#/types/compte'

export const editCompte = createServerFn({ method: 'POST' })
  .validator(EditCompteSchema)
  .handler(async ({ data }) => {
    const user = await prisma.compte.update({
      where: { id: data.id },
      data: { name: data.name },
    })

    return { user }
  })
