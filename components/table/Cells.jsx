import { Date, Remove, SelectRow,  Details, MultiCell, Phone, Email, Notes } from '..'
import { Text } from './Text';

export const Cells = ({ row, header }) => {
   
   switch (header.cell) {
      case 'multicell': return <MultiCell row={row} header={header} />
      case 'remove': return <Remove row={row} header={header} />
      case 'details': return <Details row={row} header={header} />
      case 'select': return <SelectRow row={row} header={header} />
      case 'phone': return <Phone row={row} header={header} />
      case 'email': return <Email row={row} header={header} />
      // case 'text': return <Text row={row} header={header} />
      // case 'date': return <Date row={row} header={header} />
      // case 'notes': return <Notes row={row} header={header} />
      default: return <Text row={row} header={header} />
   }
}