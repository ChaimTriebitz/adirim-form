'use client';

import React, { useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';

export const Signature = ({ handleChange }) => {
   const sigCanvasRef = useRef(null);

   const clear = () => {
      sigCanvasRef.current.clear();
      handleChange('signature', null)
   };

   const save = () => {
      if (!sigCanvasRef.current.isEmpty()) {
         const dataUrl = sigCanvasRef.current.toDataURL('image/png');
         handleChange('signature', dataUrl)
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
