import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
import { MoreHorizontal } from "lucide-react"

export function BookingsList() {
  return (
    <div className="overflow-auto">
      <table className="w-full min-w-[800px] text-sm">
        <thead>
          <tr className="border-b">
            <th className="py-3 text-left font-medium">Booking ID</th>
            <th className="py-3 text-left font-medium">Customer</th>
            <th className="py-3 text-left font-medium">Tour</th>
            <th className="py-3 text-left font-medium">Date</th>
            <th className="py-3 text-left font-medium">Guests</th>
            <th className="py-3 text-left font-medium">Amount</th>
            <th className="py-3 text-left font-medium">Status</th>
            <th className="py-3 text-left font-medium sr-only">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="py-3 text-left">#BK-1234</td>
            <td className="py-3 text-left">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <span>John Doe</span>
              </div>
            </td>
            <td className="py-3 text-left">Mountain Trek</td>
            <td className="py-3 text-left">May 15, 2025</td>
            <td className="py-3 text-left">3</td>
            <td className="py-3 text-left">$3,897</td>
            <td className="py-3 text-left">
              <Badge>Confirmed</Badge>
            </td>
            <td className="py-3 text-right">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Actions</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>View Details</DropdownMenuItem>
                  <DropdownMenuItem>Edit Booking</DropdownMenuItem>
                  <DropdownMenuItem>Send Reminder</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive">Cancel Booking</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </td>
          </tr>
          <tr className="border-b">
            <td className="py-3 text-left">#BK-1235</td>
            <td className="py-3 text-left">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
                  <AvatarFallback>SD</AvatarFallback>
                </Avatar>
                <span>Sarah Davis</span>
              </div>
            </td>
            <td className="py-3 text-left">Beach Retreat</td>
            <td className="py-3 text-left">June 10, 2025</td>
            <td className="py-3 text-left">2</td>
            <td className="py-3 text-left">$3,198</td>
            <td className="py-3 text-left">
              <Badge>Confirmed</Badge>
            </td>
            <td className="py-3 text-right">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Actions</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>View Details</DropdownMenuItem>
                  <DropdownMenuItem>Edit Booking</DropdownMenuItem>
                  <DropdownMenuItem>Send Reminder</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive">Cancel Booking</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </td>
          </tr>
          <tr className="border-b">
            <td className="py-3 text-left">#BK-1236</td>
            <td className="py-3 text-left">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
                  <AvatarFallback>RJ</AvatarFallback>
                </Avatar>
                <span>Robert Johnson</span>
              </div>
            </td>
            <td className="py-3 text-left">City Explorer</td>
            <td className="py-3 text-left">May 20, 2025</td>
            <td className="py-3 text-left">4</td>
            <td className="py-3 text-left">$4,796</td>
            <td className="py-3 text-left">
              <Badge variant="outline">Pending</Badge>
            </td>
            <td className="py-3 text-right">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Actions</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>View Details</DropdownMenuItem>
                  <DropdownMenuItem>Edit Booking</DropdownMenuItem>
                  <DropdownMenuItem>Send Reminder</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive">Cancel Booking</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </td>
          </tr>
          <tr className="border-b">
            <td className="py-3 text-left">#BK-1237</td>
            <td className="py-3 text-left">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
                  <AvatarFallback>EW</AvatarFallback>
                </Avatar>
                <span>Emily Wilson</span>
              </div>
            </td>
            <td className="py-3 text-left">Cultural Tour</td>
            <td className="py-3 text-left">May 20, 2025</td>
            <td className="py-3 text-left">1</td>
            <td className="py-3 text-left">$1,199</td>
            <td className="py-3 text-left">
              <Badge>Confirmed</Badge>
            </td>
            <td className="py-3 text-right">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Actions</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>View Details</DropdownMenuItem>
                  <DropdownMenuItem>Edit Booking</DropdownMenuItem>
                  <DropdownMenuItem>Send Reminder</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive">Cancel Booking</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </td>
          </tr>
          <tr className="border-b">
            <td className="py-3 text-left">#BK-1238</td>
            <td className="py-3 text-left">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
                  <AvatarFallback>MB</AvatarFallback>
                </Avatar>
                <span>Michael Brown</span>
              </div>
            </td>
            <td className="py-3 text-left">Adventure Package</td>
            <td className="py-3 text-left">June 5, 2025</td>
            <td className="py-3 text-left">2</td>
            <td className="py-3 text-left">$2,598</td>
            <td className="py-3 text-left">
              <Badge variant="destructive">Cancelled</Badge>
            </td>
            <td className="py-3 text-right">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Actions</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>View Details</DropdownMenuItem>
                  <DropdownMenuItem>Restore Booking</DropdownMenuItem>
                  <DropdownMenuItem>Contact Customer</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
