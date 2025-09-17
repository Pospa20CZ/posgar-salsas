import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import NavLink from "./components/NavLink"; // uprav cestu podle struktury
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PosGar Salsas",
  description: "Online shop with handcrafted sauces",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header style={{padding: '2rem 0', textAlign: 'center', background: '#f8f8f8', borderBottom: '1px solid #eee'}}>
          <h1 style={{margin: 0, fontSize: '2.5rem'}}>PosGar Salsas</h1>
          <p style={{margin: 0, fontSize: '1.2rem', color: '#666'}}>Sauce e-shop</p>

          <nav style={{marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '2rem'}}>
            <NavLink href="/" label="Home" />
            <NavLink href="/about" label="About" />
            <NavLink href="/contact" label="Contact" />
          </nav>
        </header>

        <main style={{minHeight: '60vh', padding: '2rem 0'}}>
          {children}
        </main>

        <footer style={{padding: '1rem 0', textAlign: 'center', background: '#f8f8f8', borderTop: '1px solid #eee', color: '#888', fontSize: '0.9rem'}}>
          &copy; {new Date().getFullYear()} PosGar Salsas &ndash; Contact: info@posgar.cz
        </footer>
      </body>
    </html>
  );
}
