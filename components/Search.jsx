'use client'

import { useState } from 'react'
import { svgs } from '../assets'
import { useDebounce, useGlobalState } from '../hooks'
import { ACTIONS } from '../state'

export const Search = () => {
   const { page, dispatch } = useGlobalState()
   const [isLoading, setIsLoading] = useState(false)

   const [value, setValue] = useState('')


   useDebounce(() => {
      dispatch({ type: ACTIONS.SET, entity: 'search', payload: value.toLowerCase() })
      setIsLoading(false)
   }, 500, [value])

   const handleChange = (e) => {
      setIsLoading(true)
      setValue(e.target.value)
   }

   return (
      <div className='search'>
         <input id={`search${page}`} value={value || ''} onChange={handleChange} placeholder={page} />
         <label htmlFor={`search${page}`} onClick={() => setValue('')}>
            {!isLoading && value && <button onClick={() => setValue('')} className='clear-search'>{svgs.clearBlack}</button>}
            {!isLoading && !value && svgs.search}
            {isLoading && <div id='searchLoader'></div>}
         </label>
      </div>
   )
}
