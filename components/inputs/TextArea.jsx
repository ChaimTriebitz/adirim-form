
export const TextArea = ({value, name, id, ref, handleChange }) => {

   return (
      <textarea
         id={String(id)}
         name={name}
         onChange={(e) => handleChange(e.target.name, e.target.value)}
         ref={ref}
         value={value}
         rows={4}
      />
   )
}