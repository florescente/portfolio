import './globals.css'
import { Inter } from 'next/font/google'
import { type Metadata } from 'next'
import Header from '../components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Sarah's Portfolio",
  description: 'Sobre Sarah',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
