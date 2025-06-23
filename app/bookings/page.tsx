import Link from "next/link"
import { Calendar, Download, Filter, Globe, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { BookingsList } from "@/components/bookings-list"

export default function BookingsPage() {
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
          <h1 className="text-2xl font-bold">Bookings Management</h1>
          <div className="flex gap-2">
            <Button variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              Calendar View
            </Button>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search bookings..." className="w-full bg-background pl-8 md:w-[300px]" />
          </div>
          <div className="flex flex-1 items-center gap-2 md:ml-auto">
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <select className="rounded-md border border-input bg-background px-3 py-1 text-sm">
              <option>All Statuses</option>
              <option>Confirmed</option>
              <option>Pending</option>
              <option>Cancelled</option>
            </select>
            <select className="rounded-md border border-input bg-background px-3 py-1 text-sm">
              <option>All Tours</option>
              <option>Mountain Trek</option>
              <option>Beach Retreat</option>
              <option>City Explorer</option>
            </select>
            <select className="rounded-md border border-input bg-background px-3 py-1 text-sm">
              <option>Last 30 days</option>
              <option>Last 7 days</option>
              <option>Today</option>
              <option>This month</option>
              <option>Custom range</option>
            </select>
          </div>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>All Bookings</CardTitle>
            <CardDescription>Manage customer bookings for all tours</CardDescription>
          </CardHeader>
          <CardContent>
            <BookingsList />
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="text-sm text-muted-foreground">Showing 1-10 of 234 bookings</div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Previous
              </Button>
              <Button size="sm">Next</Button>
            </div>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}
