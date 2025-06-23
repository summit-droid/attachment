import { supabase } from "./supabase"

export interface Booking {
  id: string
  booking_number: string
  tour_id: string
  customer_id: string
  booking_date: string
  guests: number
  total_amount: number
  status: string
  payment_status: string
  notes?: string
  created_at: string
  updated_at: string
}

export interface BookingData {
  tour_id: string
  customer_id: string
  guests: number
  total_amount: number
  notes?: string
}

export const createBooking = async (bookingData: BookingData) => {
  const bookingNumber = `BK-${Date.now()}`

  const { data, error } = await supabase
    .from("bookings")
    .insert({
      ...bookingData,
      booking_number: bookingNumber,
      status: "pending",
      payment_status: "unpaid",
    })
    .select()
    .single()

  if (error) throw error
  return data as Booking
}

export const getBookingsByCustomer = async (customerId: string) => {
  const { data, error } = await supabase
    .from("bookings")
    .select(`
      *,
      tours (
        name,
        location,
        start_date,
        end_date,
        image_url
      )
    `)
    .eq("customer_id", customerId)
    .order("created_at", { ascending: false })

  if (error) throw error
  return data
}
