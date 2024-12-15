import React from 'react'
import Link from "next/link"
import { Button } from '@/components/ui/button'
export default function SiteHeader() {
  return (
    <div>
    <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="bg-background w-8 h-8 rounded flex items-center justify-center">
          {/* <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            className="w-5 h-5"
            strokeWidth="2"
          >
            <path d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg> */}
        </div>
        <span className="text-xl font-semibold">Developer Community</span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <Link href="/" className="text-gray-600 hover:text-gray-900">
          Home
        </Link>
        <Link href="/event" className="text-gray-600 hover:text-gray-900">
          Events
        </Link>
        <Link href="/blog" className="text-gray-600 hover:text-gray-900">
          Blog
        </Link>
      </div>

      <Button className="" asChild>
        <Link href="/login" >
        Get started
        <svg
          className="ml-2 w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
        </Link>
      </Button>
    </nav></div>
  )
}
