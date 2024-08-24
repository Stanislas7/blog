import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Layout from '@/components/layout'
import { blogConfig } from '@/utils/config'
import Providers from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: blogConfig.blogName,
  description: 'description',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  )
}