import { z } from 'zod'

export const createZodSchema = (fields) => {
   const shape = {}

   fields.forEach((field) => {
      let baseSchema

      // STEP 1: Create base schema without required/optional logic
      if (field.element === 'input') {
         switch (field.type) {
            case 'text':
            case 'datetime-local':
               baseSchema = z.string()
               break

            case 'email':
               baseSchema = z.string().email(`${field.label} must be a valid email`)
               break

            case 'number':
               baseSchema = z.preprocess(
                  val => {
                     if (val === '' || val === null || val === undefined) return undefined
                     const num = Number(val)
                     return isNaN(num) ? val : num
                  },
                  z.number({
                     invalid_type_error: `${field.label} must be a number`,
                     required_error: `${field.label} is required`
                  })
               )
               break

            default:
               baseSchema = z.string()
         }
      } else if (field.element === 'textarea') {
         baseSchema = z.string()
      } else if (field.element === 'select') {
         const options = field.options?.map(opt => opt.name)
         baseSchema = z.enum(options, {
            errorMap: () => ({ message: `${field.label} is required` })
         })
      } else if (field.element === 'signature') {
         baseSchema = z.string()
      } else {
         baseSchema = z.string()
      }

      // STEP 2: Apply required/optional rule ONCE here
      let schema = baseSchema
      if (!field.required) {
         schema = schema.optional()
      } else if (
         baseSchema instanceof z.ZodString &&
         field.type !== 'email' // email already validates format
      ) {
         schema = schema.min(1, `${field.label} is required`)
      }

      if (field.name) {
         shape[field.name] = schema
      }
   })

   return z.object(shape)
}
