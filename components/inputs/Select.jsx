export const Select = ({ value, name, options, id, ref, handleChange }) => {

   return (
      <select
         ref={ref}
         name={name}
         id={id}
         onChange={(e) => handleChange(e.target.name, e.target.value)}
         value={value || ''}
      >
         <option disabled value=''>Select an option</option>
         {
            options.map(option =>
               <option
                  key={option.id}
                  value={option.name}
               >
                  {option.name}
               </option>
            )
         }
      </select>
   )
}

