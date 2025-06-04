import { ChoiceCheckBox, DynamicGroups, Input, Select, Signature, TextArea } from '@/components'
const InputElement = (field) => {
   const { element, id, name, type, options, handleChange, values, inputRefs, children, errors } = field

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
            errors={errors}
            inputRefs={inputRefs}
         />
      )
   }
}

export const Field = ({ field }) => {

   const { label, id, name, errors, element } = field
   return (
      <div key={id} className={`field ${element}`}>
         <label htmlFor={String(id)}>{label}</label>
         {InputElement(field)}
         <p className='error'>{errors?.[name]}</p>
      </div>
   )
}



