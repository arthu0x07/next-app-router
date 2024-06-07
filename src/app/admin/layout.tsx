export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      {children}
      <header> Painel de Admnistração </header>
    </div>
  )
}
