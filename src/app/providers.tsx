'use client'

import { ThemeProvider } from 'next-themes'
import { blogConfig } from '@/utils/config'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme={blogConfig.defaultTheme}>
      {children}
    </ThemeProvider>
  )
}