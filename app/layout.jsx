import './globals.css'

export const metadata = {
  title: 'Ajesh S',
  description: 'Ajesh S portfolio in Next.Js-14',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
