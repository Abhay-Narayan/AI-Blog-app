import './globals.css'
import {Open_Sans} from "next/font/google";
import Navbar from 'app/(shared)/Navbar';
import Footer from 'app/(shared)/Footer';
const OpenSans=Open_Sans({
  subsets:["latin"],
})

export const metadata = {
  title: 'Blog AI App',
  description: 'Blogs using AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={OpenSans.className} lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
