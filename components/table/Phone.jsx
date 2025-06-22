import React from 'react'

export const Phone = ({ row, header }) => {
   return (
      <a
         className='phone'
         href={`tel:${row[header.name]}`}
         title={'call me'}>
         {row[header.name]}
      </a>
   )
}
