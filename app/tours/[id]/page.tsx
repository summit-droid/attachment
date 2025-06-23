import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Calendar, Clock, Globe, MapPin, Star, Users, ArrowLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookingForm } from "@/components/booking-form"

// Mock data - in real app, fetch from database
const getTourData = (id: string) => {
  const tours = {
    "1": {
      id: "1",
      name: "Mountain Trek Adventure",
      description:
        "Experience the breathtaking beauty of the Swiss Alps with our guided mountain trek adventure. This 7-day journey takes you through some of the most spectacular mountain scenery in the world.",
      location: "Swiss Alps, Switzerland",
      category: "Adventure",
      start_date: "2025-05-15",
      end_date: "2025-05-22",
      duration_days: 7,
      price: 1299,
      capacity: 12,
      image_url: "/images/mountain-trek.jpg",
      status: "active",
      rating: 4.9,
      reviews: 127,
      highlights: [
        "Professional mountain guides",
        "All meals included",
        "Mountain hut accommodation",
        "Safety equipment provided",
        "Small group experience",
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival in Zermatt",
          description: "Meet your guide and group, equipment check, welcome dinner",
        },
        { day: 2, title: "Gornergrat Railway", description: "Scenic train ride and acclimatization hike" },
        { day: 3, title: "Matterhorn Base Camp", description: "Trek to the base of the iconic Matterhorn" },
        { day: 4, title: "Glacier Experience", description: "Guided glacier walk and ice climbing basics" },
        { day: 5, title: "Alpine Lakes", description: "Hike through pristine alpine lake region" },
        { day: 6, title: "Summit Attempt", description: "Early morning summit of a 3000m peak" },
        { day: 7, title: "Departure", description: "Final breakfast and departure" },
      ],
      included: ["Professional guide", "All meals", "Accommodation", "Safety equipment", "Transportation", "Permits"],
      notIncluded: [
        "International flights",
        "Travel insurance",
        "Personal equipment",
        "Alcoholic beverages",
        "Tips for guides",
      ],
    },
  }

  return tours[id as keyof typeof tours]
}

export default function TourDetailPage({ params }: { params: { id: string } }) {
  const tour = getTourData(params.id)

  if (!tour) {
    notFound()
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

      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/customer-view">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Tours
            </Link>
          </Button>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-8">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image src={tour.image_url || "/placeholder.svg"} alt={tour.name} fill className="object-cover" />
                <Badge className="absolute left-4 top-4">{tour.category}</Badge>
                <div className="absolute right-4 top-4 flex items-center gap-1 bg-black/50 text-white px-2 py-1 rounded text-sm">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span>{tour.rating}</span>
                  <span className="text-xs">({tour.reviews} reviews)</span>
                </div>
              </div>

              <div>
                <h1 className="text-3xl font-bold mb-4">{tour.name}</h1>
                <div className="flex items-center gap-4 text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{tour.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{tour.duration_days} days</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>Max {tour.capacity} people</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>
                      {new Date(tour.start_date).toLocaleDateString()} - {new Date(tour.end_date).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <p className="text-lg leading-relaxed">{tour.description}</p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Tour Highlights</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {tour.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-primary rounded-full" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Daily Itinerary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {tour.itinerary.map((day, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                          {day.day}
                        </div>
                        <div>
                          <h4 className="font-semibold">{day.title}</h4>
                          <p className="text-muted-foreground">{day.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-green-600">What's Included</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {tour.included.map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="h-2 w-2 bg-green-500 rounded-full" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-red-600">Not Included</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {tour.notIncluded.map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="h-2 w-2 bg-red-500 rounded-full" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Book This Tour</span>
                      <span className="text-2xl font-bold">${tour.price}</span>
                    </CardTitle>
                    <CardDescription>per person</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BookingForm tour={tour} />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
