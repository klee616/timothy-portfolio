import type { Metadata } from "next";
import { Geist, Geist_Mono, Sarabun } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'
const eleanor = localFont({ src: './fonts/eleanor/Eleanor.ttf', variable: '--font-eleanor' })
const heavitas = localFont({src: './fonts/heavitas/Heavitas.ttf', variable: '--font-heavitas'})
const helvetica = localFont({
  src: [
    {path:'./fonts/helvetica/Helvetica.ttf',  weight:'400', style:'normal'},
    {path:'./fonts/helvetica/Helvetica-Bold.ttf',  weight:'700', style:'normal'},
    {path:'./fonts/helvetica/Helvetica-BoldOblique.ttf',  weight:'700', style:'oblique'},
    {path:'./fonts/helvetica/Helvetica-CE-Bold.otf',  weight:'800', style:'normal'},
    // {path:'./fonts/helvetica/Helvetica-light.ttf',  weight:'300', style:'normal'},
    {path:'./fonts/helvetica/Helvetica-Oblique.ttf',  weight:'400', style:'oblique'},
  ], variable: '--font-helvetica'
});



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const sarabun = Sarabun({
  subsets: ["latin"],
  weight: ["400", "700"], // Choose desired weights
});


export const metadata: Metadata = {
  title: "Timothy Lee's portfolio ",
  description: "Timothy Lee's portfolio",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
    
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${eleanor.variable} ${helvetica.variable} ${heavitas.variable} antialiased  bg-[var(--primary-color)]`}
      >
        {children}
      </body>
    </html>
  );
}
