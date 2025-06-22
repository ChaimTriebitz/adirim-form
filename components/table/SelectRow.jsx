'use client'
import { useEffect, useState } from 'react'

export const SelectRow = ({ row }) => {
   const [value, setValue] = useState(false)

   useEffect(() => {

   }, [value])
   const handleSelectChange = (e) => {

   }
   return (
      <input
         className='select-row icon'
         type='checkbox'
         onChange={e => setValue(e.target.checked)}
         checked={value}
      />
   )
}

