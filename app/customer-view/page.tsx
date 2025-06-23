"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, Globe, MapPin, Star, Users } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { HeroSection } from "@/components/hero-section"
import { TourSearch } from "@/components/tour-search"

// Mock data - in real app, this would come from the database
const mockTours = [
  {
    id: "1",
    name: "Mountain Trek Adventure",
    description: "Experience the breathtaking beauty of the Swiss Alps with our guided mountain trek adventure.",
    location: "Swiss Alps, Switzerland",
    category: "adventure",
    start_date: "2025-05-15",
    end_date: "2025-05-22",
    duration_days: 7,
    price: 1299,
    capacity: 12,
    image_url: "/images/mountain-trek.jpg",
    status: "active",
    rating: 4.9,
    reviews: 127,
  },
  {
    id: "2",
    name: "Tropical Beach Retreat",
    description: "Relax and rejuvenate on the pristine beaches of Bali with our all-inclusive tropical retreat.",
    location: "Bali, Indonesia",
    category: "leisure",
    start_date: "2025-06-10",
    end_date: "2025-06-17",
    duration_days: 7,
    price: 1599,
    capacity: 20,
    image_url: "/images/beach-retreat.jpg",
    status: "active",
    rating: 4.8,
    reviews: 89,
  },
  {
    id: "3",
    name: "Historic City Explorer",
    description: "Discover the rich history and culture of Rome with expert guides and exclusive access.",
    location: "Rome, Italy",
    category: "cultural",
    start_date: "2025-05-20",
    end_date: "2025-05-25",
    duration_days: 5,
    price: 1199,
    capacity: 15,
    image_url: "/images/cultural-tour.jpg",
    status: "active",
    rating: 4.7,
    reviews: 156,
  },
  {
    id: "4",
    name: "African Safari Experience",
    description: "Witness the incredible wildlife of Africa in their natural habitat on this unforgettable safari.",
    location: "Serengeti, Tanzania",
    category: "wildlife",
    start_date: "2025-07-05",
    end_date: "2025-07-15",
    duration_days: 10,
    price: 2899,
    capacity: 8,
    image_url: "/images/safari-tour.jpg",
    status: "active",
    rating: 4.9,
    reviews: 73,
  },
  {
    id: "5",
    name: "European City Hopping",
    description: "Explore three iconic European cities in one amazing journey with guided tours and free time.",
    location: "Paris, London, Amsterdam",
    category: "cultural",
    start_date: "2025-08-01",
    end_date: "2025-08-13",
    duration_days: 12,
    price: 2199,
    capacity: 25,
    image_url: "/images/city-tour.jpg",
    status: "active",
    rating: 4.6,
    reviews: 94,
  },
  {
    id: "6",
    name: "Adventure Sports Package",
    description: "Get your adrenaline pumping with bungee jumping, skydiving, and white-water rafting.",
    location: "Queenstown, New Zealand",
    category: "adventure",
    start_date: "2025-09-10",
    end_date: "2025-09-16",
    duration_days: 6,
    price: 1899,
    capacity: 10,
    image_url: "/images/adventure-package.jpg",
    status: "active",
    rating: 4.8,
    reviews: 112,
  },
]

export default function CustomerViewPage() {
  const [tours, setTours] = useState(mockTours)
  const [filteredTours, setFilteredTours] = useState(mockTours)

  const handleSearch = (filters: any) => {
    let filtered = [...tours]

    if (filters.search) {
      const searchLower = filters.search.toLowerCase()
      filtered = filtered.filter(
        (tour) =>
          tour.name.toLowerCase().includes(searchLower) ||
          tour.location.toLowerCase().includes(searchLower) ||
          tour.description.toLowerCase().includes(searchLower),
      )
    }

    if (filters.category) {
      filtered = filtered.filter((tour) => tour.category === filters.category)
    }

    if (filters.minPrice) {
      filtered = filtered.filter((tour) => tour.price >= filters.minPrice)
    }

    if (filters.maxPrice) {
      filtered = filtered.filter((tour) => tour.price <= filters.maxPrice)
    }

    if (filters.startDate) {
      filtered = filtered.filter((tour) => tour.start_date >= filters.startDate)
    }

    if (filters.endDate) {
      filtered = filtered.filter((tour) => tour.end_date <= filters.endDate)
    }

    setFilteredTours(filtered)
  }

  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Globe className="h-6 w-6 text-primary" />
          <span>TourManager</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="/customer-view" className="text-sm font-medium underline-offset-4 hover:underline">
            Tours
          </Link>
          <Link href="/about" className="text-sm font-medium underline-offset-4 hover:underline">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium underline-offset-4 hover:underline">
            Contact
          </Link>
        </nav>
        <Button asChild>
          <Link href="/auth/login">Sign In</Link>
        </Button>
      </header>

      <HeroSection />

      <main className="flex flex-1 flex-col gap-8 p-4 md:p-8">
        <section className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Find Your Perfect Adventure</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Search and filter through our amazing collection of tours to find the perfect experience for you
            </p>
            <TourSearch onSearch={handleSearch} />
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredTours.map((tour) => (
              <Card key={tour.id} className="overflow-hidden">
                <div className="relative h-48">
                  <Image src={tour.image_url || "/placeholder.svg"} alt={tour.name} fill className="object-cover" />
                  <Badge className="absolute left-4 top-4 capitalize">{tour.category}</Badge>
                  <div className="absolute right-4 top-4 flex items-center gap-1 bg-black/50 text-white px-2 py-1 rounded text-sm">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span>{tour.rating}</span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{tour.name}</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {tour.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{tour.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>{tour.duration_days} days</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>Max {tour.capacity}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{new Date(tour.start_date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between">
                  <div className="text-2xl font-bold">${tour.price.toLocaleString()}</div>
                  <div className="flex gap-2">
                    <Button variant="outline" asChild>
                      <Link href={`/tours/${tour.id}`}>View Details</Link>
                    </Button>
                    <Button asChild>
                      <Link href={`/tours/${tour.id}`}>Book Now</Link>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredTours.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No tours found</h3>
              <p className="text-muted-foreground">Try adjusting your search criteria or filters</p>
            </div>
          )}
        </section>

        <section className="bg-muted/50 py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Why Choose TourManager?</h2>
            <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
              We're committed to providing exceptional travel experiences with professional service and attention to
              detail
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Guides</h3>
                <p className="text-muted-foreground">Professional local guides with deep knowledge of destinations</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Unique Destinations</h3>
                <p className="text-muted-foreground">
                  Carefully selected locations for authentic and memorable experiences
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Flexible Booking</h3>
                <p className="text-muted-foreground">Easy booking process with flexible cancellation policies</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 font-semibold mb-4">
                <Globe className="h-6 w-6 text-primary" />
                <span>TourManager</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Creating unforgettable travel experiences around the world.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/tours" className="text-muted-foreground hover:text-foreground">
                    Tours
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/help" className="text-muted-foreground hover:text-foreground">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/booking-policy" className="text-muted-foreground hover:text-foreground">
                    Booking Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Email: info@tourmanager.com</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Address: 123 Travel St, Adventure City</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 TourManager. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
