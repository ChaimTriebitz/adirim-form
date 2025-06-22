'use client'


import { useEffect, useRef } from 'react';

export function useBlur(callback, element) {

   const ref = useRef(null);

   const handleBlur = (e) => {
      if (e.target.localName === element) {
         callback();
      } 
   };

   useEffect(() => {
      document.addEventListener('mousedown', handleBlur);
      return () => {
         document.removeEventListener('mousedown', handleBlur);
      };
   }, []);

   return ref;
}
