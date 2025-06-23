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

export function CustomersList() {
  return (
    <div className="overflow-auto">
      <table className="w-full min-w-[800px] text-sm">
        <thead>
          <tr className="border-b">
            <th className="py-3 text-left font-medium">Customer</th>
            <th className="py-3 text-left font-medium">Email</th>
            <th className="py-3 text-left font-medium">Phone</th>
            <th className="py-3 text-left font-medium">Location</th>
            <th className="py-3 text-left font-medium">Bookings</th>
            <th className="py-3 text-left font-medium">Total Spent</th>
            <th className="py-3 text-left font-medium">Status</th>
            <th className="py-3 text-left font-medium sr-only">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="py-3 text-left">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <span>John Doe</span>
              </div>
            </td>
            <td className="py-3 text-left">john.doe@example.com</td>
            <td className="py-3 text-left">+1 (555) 123-4567</td>
            <td className="py-3 text-left">New York, USA</td>
            <td className="py-3 text-left">5</td>
            <td className="py-3 text-left">$7,845</td>
            <td className="py-3 text-left">
              <Badge variant="outline">Active</Badge>
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
                  <DropdownMenuItem>View Profile</DropdownMenuItem>
                  <DropdownMenuItem>Edit Customer</DropdownMenuItem>
                  <DropdownMenuItem>View Bookings</DropdownMenuItem>
                  <DropdownMenuItem>Send Email</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive">Delete Customer</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </td>
          </tr>
          <tr className="border-b">
            <td className="py-3 text-left">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
                  <AvatarFallback>SD</AvatarFallback>
                </Avatar>
                <span>Sarah Davis</span>
              </div>
            </td>
            <td className="py-3 text-left">sarah.davis@example.com</td>
            <td className="py-3 text-left">+1 (555) 234-5678</td>
            <td className="py-3 text-left">Los Angeles, USA</td>
            <td className="py-3 text-left">3</td>
            <td className="py-3 text-left">$5,290</td>
            <td className="py-3 text-left">
              <Badge variant="outline">Active</Badge>
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
                  <DropdownMenuItem>View Profile</DropdownMenuItem>
                  <DropdownMenuItem>Edit Customer</DropdownMenuItem>
                  <DropdownMenuItem>View Bookings</DropdownMenuItem>
                  <DropdownMenuItem>Send Email</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive">Delete Customer</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </td>
          </tr>
          <tr className="border-b">
            <td className="py-3 text-left">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
                  <AvatarFallback>RJ</AvatarFallback>
                </Avatar>
                <span>Robert Johnson</span>
              </div>
            </td>
            <td className="py-3 text-left">robert.j@example.com</td>
            <td className="py-3 text-left">+1 (555) 345-6789</td>
            <td className="py-3 text-left">Chicago, USA</td>
            <td className="py-3 text-left">2</td>
            <td className="py-3 text-left">$3,450</td>
            <td className="py-3 text-left">
              <Badge variant="secondary">New</Badge>
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
                  <DropdownMenuItem>View Profile</DropdownMenuItem>
                  <DropdownMenuItem>Edit Customer</DropdownMenuItem>
                  <DropdownMenuItem>View Bookings</DropdownMenuItem>
                  <DropdownMenuItem>Send Email</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive">Delete Customer</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </td>
          </tr>
          <tr className="border-b">
            <td className="py-3 text-left">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
                  <AvatarFallback>EW</AvatarFallback>
                </Avatar>
                <span>Emily Wilson</span>
              </div>
            </td>
            <td className="py-3 text-left">emily.w@example.com</td>
            <td className="py-3 text-left">+1 (555) 456-7890</td>
            <td className="py-3 text-left">Miami, USA</td>
            <td className="py-3 text-left">7</td>
            <td className="py-3 text-left">$12,980</td>
            <td className="py-3 text-left">
              <Badge>VIP</Badge>
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
                  <DropdownMenuItem>View Profile</DropdownMenuItem>
                  <DropdownMenuItem>Edit Customer</DropdownMenuItem>
                  <DropdownMenuItem>View Bookings</DropdownMenuItem>
                  <DropdownMenuItem>Send Email</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive">Delete Customer</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </td>
          </tr>
          <tr className="border-b">
            <td className="py-3 text-left">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
                  <AvatarFallback>MB</AvatarFallback>
                </Avatar>
                <span>Michael Brown</span>
              </div>
            </td>
            <td className="py-3 text-left">michael.b@example.com</td>
            <td className="py-3 text-left">+1 (555) 567-8901</td>
            <td className="py-3 text-left">Seattle, USA</td>
            <td className="py-3 text-left">1</td>
            <td className="py-3 text-left">$1,299</td>
            <td className="py-3 text-left">
              <Badge variant="outline">Active</Badge>
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
                  <DropdownMenuItem>View Profile</DropdownMenuItem>
                  <DropdownMenuItem>Edit Customer</DropdownMenuItem>
                  <DropdownMenuItem>View Bookings</DropdownMenuItem>
                  <DropdownMenuItem>Send Email</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive">Delete Customer</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
