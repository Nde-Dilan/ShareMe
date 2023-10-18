import './globals.css'
import { Inter } from 'next/font/google'
import Provider  from '@components/Provider';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Share Me +',
  description: 'Discover the most beautifull pins that people out there want to share with you.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
        {children}
        </Provider>
      </body>
    </html>
  )
}
