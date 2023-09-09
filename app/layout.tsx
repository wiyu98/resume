import './globals.css'
import type { Metadata } from 'next'
import { EB_Garamond } from 'next/font/google'

const fontGaramond = EB_Garamond({ subsets: ['latin'], weight: '400' })
const backgroundColor = 'bg-sand'
const textColor = 'text-charcoal'

export const metadata: Metadata = {
  title: 'Wilson Yu | Résumé',
  description: 'This is Wilson\'s résumé, please hire me!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={fontGaramond.className + ' ' + backgroundColor + ' ' + textColor}>{children}</body>
    </html>
  )
}
