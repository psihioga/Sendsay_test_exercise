export const metadata = {
  title: 'Bills app Tables',
  description: 'tables page',
}

export default function TablesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <h1>Таблицы</h1>
      {children}
    </>
  )
}
