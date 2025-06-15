import { ChoiceCheckBox, Counter, DynamicGroups, Input, Select, Signature, TextArea } from '@/components'


export const Field = ({ field }) => {

   const { label, id, error, element, required } = field

   return (
      <div key={id} className={`field ${element}`}>
         <label htmlFor={id}>{label}{required ? '*' : ''}</label>
         {InputElement(field)}
         <p className='error'>{error}</p>
      </div>
   )
}

function InputElement(field) {
   const { element, id, name, type, options, handleChange, values, inputRefs, children, error } = field

   switch (element) {
      case 'counter':
         return (
            <Counter
               name={name}
               id={id}
               handleChange={handleChange}
               ref={el => inputRefs.current[name] = el}
               value={values[name]}
            />
         )
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
            <Signature
               handleChange={handleChange}
               name={name}
               value={values[name]}
            />
         )
      case 'textarea': return (
         <TextArea
            name={name}
            id={id}
            type={type}
            handleChange={handleChange}
            ref={el => inputRefs.current[name] = el}
            value={values[name]}
         />
      )
      case 'choice-checkbox': return (
         <ChoiceCheckBox
            options={options}
            name={name}
            id={id}
            type={type}
            handleChange={handleChange}
            ref={el => inputRefs.current[name] = el}
            value={values[name]}
         />
      )

      case 'dynamic-groups': return (
         <DynamicGroups
            name={name}
            id={id}
            handleChange={handleChange}
            value={values[name]}
            children={children}
            error={error}
            inputRefs={inputRefs}
         />
      )
   }
}



