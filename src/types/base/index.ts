import { z } from 'zod'

export const IdSchema = z.coerce.number().int().positive()
export const ByIdSchema = z.object({ id: IdSchema })

export const UUIDSchema = z.uuid().nonempty('Le UUID est obligatoire')
export const ByUUIDSchema = z.object({ id: UUIDSchema })
