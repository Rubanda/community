import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const CommunityForm: React.FC = () => {
  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Share Your Knowledge</CardTitle>
        <CardDescription>Join our community of educators and learners</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="topic">Topic</Label>
            <Input id="topic" placeholder="What would you like to teach or learn?" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your full name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="your@email.com" required />
          </div>
          <Button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600">
            Join the Community
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

