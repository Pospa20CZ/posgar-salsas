'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`text-gray-800 hover:text-blue-600 transition ${
        isActive ? 'underline font-bold text-red-600' : ''
      }`}
    >
      {label}
    </Link>
  );
}
