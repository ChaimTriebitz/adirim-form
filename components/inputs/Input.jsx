

export const Input = ({ value, type = 'text', name, id, ref, handleChange }) => {

   return (
      <input
         id={String(id)}
         name={name}
         type={type}
         onChange={(e) => handleChange(e.target.name, e.target.value)}
         ref={ref}
         value={value}
      />
   )
}
