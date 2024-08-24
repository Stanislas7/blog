import React from 'react'
import Link from 'next/link'
import { blogConfig } from '@/utils/config'
import ThemeSwitcher from './ThemeSwitcher'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="py-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold">
            <Link href='/'>{blogConfig.blogName}</Link>
          </h1>
          <ThemeSwitcher />
        </header>
        <main>{children}</main>
      </div>
    </div>
  )
}