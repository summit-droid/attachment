import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function HeroSection() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/adventure-package.jpg"
          alt="Tourism Hero Background"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Discover Amazing Adventures</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Create unforgettable memories with our carefully curated tours and experiences around the world
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/tours">
              Explore Tours
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-white/10 border-white text-white hover:bg-white hover:text-black"
          >
            Learn More
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6 text-center">
              <MapPin className="h-8 w-8 mx-auto mb-4 text-white" />
              <h3 className="text-lg font-semibold mb-2">50+ Destinations</h3>
              <p className="text-sm opacity-90">Explore breathtaking locations worldwide</p>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 mx-auto mb-4 text-white" />
              <h3 className="text-lg font-semibold mb-2">Expert Guides</h3>
              <p className="text-sm opacity-90">Professional local guides for authentic experiences</p>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6 text-center">
              <Calendar className="h-8 w-8 mx-auto mb-4 text-white" />
              <h3 className="text-lg font-semibold mb-2">Flexible Booking</h3>
              <p className="text-sm opacity-90">Easy booking with flexible cancellation policies</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
