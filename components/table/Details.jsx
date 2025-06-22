'use client'

import { useState } from 'react'
import { svgs } from '../../assets'
import { useForm } from '@/hooks'
import { DIALOG_FIELDS } from '@/data'
import { useRouter } from 'next/navigation'


export const Details = ({ row, header }) => {

   const { isValuesChanged, values, handleChange } = useForm(row)

   const [open, setOpen] = useState(false)
   const router = useRouter()
   const handleSave = async () => {
      const res = await fetch(`/api/campers/${values.id}`, {
         method: 'PUT',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(values),
      })

      const result = await res.json()
      console.log('Save result:', result);

      if (result.success) {
         router.refresh() // ✅ This triggers a server component re-render
         setOpen(false)   // ✅ Close dialog if save succeeded
      } else {
         console.error('Save failed:', result.error)
      }
   }

   return (
      <>

         <button onClick={() => setOpen(true)} className='details'>
            {svgs.details}
         </button>
         {
            open &&
            <div className='dialog' onClick={() => setOpen(false)} >
               <div className='content' onClick={(e) => e.stopPropagation()}>
                  {isValuesChanged && <button onClick={handleSave} >{svgs.save}</button>}

                  <div className="actions">
                     <button title='Close' className='close' onClick={() => setOpen(false)}>{svgs.clear}</button>

                  </div>
                  <div className="fields">

                     {
                        DIALOG_FIELDS.map(field => {
                           const { label, id, element, name, options, type } = field
                           return <div className="field" key={id}>
                              <label htmlFor={id}>{label}</label>
                              <Inputs
                                 label={label}
                                 value={values[name]}
                                 name={name}
                                 id={id}
                                 element={element}
                                 handleChange={handleChange}
                                 options={options}
                                 type={type}
                              />
                           </div>
                        }
                        )
                     }
                  </div>
               </div>
            </div>
         }
      </>
   )
}

const Inputs = ({ element, value, name, handleChange, options, label, type }) => {
   console.log(element);

   switch (element) {
      case 'input':
         return (
            <input
               type={type || 'text'}
               name={name}
               value={value || ''}
               onChange={(e) => handleChange(name, e.target.value)}
            />
         )
      case 'select':
         return (
            <select
               name={name}
               value={value || ''}
               onChange={(e) => handleChange(name, e.target.value)}
            >
               {options.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
               ))}
            </select>
         )
      default:
         return null
   }
}