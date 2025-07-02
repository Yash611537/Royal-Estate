import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Royal Estates - Luxury Real Estate',
  description: 'Discover the finest luxury properties with Royal Estates. Premium real estate services for discerning clients.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-royal-cream text-royal-charcoal">
        {children}
      </body>
    </html>
  )
}