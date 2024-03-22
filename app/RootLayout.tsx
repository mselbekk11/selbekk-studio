import { space } from './layout';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={space.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
