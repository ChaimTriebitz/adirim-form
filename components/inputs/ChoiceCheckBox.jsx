'use client'

import { useEffect, useState } from 'react'

export const ChoiceCheckBox = ({ name, id, ref, options, handleChange }) => {
   const [checkedOption, setCheckedOption] = useState('')
   const handleCheck = (e) => {
      setCheckedOption(e.target.name)
   }

   useEffect(() => {
      handleChange(name, checkedOption)
   }, [checkedOption])

   return (
      <div className="choice-checkbox">
         {
            options.map(option =>
               <div className="option" key={option.id}>
                  <label htmlFor={option.id}>{option.label}</label>
                  <input
                     key={option.id}
                     id={option.id}
                     name={option.name}
                     type={'checkbox'}
                     onChange={handleCheck}
                     ref={ref}
                     checked={checkedOption === option.name}
                  />
               </div>

            )
         }
      </div>

   )
}