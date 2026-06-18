'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import PageTransitionWrapper from '@/components/PageTransitionWrapper'
import PagePaddingWrapper from '@/components/PagePaddingWrapper'

export default function LayoutProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isStudio = pathname?.startsWith('/studio')

  if (isStudio) {
    return <main className="min-h-screen">{children}</main>
  }

  return (
    <>
      <PageTransitionWrapper />
      <Header />
      <PagePaddingWrapper>
        <main className="flex-grow">
          {children}
        </main>
      </PagePaddingWrapper>
      <FloatingWhatsApp />
      <Footer />
    </>
  )
}
