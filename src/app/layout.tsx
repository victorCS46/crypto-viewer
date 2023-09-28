import './globals.css'
import { Suspense } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import SearchAppBar from './common/components/NavBar/Navbar'
import Loading from './loading'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Crypto Viewer',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SearchAppBar/>
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
      </body>
    </html>
  )
}
