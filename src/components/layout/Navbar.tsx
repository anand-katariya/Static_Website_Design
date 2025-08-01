"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function StickyNavbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full bg-cream shadow-md border-b border-coffee"
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-display font-bold text-coffee-dark"
          >
            ☕ Brew & Bean
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/menu">Menu</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/gallery">Gallery</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-coffee-dark hover:text-caramel">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation (hidden by default) */}
      <div className="md:hidden bg-cream pb-4 px-4 hidden">
        <div className="flex flex-col space-y-3">
          <MobileNavLink href="/">Home</MobileNavLink>
          <MobileNavLink href="/menu">Menu</MobileNavLink>
          <MobileNavLink href="/about">About</MobileNavLink>
          <MobileNavLink href="/gallery">Gallery</MobileNavLink>
          <MobileNavLink href="/contact">Contact</MobileNavLink>
        </div>
      </div>
    </motion.nav>
  );
}

// Reusable NavLink component
function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group relative text-coffee-dark hover:text-caramel transition-colors duration-300 font-body"
    >
      {children}
      <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-caramel transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
}

// Reusable MobileNavLink component
function MobileNavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="block py-2 text-coffee-dark hover:text-caramel transition-colors duration-300 border-b border-coffee/10 hover:border-caramel font-body"
    >
      {children}
    </Link>
  );
}
