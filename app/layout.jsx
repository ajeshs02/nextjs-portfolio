import './globals.css'

export const metadata = {
  title: 'Ajesh S',
  description: 'Ajesh S portfolio in Next.Js-14',
  other: {
    'theme-color': '#2c1250',
    'color-scheme': 'dark only',
    'twitter:image':
      'https://cdn.sanity.io/images/eivawakz/production/fd5d6ead28ca8974bf09ca61827ee5ba275990f7-1920x1080.webp',
    'twitter:card': 'summary_large_image',
    'og:url': 'https://next-js-portfolio-phi-eight.vercel.app/',
    'og:image':
      'https://cdn.sanity.io/images/eivawakz/production/fd5d6ead28ca8974bf09ca61827ee5ba275990f7-1920x1080.webp',
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
