import { FormAddOns, FormPersonal, FormSwimming,Form } from "@/components";
import Image from "next/image";

export default function Home() {
   return (
      <main >
         <Image
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
         />
         <Form />
      </main>
   );
}
