// components/Header.tsx
"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link href="/" className="text-2xl font-bold text-blue-600">MindFuel</Link>


        <nav className="hidden md:block space-x-6 text-gray-700 font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/#subscribe">Subscribe</Link>
        </nav>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>


      {isOpen && (
        <div className="md:hidden  flex flex-col p-10 top-10 right-10 bg-white border rounded-2xl border-gray-200 absolute  text-center text-gray-700 font-medium py-4 space-y-3 shadow-sm">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/#subscribe" onClick={() => setIsOpen(false)}>Subscribe</Link>
        </div>
      )}

      </div>
    </header>
  );
}
