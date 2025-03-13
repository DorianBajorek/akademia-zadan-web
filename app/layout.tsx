import { Head } from 'next/document';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2838302537006263"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <body>{children}</body>
    </html>
  );
}
