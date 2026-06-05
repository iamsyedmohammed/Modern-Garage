'use client'

import dynamic from 'next/dynamic'
import config from '../../../../sanity.config'

// Disable SSR for the Sanity Studio component as it relies heavily on browser APIs (e.g. window, document)
const NextStudio = dynamic(
  () => import('next-sanity/studio').then((mod) => mod.NextStudio),
  { ssr: false }
)

export default function StudioPage() {
  return <NextStudio config={config} />
}
