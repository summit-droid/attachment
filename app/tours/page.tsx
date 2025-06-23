import Link from "next/link"
import { Globe, Plus, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ToursList } from "@/components/tours-list"

export default function ToursPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Globe className="h-6 w-6 text-primary" />
          <span>TourManager</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="/dashboard" className="text-sm font-medium underline-offset-4 hover:underline">
            Dashboard
          </Link>
          <Link href="/tours" className="text-sm font-medium underline-offset-4 hover:underline">
            Tours
          </Link>
          <Link href="/bookings" className="text-sm font-medium underline-offset-4 hover:underline">
            Bookings
          </Link>
          <Link href="/customers" className="text-sm font-medium underline-offset-4 hover:underline">
            Customers
          </Link>
        </nav>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Tours Management</h1>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add New Tour
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search tours..." className="w-full bg-background pl-8 md:w-[300px]" />
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Button variant="outline" size="sm">
              Filter
            </Button>
            <Button variant="outline" size="sm">
              Sort
            </Button>
          </div>
        </div>
        <Tabs defaultValue="all" className="w-full">
          <TabsList>
            <TabsTrigger value="all">All Tours</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>All Tours</CardTitle>
                <CardDescription>Manage all your available tours and packages</CardDescription>
              </CardHeader>
              <CardContent>
                <ToursList />
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Previous</Button>
                <Button>Next</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="active" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Active Tours</CardTitle>
                <CardDescription>Tours that are currently running</CardDescription>
              </CardHeader>
              <CardContent>
                <ToursList filter="active" />
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Previous</Button>
                <Button>Next</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="upcoming" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Tours</CardTitle>
                <CardDescription>Tours scheduled to start soon</CardDescription>
              </CardHeader>
              <CardContent>
                <ToursList filter="upcoming" />
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Previous</Button>
                <Button>Next</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="completed" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Completed Tours</CardTitle>
                <CardDescription>Tours that have been completed</CardDescription>
              </CardHeader>
              <CardContent>
                <ToursList filter="completed" />
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Previous</Button>
                <Button>Next</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
