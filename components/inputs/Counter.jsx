import React from 'react'

export const Counter = ({ name, id, handleChange, value = 0, ref }) => {
   const increment = () => {
      handleChange(name, value + 1)
   }

   const decrement = () => {
      if (value > 0) {
         handleChange(name, value - 1)
      }
   }

   return (
      <div className="counter" ref={ref}>
         <button
            type="button"
            onClick={decrement}
            disabled={value <= 0}
         >
            -
         </button>
         <span>{value}</span>
         <button
            type="button"
            onClick={increment}
         >
            +
         </button>
      </div>
   )
}
