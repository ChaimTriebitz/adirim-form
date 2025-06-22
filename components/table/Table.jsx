'use client';

import { Cells } from '@/components';
import { arrays } from '@/functions';
import { useGlobalState } from '@/hooks';
// import { useGlobalState } from '../../hooks';
// import { SortHeader } from '..';

export const Table = ({ headers = [], rows = [] }) => {

   const { search } = useGlobalState()
   console.log(search);

   const filtered = arrays.filterObjects(rows, ['first_name'], search)
   const sorted = arrays.sortBy(filtered, 'first_name', 'desc');

   return (
      <div className="table-container">
         {/* {isDataLoading && < div className='loader' id='sandwatchloader' />} */}

         <table>
            <thead>
               <tr>
                  {
                     headers.map(header =>
                        <th key={header.label}>
                           <div className="th-container">
                              <p>{header.label}</p>
                              {/* {header.sort_by && <SortHeader header={header} />} */}
                           </div>
                        </th>
                     )
                  }
               </tr>
            </thead>
            <tbody>
               {
                  sorted.map((row) => (
                     <tr key={row._id || Math.random()}>
                        {
                           headers.map((header) =>
                              <td key={header.id} className={header.cell}>
                                 <span className='mobile-header'>{header.label}</span>
                                 <Cells header={header} row={row} />
                              </td>
                           )
                        }

                     </tr>
                  ))
               }
               {
                  !rows.length &&
                  <tr>
                     <td
                        className='no-match'
                        colSpan={100}
                     >
                        No matches found
                     </td>
                  </tr>
               }
            </tbody>
         </table>
      </div>
   )
}
