import './globals.css'

export const metadata = {
  title: 'Payback',
  description: 'החזרי מס בקליק',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  )
}