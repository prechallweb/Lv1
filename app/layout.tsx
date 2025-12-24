import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "이화이언 클론",
  description: "bm/이화이언 friends/110 클론",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <header className="site-header">
          <div className="container header-inner">
            <Header />
          </div>
        </header>

        <main className="container" style={{ paddingTop: 20, paddingBottom: 28 }}>
          {children}
        </main>

        <footer className="footer">
          <div className="container">
            <Footer />
          </div>
        </footer>
      </body>
    </html>
  );
}
