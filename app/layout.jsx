import './globals.css'

export const metadata = {
  title: 'Ajesh S',
  description: 'Ajesh S portfolio in Next.Js-14',
  other: {
    'theme-color': '#a374ff',
    'color-scheme': 'dark only',
    'twitter:image': '/portfolio.webp',
    'twitter:card': 'summary_large_image',
    'og:url': 'https://ajesh-s.vercel.app/',
    'og:image': '/portfolio.webp',
    'og:type': 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
