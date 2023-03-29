import './globals.css'
import Header from './Header/page'


export const metadata = {
  title: 'Bills app',
  description: 'produced by psihioga',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header></Header>
        {children}
      </body>      
    </html>
  )
}
