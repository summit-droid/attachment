import Link from "next/link"
import { Download, Globe, Search, UserPlus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { CustomersList } from "@/components/customers-list"

export default function CustomersPage() {
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
          <h1 className="text-2xl font-bold">Customer Management</h1>
          <div className="flex gap-2">
            <Button>
              <UserPlus className="mr-2 h-4 w-4" />
              Add Customer
            </Button>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search customers..." className="w-full bg-background pl-8 md:w-[300px]" />
          </div>
          <div className="ml-auto flex items-center gap-2">
            <select className="rounded-md border border-input bg-background px-3 py-1 text-sm">
              <option>All Customers</option>
              <option>Active</option>
              <option>New</option>
              <option>VIP</option>
            </select>
            <select className="rounded-md border border-input bg-background px-3 py-1 text-sm">
              <option>Sort by Name</option>
              <option>Sort by Date</option>
              <option>Sort by Bookings</option>
              <option>Sort by Spending</option>
            </select>
          </div>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>All Customers</CardTitle>
            <CardDescription>Manage your customer database</CardDescription>
          </CardHeader>
          <CardContent>
            <CustomersList />
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="text-sm text-muted-foreground">Showing 1-10 of 573 customers</div>
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
