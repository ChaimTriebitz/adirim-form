import { useEffect } from 'react'
import { useGlobalState } from '../hooks'
import { get } from '../controllers'
import { ACTIONS } from '../state'
import { ActionsBar, Table } from '../cmps'
import { TABLE_HEADERS } from '../data'
import { arrays, toastMsg } from '../functions'

export const Lenders = () => {

   const { dispatch, lenders, refreshCount, search, sort } = useGlobalState()
   const rows = arrays.sortBy(arrays.filterObjects(lenders, ['contact', 'lender'], search), sort.by, sort.dir)

   useEffect(() => {
      get.data('lenders')
         .then((res) => dispatch({ type: ACTIONS.SET, entity: 'lenders', payload: res.data }))
         .catch((error)=>toastMsg.error(error.response.data.error))
         .finally(() => dispatch({ type: ACTIONS.SET, entity: 'isDataLoading', payload: false }))
   }, [refreshCount])

   return (
      <main className='page lenders'>
         <ActionsBar />
         {/* <button className='btn' style={{ position: 'absolute',background:'black',zIndex:9099 }} onClick={insert}>insert lenders</button> */}
         <Table headers={TABLE_HEADERS.lenders} rows={rows} />
      </main>
   )
}
