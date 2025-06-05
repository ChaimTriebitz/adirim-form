'use client'
import React, { useMemo, useState } from 'react'
import { Field } from '..'

export const DynamicGroups = ({ values, name, id, inputRefs, handleChange, children, error, }) => {
   const initGroup = useMemo(() => {
      return children.map(({ name, id }) => ({ name, id, value: undefined }))
   }, [children])


   const [groups, setGroups] = useState([{ index: 1, fields: initGroup }])

   const addGroup = () => {
      setGroups(p => [...p, { index: p.length + 1, fields: initGroup }])
   }


   return (
      <div className='dynamic-groups'>
         {
            groups.map(group =>
               <div className="group" key={group.index}>
                  {
                     children.map(field =>
                        <Field key={field.id} field={{ ...field, handleChange, values: groups, inputRefs }} />
                     )
                  }
               </div>
            )
         }
         <button onClick={addGroup}>Add Group</button>
      </div>
   )
}
