import { z } from 'zod'

export const createZodSchema = (fields) => {
   const shape= {}

   fields.forEach((field) => {
      let schema

      if (field.element === 'input') {
         switch (field.type) {
            case 'text':
            case 'email':
               schema = z.string().min(1, `${field.label} is required`)
               break
            case 'number':
               schema = z
                  .preprocess(val => (val === '' ? undefined : Number(val)), z.number({ invalid_type_error: `${field.label} must be a number` }))
                  .refine(val => !isNaN(val ), { message: `${field.label} must be a valid number` })
               break
            case 'datetime-local':
               schema = z.string().min(1, `${field.label} is required`) // Could also validate date string format
               break
            default:
               schema = z.string()
         }
      } else if (field.element === 'textarea') {
         schema = z.string().optional()
      } else if (field.element === 'select') {
         const options = (field).options?.map(opt => opt.name)
         schema = z.enum(options, { errorMap: () => ({ message: `${field.label} is required` }) })
      } else if (field.element === 'signature') {
         schema = z.string().min(1, `${field.label} is required`)
      } else {
         schema = z.string().optional()
      }

      if (field.name) {
         shape[field.name] = schema
      }
   })

   return z.object(shape)
}
