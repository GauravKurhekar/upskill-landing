export const metadata = {
  title: 'Sanity Studio',
  description: 'Content Management for UpSkill Academy',
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
