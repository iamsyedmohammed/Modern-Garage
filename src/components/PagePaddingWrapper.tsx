'use client'

import { usePathname } from 'next/navigation'

export default function PagePaddingWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isStudio = pathname.startsWith('/studio')

  return (
    <div className={isStudio ? '' : 'pt-[84px] sm:pt-[96px]'}>
      {children}
    </div>
  )
}
