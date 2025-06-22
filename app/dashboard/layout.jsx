import { ActionsBar } from '@/components'
import React from 'react'

export default function layout({ children }) {
   return (
      <div>
         <ActionsBar />
         {children}
      </div>
   )
}
