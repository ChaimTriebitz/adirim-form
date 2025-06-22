import { useEffect, useState } from 'react'
import { svgs } from '../../assets'
import { useGlobalState, useUpdateEffect } from '../../hooks'
import { ACTIONS } from '../../state'

export const SortHeader = ({ header }) => {
   const { sort, dispatch } = useGlobalState()

   const { default_sort, sort_by } = header
   const [dir, setDir] = useState('')
   const [svg, setSvg] = useState(svgs.sorting)

   useEffect(() => {
      if (default_sort) dispatch({
         type: ACTIONS.SET,
         entity: 'sort',
         payload: { by: sort_by, dir: default_sort }
      })
   }, [])


   useUpdateEffect(() => {
      if (sort.by === sort_by) setDir(sort.dir)
      else setDir('')
   }, [sort])


   useUpdateEffect(() => {
      switch (dir) {
         case 'asc':
            setSvg(svgs.sortAlphabetAscending)
            break
         case 'desc':
            setSvg(svgs.sortAlphabetDescending)
            break
         default:
            setSvg(svgs.sorting)
      }
   }, [dir])



   const handleClick = () => {
      const newDir = dir === 'asc' ? 'desc' : dir === 'desc' ? '' : 'asc'
      setDir(newDir)
      dispatch({
         type: ACTIONS.SET,
         entity: 'sort',
         payload: { by: newDir ? sort_by : '', dir: newDir }
      })
   }

   return (
      <button className='sort-header' onClick={handleClick}>{svg}</button>
   )
}