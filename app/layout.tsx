import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Thermo Nuclear Reactor o_o',
  description: 'Project template for swift loading speed',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
