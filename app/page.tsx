import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CircleIcon } from 'lucide-react'
import { CalendarInterface } from "@/components/calendar-interface"
import { CommunityForm } from "@/components/community-form"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
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
        
        {/* <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            Home
          </Link>
          <Link href="/pricing" className="text-gray-600 hover:text-gray-900">
            Pricing
          </Link>
          <Link href="/blog" className="text-gray-600 hover:text-gray-900">
            Blog
          </Link>
        </div> */}
        
        {/* <Button className="bg-emerald-500 hover:bg-emerald-600">
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
        </Button> */}
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-20 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

        {/* Decorative Elements */}
        <div className="absolute left-10 top-20 animate-float">
          <div className="bg-white rounded-2xl shadow-xl p-4 w-16 h-16 flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="w-8 h-8 text-emerald-500"
              strokeWidth="2"
            >
              <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>
        
        <div className="absolute right-10 bottom-20 animate-float-delayed">
          <div className="bg-white rounded-2xl shadow-xl p-4 w-16 h-16 flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="w-8 h-8 text-emerald-500"
              strokeWidth="2"
            >
              <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center">
          {/* New Badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-8">
            <CircleIcon className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium">New! Record user interviews without recording bots</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Record interviews. Centralise feedback automatically.
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Record and organize user interviews automatically. Focus on what matters - connecting with users.
          </p>

          <Button className="bg-emerald-500 hover:bg-emerald-600 text-lg px-8 py-6 h-auto">
            Get started - it&apos;s free
            <svg
              className="ml-2 w-5 h-5"
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
          </Button>
        </div>

        {/* Calendar Interface Mockup */}
        <CalendarInterface />

        {/* Community Form */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-8">Join Our Community</h2>
          <CommunityForm />
        </div>
      </main>
    </div>
  )
}

