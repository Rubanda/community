"use client"

import * as React from "react"
import { signIn } from "next-auth/react"
// import * as z from "zod"
import { cn } from "../lib/utils"
// import { userAuthSchema } from "../lib/validations/auth"
import { buttonVariants } from "../components/ui/button"
import { Icons } from "../components/icons"

export function UserAuthForm({ 
  className, 
  ...props 
}: React.HTMLAttributes<HTMLDivElement>) {
  const [isGoogleLoading, setIsGoogleLoading] = React.useState<boolean>(false)

  return (
    <div className="grid gap-6" {...props}>
      <button
        type="button"
        className={cn(buttonVariants({ variant: "outline" }), className)}
        onClick={() => {
          setIsGoogleLoading(true)
          signIn('google', { callbackUrl: '/dash' })
        }}
        disabled={isGoogleLoading}
      >
        {isGoogleLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4" />
        )}{" "}Google
      </button>
    </div>
  )
}
