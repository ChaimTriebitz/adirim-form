import React from 'react'

export const Email = ({ row, header }) => {
   const value = row[header.name] || ''
   return (
      <a
         className='email'
         href={`mailto:${value}`}
         title={'email me'}>
         {value}
      </a>
   )
}
