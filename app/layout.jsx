import { Geist, Geist_Mono } from "next/font/google";
import '@/styles/index.scss'

const geistSans = Geist({
   variable: "--font-geist-sans",
   subsets: ["latin"],
});

const geistMono = Geist_Mono({
   variable: "--font-geist-mono",
   subsets: ["latin"],
});

export const metadata = {
   title: "Adirim-Form",
   description: "Adirim Registration Form",
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
            {children}
         </body>
      </html>
   );
}
