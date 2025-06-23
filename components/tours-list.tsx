import Image from "next/image"
import { CalendarDays, Clock, Edit, MapPin, MoreHorizontal, Users } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface ToursListProps {
  filter?: string
}

export function ToursList({ filter = "all" }: ToursListProps) {
  // In a real app, we would filter based on the filter prop
  return (
    <div className="space-y-4">
      <div className="rounded-lg border shadow-sm">
        <div className="flex flex-col sm:flex-row">
          <div className="relative h-48 w-full sm:h-auto sm:w-1/3">
            <Image src="/images/mountain-trek.jpg" alt="Mountain Trek Adventure" fill className="object-cover" />
            <Badge className="absolute left-2 top-2">Adventure</Badge>
          </div>
          <div className="flex flex-1 flex-col p-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold">Mountain Trek Adventure</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Swiss Alps, Switzerland</span>
                </div>
              </div>
              <Badge className="ml-auto" variant="outline">
                Active
              </Badge>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="ml-2">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">More options</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Edit className="mr-2 h-4 w-4" />
                    Edit Tour
                  </DropdownMenuItem>
                  <DropdownMenuItem>View Bookings</DropdownMenuItem>
                  <DropdownMenuItem>Duplicate</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive">Delete Tour</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <p className="mt-2 text-sm">
              Experience the breathtaking beauty of the Swiss Alps with our guided mountain trek adventure.
            </p>
            <div className="mt-auto flex flex-wrap items-center gap-4 pt-4 text-sm">
              <div className="flex items-center gap-1">
                <CalendarDays className="h-4 w-4 text-muted-foreground" />
                <span>May 15 - May 22, 2025</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>7 days</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span>12 spots (8 booked)</span>
              </div>
              <div className="ml-auto font-medium">$1,299 per person</div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg border shadow-sm">
        <div className="flex flex-col sm:flex-row">
          <div className="relative h-48 w-full sm:h-auto sm:w-1/3">
            <Image src="/images/beach-retreat.jpg" alt="Tropical Beach Retreat" fill className="object-cover" />
            <Badge className="absolute left-2 top-2">Leisure</Badge>
          </div>
          <div className="flex flex-1 flex-col p-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold">Tropical Beach Retreat</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Bali, Indonesia</span>
                </div>
              </div>
              <Badge className="ml-auto" variant="outline">
                Upcoming
              </Badge>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="ml-2">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">More options</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Edit className="mr-2 h-4 w-4" />
                    Edit Tour
                  </DropdownMenuItem>
                  <DropdownMenuItem>View Bookings</DropdownMenuItem>
                  <DropdownMenuItem>Duplicate</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive">Delete Tour</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <p className="mt-2 text-sm">
              Relax and rejuvenate on the pristine beaches of Bali with our all-inclusive tropical retreat package.
            </p>
            <div className="mt-auto flex flex-wrap items-center gap-4 pt-4 text-sm">
              <div className="flex items-center gap-1">
                <CalendarDays className="h-4 w-4 text-muted-foreground" />
                <span>June 10 - June 17, 2025</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>7 days</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span>20 spots (12 booked)</span>
              </div>
              <div className="ml-auto font-medium">$1,599 per person</div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg border shadow-sm">
        <div className="flex flex-col sm:flex-row">
          <div className="relative h-48 w-full sm:h-auto sm:w-1/3">
            <Image src="/images/cultural-tour.jpg" alt="Historic City Explorer" fill className="object-cover" />
            <Badge className="absolute left-2 top-2">Cultural</Badge>
          </div>
          <div className="flex flex-1 flex-col p-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold">Historic City Explorer</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Rome, Italy</span>
                </div>
              </div>
              <Badge className="ml-auto" variant="outline">
                Active
              </Badge>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="ml-2">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">More options</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Edit className="mr-2 h-4 w-4" />
                    Edit Tour
                  </DropdownMenuItem>
                  <DropdownMenuItem>View Bookings</DropdownMenuItem>
                  <DropdownMenuItem>Duplicate</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive">Delete Tour</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <p className="mt-2 text-sm">
              Discover the rich history and culture of Rome with expert guides and exclusive access to historic sites.
            </p>
            <div className="mt-auto flex flex-wrap items-center gap-4 pt-4 text-sm">
              <div className="flex items-center gap-1">
                <CalendarDays className="h-4 w-4 text-muted-foreground" />
                <span>May 20 - May 25, 2025</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>5 days</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span>15 spots (10 booked)</span>
              </div>
              <div className="ml-auto font-medium">$1,199 per person</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
