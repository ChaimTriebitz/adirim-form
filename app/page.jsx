'use client';

import { useState } from 'react';


export default function Home() {

   const [step, setStep] = useState('personal');

   return (
      <main >
         <h1>Step: {step}</h1>

         {
            step === 'swimming' &&
            <div className="swimming">
               <h2><u>PERMISSION FORM</u></h2>
               <h4><u>Adirim 2025</u></h4>
            </div>
         }

         {
         step ==='addOns' &&
            <div className="addOns">
               <h2><u>T-SHIRT ORDER FORM</u></h2>
               <h4>Dear Parents, עמו"ש</h4>
               <h4>If you would like to order a Camp Adirim T-shirt for your son{'(s)'} please fill out the following form and send it back with</h4>
            </div>
         }

         {/* <Form
            step={step}
            setStep={setStep}
         /> */}

         {
            step === 'swimming' &&
            <div className="swimming">
               <h3>Every camper is required by law to have their own permission form.</h3>
               <h3>Please ensure that this form gets <u><b>completely</b></u> filled out for EACH child!</h3>
            </div>
         }

         {
            step === 'personal' &&
            <div className="personal">
               <h2><u>REMINDER:</u> Registration closes on כ"ה תמוז - July <sup>31</sup> or when space runs out!</h2>
               <h3>Each child must have his <u>own</u> printed registration form!</h3>
               <h3>Please feel free to make copies of this form as needed.</h3>
            </div>
         }
      </main>
   );
}
