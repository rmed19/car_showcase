import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Barter-Buddy: Revolutionize Your Trading Experience',
  description: 'Barter-Buddy - the innovative app that transforms the way you trade. Discover a world of cashless exchanges with our user-friendly platform. Join our community of savvy swappers and embrace the smarter, greener way to trade. Perfect for those seeking sustainable, economical alternatives in everyday transactions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang='en'>
      <body className='relative'>
      <Navbar />
      {children}
      <Footer />
      </body>
      </html>
  )
}
