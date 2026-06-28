"use client";

import Link from "next/link";

export default function Navbar() {
return ( <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800"> <div className="max-w-7xl mx-auto px-6">

    <div className="flex items-center justify-between h-20">

      {/* Logo */}
      <Link
        href="/"
        className="text-2xl font-bold tracking-wide"
      >
        <span className="text-blue-400">P</span>
        <span className="text-white">atcharin</span>
      </Link>

      {/* Menu */}
      <div className="hidden md:flex items-center gap-8">

        <Link
          href="/"
          className="text-gray-300 hover:text-blue-400 transition duration-300"
        >
          Home
        </Link>

        <Link
          href="/about"
          className="text-gray-300 hover:text-blue-400 transition duration-300"
        >
          About
        </Link>

        <Link
          href="/me/skills"
          className="text-gray-300 hover:text-blue-400 transition duration-300"
        >
          Skills
        </Link>

        <Link
          href="/me/projects"
          className="text-gray-300 hover:text-blue-400 transition duration-300"
        >
          Projects
        </Link>

        <Link
          href="/me/gallery"
          className="text-gray-300 hover:text-blue-400 transition duration-300"
        >
          Gallery
        </Link>

        <Link
          href="/contact"
          className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 transition text-white"
        >
          Contact
        </Link>

      </div>

    </div>

  </div>
</nav>

);
}
