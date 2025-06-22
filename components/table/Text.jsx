'use client';

import React from 'react'

export const Text = ({ header, row }) => {
   console.log('Text cell', header, row);

   return (
      <p>{row[header.name]}</p>
   )
}
