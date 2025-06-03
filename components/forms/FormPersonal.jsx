'use client'

import { useRef, useState } from 'react'
import { personal } from '@/fields'
import { Field } from '@/components'
import { createZodSchema } from '@/utils/zod'

export const FormPersonal = () => {
   const [values, setValues] = useState({})
   const [errors, setErrors] = useState({})
   const inputRefs = useRef({})

   const schema = createZodSchema(personal)

   const handleChange = (name, value) => {
      setValues(p => ({ ...p, [name]: value }))
      setErrors(p => ({ ...p, [name]: undefined }))
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      const result = schema.safeParse(values)

      if (!result?.success) {
         const fieldErrors = {}
         result?.error?.errors?.forEach(err => {
            if (err.path && err.path[0]) {
               const fieldName = err.path[0]
               fieldErrors[fieldName] = err.message
            }
         })
         setErrors(fieldErrors)

         const firstErrorField = result?.error?.errors[0]?.path?.[0]
         if (firstErrorField && inputRefs.current[firstErrorField]) {
            inputRefs.current[firstErrorField].focus()
         }

      } else {
         setErrors({})
         console.log(values)
      }
   }

   return (
      <form onSubmit={handleSubmit}>
         {
            personal.map((field) => <Field
               key={field.id}
               field={{ ...field, errors, values, inputRefs, handleChange }}
            />
            )
         }
         <button  type="submit">submit</button>
      </form>
   )
}
