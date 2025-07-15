"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import type { User } from "@supabase/auth-helpers-nextjs"
import type { Database } from "@/types/database"

export type UserRole = "admin" | "sub-admin" | "volunteer" | "customer"

export interface UserProfile {
  id: string
  email: string
  full_name: string | null
  role: UserRole
  avatar_url: string | null
  created_at: string
  updated_at: string
}

interface AuthContextType {
  user: User | null
  profile: UserProfile | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<{ error: any }>
  signUp: (email: string, password: string, fullName: string) => Promise<{ error: any }>
  signOut: () => Promise<void>
  updateProfile: (updates: Partial<UserProfile>) => Promise<{ error: any }>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Define admin, sub-admin, and volunteer emails here
const ADMIN_EMAILS = ["niruwu2006@gmail.com"]
const SUB_ADMIN_EMAILS = ["nirupamtaggart@gmail.com"]
const VOLUNTEER_EMAILS = ["nirupampam2020@gmail.com"]

function determineUserRole(email: string): UserRole {
  if (ADMIN_EMAILS.includes(email)) return "admin"
  if (SUB_ADMIN_EMAILS.includes(email)) return "sub-admin"
  if (VOLUNTEER_EMAILS.includes(email)) return "volunteer"
  return "customer"
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)
  const supabase = createClientComponentClient<Database>()

  useEffect(() => {
    const getSession = async () => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession()
        setUser(session?.user ?? null)

        if (session?.user) {
          await fetchOrCreateUserProfile(session.user)
        }
      } catch (error) {
        console.error("Error getting session:", error)
      } finally {
        setLoading(false)
      }
    }

    getSession()

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      setUser(session?.user ?? null)

      if (session?.user) {
        await fetchOrCreateUserProfile(session.user)
      } else {
        setProfile(null)
      }

      setLoading(false)
    })

    return () => subscription.unsubscribe()
  }, [supabase.auth])

  const fetchOrCreateUserProfile = async (user: User) => {
    try {
      // First, try to fetch the existing profile
      const { data: existingProfile, error: fetchError } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single()

      if (existingProfile && !fetchError) {
        setProfile(existingProfile)
        return
      }

      // If profile doesn't exist, create it
      const newProfile = {
        id: user.id,
        email: user.email!,
        full_name: user.user_metadata?.full_name || null,
        role: determineUserRole(user.email!) as UserRole,
        avatar_url: user.user_metadata?.avatar_url || null,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      }

      // Try to insert the new profile
      const { data: insertedProfile, error: insertError } = await supabase
        .from("profiles")
        .insert([newProfile])
        .select()
        .single()

      if (insertedProfile && !insertError) {
        setProfile(insertedProfile)
      } else {
        // If database insert fails, use the profile in memory
        console.warn("Could not save profile to database, using temporary profile:", insertError)
        setProfile(newProfile)
      }
    } catch (error) {
      console.error("Error in fetchOrCreateUserProfile:", error)
      // Create a fallback profile if there's any error
      const fallbackProfile = {
        id: user.id,
        email: user.email!,
        full_name: user.user_metadata?.full_name || null,
        role: determineUserRole(user.email!) as UserRole,
        avatar_url: user.user_metadata?.avatar_url || null,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      }
      setProfile(fallbackProfile)
    }
  }

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    return { error }
  }

  const signUp = async (email: string, password: string, fullName: string) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
          role: determineUserRole(email),
        },
      },
    })
    return { error }
  }

  const signOut = async () => {
    await supabase.auth.signOut()
    setProfile(null)
  }

  const updateProfile = async (updates: Partial<UserProfile>) => {
    if (!user) return { error: new Error("No user logged in") }

    try {
      const { error } = await supabase.from("profiles").update(updates).eq("id", user.id)

      if (!error) {
        setProfile((prev) => (prev ? { ...prev, ...updates } : null))
      }

      return { error }
    } catch (error) {
      console.error("Error updating profile:", error)
      return { error }
    }
  }

  const value = {
    user,
    profile,
    loading,
    signIn,
    signUp,
    signOut,
    updateProfile,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
