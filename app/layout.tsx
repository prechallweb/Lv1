import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '이화이언',
  description: '이화이언 클론 프로젝트',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body data-copy-guard="on">
        {children}
      </body>
    </html>
  );
}
