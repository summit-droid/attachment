import Link from "next/link"
import { ArrowRight, Calendar, CreditCard, Globe, MapPin, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Globe className="h-6 w-6 text-primary" />
          <span>TourManager</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="/" className="text-sm font-medium underline-offset-4 hover:underline">
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
          <Link href="/customer-view" className="text-sm font-medium underline-offset-4 hover:underline">
            Customer View
          </Link>
        </nav>
        <Button asChild>
          <Link href="/auth/login">Sign In</Link>
        </Button>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground">+20.1% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Tours</CardTitle>
              <MapPin className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">+2 new tours this month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">New Bookings</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">127</div>
              <p className="text-xs text-muted-foreground">+19% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Customers</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">573</div>
              <p className="text-xs text-muted-foreground">+201 since last year</p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <Card className="xl:col-span-2">
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle>Revenue Overview</CardTitle>
                <CardDescription>Monthly revenue breakdown by tour category</CardDescription>
              </div>
              <div className="ml-auto flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <div className="h-3 w-3 rounded-full bg-primary"></div>
                  <span className="text-sm text-muted-foreground">Adventure</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <span className="text-sm text-muted-foreground">Cultural</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  <span className="text-sm text-muted-foreground">Leisure</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-[350px] flex items-center justify-center">
                <div className="grid grid-cols-6 gap-4 h-64 w-full max-w-md">
                  <div className="flex flex-col justify-end items-center space-y-2">
                    <div className="w-8 bg-primary rounded-t" style={{ height: "80px" }}></div>
                    <span className="text-xs text-muted-foreground">Jan</span>
                  </div>
                  <div className="flex flex-col justify-end items-center space-y-2">
                    <div className="w-8 bg-green-500 rounded-t" style={{ height: "60px" }}></div>
                    <span className="text-xs text-muted-foreground">Feb</span>
                  </div>
                  <div className="flex flex-col justify-end items-center space-y-2">
                    <div className="w-8 bg-blue-500 rounded-t" style={{ height: "100px" }}></div>
                    <span className="text-xs text-muted-foreground">Mar</span>
                  </div>
                  <div className="flex flex-col justify-end items-center space-y-2">
                    <div className="w-8 bg-primary rounded-t" style={{ height: "70px" }}></div>
                    <span className="text-xs text-muted-foreground">Apr</span>
                  </div>
                  <div className="flex flex-col justify-end items-center space-y-2">
                    <div className="w-8 bg-green-500 rounded-t" style={{ height: "90px" }}></div>
                    <span className="text-xs text-muted-foreground">May</span>
                  </div>
                  <div className="flex flex-col justify-end items-center space-y-2">
                    <div className="w-8 bg-blue-500 rounded-t" style={{ height: "85px" }}></div>
                    <span className="text-xs text-muted-foreground">Jun</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Recent Bookings</CardTitle>
              <CardDescription>Latest tour bookings from customers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="flex items-center">
                  <div className="h-9 w-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-medium">
                    JD
                  </div>
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">John Doe</p>
                    <p className="text-sm text-muted-foreground">Mountain Trek - 3 people</p>
                  </div>
                  <div className="ml-auto">
                    <div className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs">Confirmed</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="h-9 w-9 rounded-full bg-green-500 flex items-center justify-center text-white text-sm font-medium">
                    SD
                  </div>
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">Sarah Davis</p>
                    <p className="text-sm text-muted-foreground">Beach Retreat - 2 people</p>
                  </div>
                  <div className="ml-auto">
                    <div className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs">Confirmed</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="h-9 w-9 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-medium">
                    RJ
                  </div>
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">Robert Johnson</p>
                    <p className="text-sm text-muted-foreground">City Explorer - 4 people</p>
                  </div>
                  <div className="ml-auto">
                    <div className="border border-gray-300 px-2 py-1 rounded text-xs">Pending</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="h-9 w-9 rounded-full bg-purple-500 flex items-center justify-center text-white text-sm font-medium">
                    EW
                  </div>
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">Emily Wilson</p>
                    <p className="text-sm text-muted-foreground">Cultural Tour - 1 person</p>
                  </div>
                  <div className="ml-auto">
                    <div className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs">Confirmed</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="h-9 w-9 rounded-full bg-red-500 flex items-center justify-center text-white text-sm font-medium">
                    MB
                  </div>
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">Michael Brown</p>
                    <p className="text-sm text-muted-foreground">Adventure Package - 2 people</p>
                  </div>
                  <div className="ml-auto">
                    <div className="bg-red-500 text-white px-2 py-1 rounded text-xs">Cancelled</div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/bookings">
                  View All Bookings
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
}
