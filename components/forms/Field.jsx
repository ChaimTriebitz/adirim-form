import { Input, Select, Signature, TextArea } from '@/components'
const InputElement = (field) => {
   const { element, id, name, type, options, handleChange, values, inputRefs } = field

   switch (element) {
      case 'input':
         return (
            <Input
               name={name}
               id={id}
               type={type}
               handleChange={handleChange}
               ref={el => inputRefs.current[name] = el}
               value={values[name]}
            />
         )
      case 'select':
         return (
            <Select
               options={options}
               name={name}
               id={id}
               value={values[name]}
               handleChange={handleChange}
               ref={el => inputRefs.current[name] = el}
            />
         )
      case 'signature':
         return (
            <Signature handleChange={handleChange} />
         )
         case 'textarea':      return (
            <TextArea
               name={name}
               id={id}
               type={type}
               handleChange={handleChange}
               ref={el => inputRefs.current[name] = el}
               value={values[name]}
            />
         )
   }
}
export const Field = ({ field }) => {
   const { label, id, name, errors } = field
   return (
      <div key={id} className="input">
         <label htmlFor={String(id)}>{label}</label>
         {InputElement(field)}
         <p className='error'>{errors[name]}</p>
      </div>
   )
}



