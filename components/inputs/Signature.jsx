'use client';

import React, { useEffect, useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';

export const Signature = ({ handleChange, name, value }) => {
   const sigCanvasRef = useRef(null);

   useEffect(() => {
      if (value && sigCanvasRef.current) {
         sigCanvasRef.current.fromDataURL(value);
      }
   }, [value]);

   const clear = () => {
      sigCanvasRef.current.clear();
      handleChange(name, null)
   };

   const save = () => {
      if (!sigCanvasRef.current.isEmpty()) {
         const dataUrl = sigCanvasRef.current.toDataURL('image/png');
         handleChange(name, dataUrl)
      }
   };

   return (
      <div className='signature'>
         <SignatureCanvas
            penColor="black"
            // canvasProps={{
            //    width: 500,
            //    height: 200,
            //    className: 'signature-canvas',
            //    style: { border: '1px solid #ccc', borderRadius: '4px' }
            // }}
            ref={sigCanvasRef}
            onEnd={save}
         />
         <button type='button' onClick={clear}>Clear</button>
      </div>
   );
}
