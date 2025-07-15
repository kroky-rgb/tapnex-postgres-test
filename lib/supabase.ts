import { createClientComponentClient, createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import type { Database } from "@/types/database"

// Client-side Supabase client
export const createClient = () => createClientComponentClient<Database>()

// Server-side Supabase client
export const createServerClient = () => createServerComponentClient<Database>({ cookies })

// Singleton pattern for client-side usage
let supabaseClient: ReturnType<typeof createClientComponentClient<Database>> | null = null

export const getSupabaseClient = () => {
  if (!supabaseClient) {
    supabaseClient = createClientComponentClient<Database>()
  }
  return supabaseClient
}

// Real-time subscription helper
export const subscribeToQRScans = (callback: (payload: any) => void) => {
  const supabase = getSupabaseClient()
  return supabase
    .channel("qr_scans_changes")
    .on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
        table: "qr_scans",
      },
      callback,
    )
    .subscribe()
}

// Helper function to check if tables exist
export const checkTablesExist = async () => {
  const supabase = getSupabaseClient()
  try {
    const { data, error } = await supabase.from("profiles").select("id").limit(1)

    return !error
  } catch (error) {
    return false
  }
}

// Helper function to create a user profile
export const createUserProfile = async (userId: string, email: string, fullName?: string, role = "customer") => {
  const supabase = getSupabaseClient()

  const profileData = {
    id: userId,
    email,
    full_name: fullName || null,
    role,
    avatar_url: null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  }

  const { data, error } = await supabase.from("profiles").insert([profileData]).select().single()

  return { data, error }
}

// Export the main supabase instance
export const supabase = getSupabaseClient()
