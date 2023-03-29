export const metadata = {
    title: 'Bills app Forms',
    description: 'forms page',
  }
  
  export default function FormsLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
        <h1>Формы для заполнения</h1>
        {children}
      </>
    )
  }
  