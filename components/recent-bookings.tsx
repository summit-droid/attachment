import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const mockBookings = [
  {
    id: "1",
    customer: { name: "John Doe", initials: "JD" },
    tour: "Mountain Trek - 3 people",
    status: "Confirmed",
  },
  {
    id: "2",
    customer: { name: "Sarah Davis", initials: "SD" },
    tour: "Beach Retreat - 2 people",
    status: "Confirmed",
  },
  {
    id: "3",
    customer: { name: "Robert Johnson", initials: "RJ" },
    tour: "City Explorer - 4 people",
    status: "Pending",
  },
  {
    id: "4",
    customer: { name: "Emily Wilson", initials: "EW" },
    tour: "Cultural Tour - 1 person",
    status: "Confirmed",
  },
  {
    id: "5",
    customer: { name: "Michael Brown", initials: "MB" },
    tour: "Adventure Package - 2 people",
    status: "Cancelled",
  },
]

export function RecentBookings() {
  try {
    if (!mockBookings || mockBookings.length === 0) {
      return (
        <div className="text-center py-4">
          <p className="text-muted-foreground">No recent bookings</p>
        </div>
      )
    }

    return (
      <div className="space-y-8">
        {mockBookings.map((booking) => {
          if (!booking || !booking.customer) return null

          return (
            <div key={booking.id} className="flex items-center">
              <Avatar className="h-9 w-9">
                <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
                <AvatarFallback>{booking.customer.initials || "??"}</AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">{booking.customer.name || "Unknown"}</p>
                <p className="text-sm text-muted-foreground">{booking.tour || "Unknown tour"}</p>
              </div>
              <div className="ml-auto font-medium">
                <Badge
                  variant={
                    booking.status === "Confirmed"
                      ? "default"
                      : booking.status === "Pending"
                        ? "outline"
                        : "destructive"
                  }
                >
                  {booking.status || "Unknown"}
                </Badge>
              </div>
            </div>
          )
        })}
      </div>
    )
  } catch (error) {
    console.error("Error rendering recent bookings:", error)
    return (
      <div className="text-center py-4">
        <p className="text-muted-foreground">Error loading bookings</p>
      </div>
    )
  }
}
