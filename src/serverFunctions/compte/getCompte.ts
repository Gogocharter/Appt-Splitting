import { createServerFn } from '@tanstack/react-start'
import { prisma } from '@/db'
import { ByIdSchema } from '#/types/base'

// Function to get a specific account by ID
export const getAccountById = createServerFn({ method: 'GET' })
  .validator(ByIdSchema)
  .handler(async ({ data }) => {
    const id = data.id

    // Fetch the account from the database using Prisma
    const account = await prisma.compte.findUnique({
      where: { id: Number(id) },
    })

    // Return the account or null if not found
    return { data: account }
  })
