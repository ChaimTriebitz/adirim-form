'use client'

import { useState } from 'react'
import { personal } from '@/fields'
import { Input } from '../inputs/Input'
import { createZodSchema } from '@/utils/zod'

export const FormPersonal = () => {
   const [values, setValues] = useState({})
   const [errors, setErrors] = useState({})

   const schema = createZodSchema(personal)

   const handleChange = (name, value) => {
      setValues(p => ({ ...p, [name]: value }))
      setErrors(p => ({ ...p, [name]: undefined })) // Clear error on change
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      const result = schema.safeParse(values)
      if (!result.success) {
         // Map Zod errors to field names
         const fieldErrors = {}
         result.error.errors.forEach(err => {
            if (err.path && err.path[0]) {
               fieldErrors[err.path[0]] = err.message
            }
         })
         setErrors(fieldErrors)
      } else {
         setErrors({})
         console.log(values)
         // ...submit logic
      }
      console.log(values);
      
   }

   return (
      <form onSubmit={handleSubmit}>
         {
            personal.map((field) => {
               const { label, element, id, name, type } = field
               if (element === 'input') return (
                  <div key={id} className="input">
                     <label htmlFor={String(id)}>{label}</label>
                     <Input
                        name={name}
                        id={id}
                        type={type}
                        handleChange={handleChange}
                     />
                     <p style={{ color: 'red' }}>{errors[name]}</p>
                  </div>
               )
            })
         }
         <button type="submit">submit</button>
      </form>
   )
}