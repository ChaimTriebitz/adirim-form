'use client'
import { useMemo, useRef, useState } from 'react'
import { Field } from '@/components'
import { createZodSchema } from '@/utils'
import { addOns, personal, swimming } from '@/fields'

export const Form = ({ step, setStep }) => {
   const initForms = [
      {
         index: 0,
         active: true,
         name: 'personal',
         fields: personal,
         values: {},
         errors: {}
      },
      {
         index: 1,
         active: false,
         name: 'swimming',
         fields: swimming,
         values: {},
         errors: {}
      },
      {
         index: 2,
         active: false,
         name: 'addOns',
         fields: addOns,
         values: {},
         errors: {}
      },
   ]
   const [forms, setForms] = useState(initForms)

   const inputRefs = useRef({})

   const activeForm = useMemo(() => {
      return forms.find(f => f.name === step)
   }, [forms, step])

   const handleChange = (name, value) => {
      setForms(prevForms =>
         prevForms.map(form =>
            form.active
               ? {
                  ...form,
                  values: { ...form.values, [name]: value },
                  errors: { ...form.errors, [name]: undefined }, // 👈 Clear error
               }
               : form
         )
      )
   }


   const handleStep = (e) => {
      const result = validate(activeForm.fields, activeForm.values)
      if (result.error) {
         inputRefs?.current?.[result?.error?.issues?.[0]?.path?.[0]]?.focus()
         setForms(prevForms => prevForms.map(form => form.active ? (
            {
               ...form,
               errors: result?.error?.formErrors?.fieldErrors || {}
            }
         ) : form
         ))
         return
      }

      setStep(forms[+e.target.value + activeForm.index]?.name)
   }

   const validate = (fields, values) => {
      const Schema = createZodSchema(fields)
      const result = Schema.safeParse(values)
      return result
   }

   const handleSubmit = async (e) => {
      e.preventDefault()

      try {
         const res = await fetch('/api/add-ons', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
         })

         const data = await res.json()
         if (data.success) {
            alert('Data saved!')
         } else {
            alert('Failed to save data.')
         }
      } catch (error) {
         console.error('Submit error:', error)
         alert('Something went wrong.')
      }
   }

   return (
      <form onSubmit={handleSubmit} >
         {
            activeForm.fields.map((field) => <Field
               key={field.id}
               field={{ ...field, error: activeForm?.errors?.[field.name]?.[0], values: activeForm.values, inputRefs, handleChange }}
            />
            )
         }
         <div className="buttons">
            <button value={-1} disabled={activeForm.index === 0} onClick={handleStep} type="button">Back</button>
            <button value={1} disabled={activeForm.index === forms.length - 1} onClick={handleStep} type="button">Next</button>
         </div>
      </form>
   )
}
