'use client'
import { useMemo, useRef, useState } from 'react'
import { Field } from '@/components'
import { createZodSchema } from '@/utils'
import { addOns, personal, swimming } from '@/fields'

export const Form = ({ step, setStep }) => {
   const initForms = [
      {
         index: 0,
         name: 'personal',
         fields: personal,
         values: {},
         errors: {}
      },
      {
         index: 1,
         name: 'swimming',
         fields: swimming,
         values: {},
         errors: {}
      },
      {
         index: 2,
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
   console.log(forms);

   const handleChange = (name, value) => {
      setForms(prevForms =>
         prevForms.map(form =>
            form.name === activeForm.name
               ? {
                  ...form,
                  values: { ...form.values, [name]: value },
                  errors: { ...form.errors, [name]: undefined },
               }
               : form
         )
      )
   }


   const handleStep = (e) => {
      const result = validate(activeForm.fields, activeForm.values)
      // if (result.error) {
      //    inputRefs?.current?.[result?.error?.issues?.[0]?.path?.[0]]?.focus()
      //    setForms(prevForms => prevForms.map(form => form.name === activeForm.name ? (
      //       {
      //          ...form,
      //          errors: result?.error?.formErrors?.fieldErrors || {}
      //       }
      //    ) : form
      //    ))
      //    return
      // }

      setStep(forms[+e.target.value + activeForm.index]?.name)
   }

   const validate = (fields, values) => {
      const Schema = createZodSchema(fields)
      const result = Schema.safeParse(values)
      return result
   }

   const handleSubmit = async (e) => {
      e.preventDefault()
      const combinedValues = forms.reduce((acc, form) => {
         acc[form.name] = form.values
         return acc
      }, {})




      try {
         const res = await fetch('/api/submit-form', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(combinedValues),
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
         {step === 'addOns' && <button type="submit">Submit</button>}
      </form>
   )
}
