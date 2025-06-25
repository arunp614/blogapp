// components/Header.tsx

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link href="/" className="text-2xl font-bold text-blue-600">MindFuel</Link>


        <nav className="space-x-6 text-gray-700 font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/#subscribe">Subscribe</Link>
        </nav>
      </div>
    </header>
  );
}
