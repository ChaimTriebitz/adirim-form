

export const Input = ({ type = 'text', name, id, handleChange }) => {
   
   return (
      <input
         id={String(id)}
         name={name}
         type={type}
         onChange={(e)=>handleChange(e.target.name,e.target.value)}
      />
   )
}
