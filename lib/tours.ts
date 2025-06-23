import { supabase } from "./supabase"

export interface Tour {
  id: string
  name: string
  description: string
  location: string
  category: string
  start_date: string
  end_date: string
  duration_days: number
  price: number
  capacity: number
  image_url: string
  status: string
  created_at: string
  updated_at: string
}

export interface TourFilters {
  category?: string
  minPrice?: number
  maxPrice?: number
  startDate?: string
  endDate?: string
  search?: string
}

export const getTours = async (filters?: TourFilters) => {
  let query = supabase.from("tours").select("*")

  if (filters?.category) {
    query = query.eq("category", filters.category)
  }

  if (filters?.minPrice) {
    query = query.gte("price", filters.minPrice)
  }

  if (filters?.maxPrice) {
    query = query.lte("price", filters.maxPrice)
  }

  if (filters?.startDate) {
    query = query.gte("start_date", filters.startDate)
  }

  if (filters?.endDate) {
    query = query.lte("end_date", filters.endDate)
  }

  if (filters?.search) {
    query = query.or(
      `name.ilike.%${filters.search}%,location.ilike.%${filters.search}%,description.ilike.%${filters.search}%`,
    )
  }

  const { data, error } = await query.order("created_at", { ascending: false })

  if (error) throw error
  return data as Tour[]
}

export const getTourById = async (id: string) => {
  const { data, error } = await supabase.from("tours").select("*").eq("id", id).single()

  if (error) throw error
  return data as Tour
}
