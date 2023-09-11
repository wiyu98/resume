import './globals.css'
import type { Metadata } from 'next'
import { Kanit } from 'next/font/google'
import Sidebar from './sidebar'

const fontGaramond = Kanit({ subsets: ['latin'], weight: '300' })
const backgroundColor = 'bg-charcoal'
const textColor = 'text-sand'

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
      <body className={
        fontGaramond.className + ' ' + backgroundColor + ' ' + textColor
      }>
        <Sidebar />

        {/* div to offset the sidebar */}
        <div className="p-16 sm:ml-96">
          {children}
        </div>
      </body>
    </html>
  )
}
