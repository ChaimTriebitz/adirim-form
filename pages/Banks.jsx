// import React, { useState, useEffect } from 'react';
// import { ActionsBar, Table } from '../cmps';
// import { TABLE_HEADERS, URLS } from '../data';
// import { useGlobalState } from '../hooks';
// import { get } from '../controllers';
// import { ACTIONS } from '../state';
// import { toastMsg } from '../functions';


// export const Banks = () => {
//    const { filters, dispatch, banks } = useGlobalState()

//    const filteredRows = banks?.filter(row => (row.lender === filters.category || !filters.category))

//    useEffect(() => {
//       get.data('banks')
//       .then((res) => dispatch({ type: ACTIONS.SET, entity: 'banks', payload: res.data }))
//       .catch((error) =>toastMsg.error(error.response.data.error))
//       .finally(() => dispatch({ type: ACTIONS.SET, entity: 'isDataLoading', payload: false }))
//    }, []);

//    return (
//       <main className='page banks'>
//          <ActionsBar />
//          <Table headers={TABLE_HEADERS.banks} rows={filteredRows} />
//       </main>
//    );
// };

