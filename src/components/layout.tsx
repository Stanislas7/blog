import React from 'react'
import Link from 'next/link'
import { getBlogConfig } from '@/utils/config'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const { blogName } = getBlogConfig()

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <header className="py-8">
        <h1 className="text-3xl font-bold">
          <Link href='/'>{blogName}</Link>
          </h1>
      </header>
      <main>{children}</main>
    </div>
  )
}