import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import NavLink from "./components/NavLink";
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="text-center bg-[#f8f8f8] border-b border-[#eee] py-8">
          <h1 className="text-4xl font-bold m-0">PosGar Salsas</h1>
          <p className="text-lg text-gray-600 m-0">Sauce e-shop</p>

          <nav className="mt-4 flex justify-center gap-8">
            <NavLink href="/" label="Home" />
            <NavLink href="/about" label="About" />
            <NavLink href="/contact" label="Contact" />
            <NavLink href="/products" label="Products" /> {/* ← Přidáno */}
            <NavLink href="/cart" label="Cart" /> {/* ← Přidáno */}
          </nav>
        </header>

        <main className="min-h-[60vh] py-8">{children}</main>

        <footer className="text-center bg-[#f8f8f8] border-t border-[#eee] py-4 text-sm text-gray-500">
          &copy; {new Date().getFullYear()} PosGar Salsas &ndash; Contact: info@posgar.cz
        </footer>
      </body>
    </html>
  );
}
