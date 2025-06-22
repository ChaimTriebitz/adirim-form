'use client';

import { Form } from '@/components';
import Image from 'next/image';
import { useState } from 'react';


export default function Home() {

   const [step, setStep] = useState('camper');

   return (
      <main >
         <Image src="/logo.jpg" alt="logo" width={100} height={100}
            style={{
               width: '100%',
               height: '100px',
               objectFit: 'contain',
               marginTop:'1em',
            }}
            priority
            unoptimized
            quality={100}
            loading='eager'
            placeholder='blur'
            blurDataURL='/logo.jpg'

         />
          <h3>Please fill out the form below to register your child for Camp Adirim 2025 </h3>

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

         <Form
            step={step}
            setStep={setStep}
         />

         {
            step === 'swimming' &&
            <div className="swimming">
               <h3>Every camper is required by law to have their own permission form.</h3>
               <h3>Please ensure that this form gets <u><b>completely</b></u> filled out for EACH child!</h3>
            </div>
         }

         {
            step === 'camper' &&
            <div className="camper">
               <h3><u>REMINDER:</u></h3>
               <h3> Registration closes on כ"ה תמוז - July <sup>31</sup></h3>
               <h3>or when space runs out!</h3>
               <h4>Each child must have his <u>own</u> printed registration form!</h4>
               <h4>Please feel free to make copies of this form as needed.</h4>
            </div>
         }
         <br />
      </main>
   );
}
