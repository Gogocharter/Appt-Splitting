import { z } from 'zod'

export const EditCompteSchema = z.object({
  id: z.number().int().positive(),
  name: z
    .string()
    .trim()
    .nonempty('Le nom est obligatoire')
    .min(1, 'Le nom est obligatoire')
    .max(255, 'Le nom ne peut pas dépasser 255 caractères'),
})

export type EditCompte = z.infer<typeof EditCompteSchema>
