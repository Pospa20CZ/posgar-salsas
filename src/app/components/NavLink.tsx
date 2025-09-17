"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      style={{
        textDecoration: isActive ? "underline" : "none",
        fontWeight: isActive ? "bold" : "normal",
        color: isActive ? "#d00" : "#333",
      }}
    >
      {label}
    </Link>
  );
}
