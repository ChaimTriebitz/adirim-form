import { Cells } from './Cells'


export const MultiCell = ({ row, header }) => {

   return (
      <div className='multi-cell'>
         {
            header.headers.map((header, i) =>
               <Cells
                  key={i}
                  row={row}
                  header={header}
               />
            )
         }
      </div>
   )
}
