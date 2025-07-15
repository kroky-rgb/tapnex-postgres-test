export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          role: "admin" | "sub-admin" | "volunteer" | "customer"
          avatar_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          role?: "admin" | "sub-admin" | "volunteer" | "customer"
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          role?: "admin" | "sub-admin" | "volunteer" | "customer"
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      events: {
        Row: {
          id: string
          name: string
          description: string | null
          date: string
          time: string
          location: string
          total_tickets: number
          sold_tickets: number
          ticket_price: number
          status: "active" | "completed" | "cancelled"
          image_url: string | null
          created_by: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          date: string
          time: string
          location: string
          total_tickets: number
          sold_tickets?: number
          ticket_price: number
          status?: "active" | "completed" | "cancelled"
          image_url?: string | null
          created_by: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          date?: string
          time?: string
          location?: string
          total_tickets?: number
          sold_tickets?: number
          ticket_price?: number
          status?: "active" | "completed" | "cancelled"
          image_url?: string | null
          created_by?: string
          created_at?: string
          updated_at?: string
        }
      }
      bookings: {
        Row: {
          id: string
          event_id: string
          customer_id: string
          customer_name: string
          customer_email: string
          customer_phone: string
          tickets: number
          amount: number
          status: "confirmed" | "checked-in" | "cancelled" | "refunded"
          payment_method: string
          transaction_id: string
          qr_code: string
          booking_date: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          event_id: string
          customer_id: string
          customer_name: string
          customer_email: string
          customer_phone: string
          tickets: number
          amount: number
          status?: "confirmed" | "checked-in" | "cancelled" | "refunded"
          payment_method: string
          transaction_id: string
          qr_code: string
          booking_date?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          event_id?: string
          customer_id?: string
          customer_name?: string
          customer_email?: string
          customer_phone?: string
          tickets?: number
          amount?: number
          status?: "confirmed" | "checked-in" | "cancelled" | "refunded"
          payment_method?: string
          transaction_id?: string
          qr_code?: string
          booking_date?: string
          created_at?: string
          updated_at?: string
        }
      }
      qr_scans: {
        Row: {
          id: string
          booking_id: string
          scanned_by: string
          scan_time: string
          status: "success" | "failed" | "duplicate"
          location: string | null
          created_at: string
        }
        Insert: {
          id?: string
          booking_id: string
          scanned_by: string
          scan_time?: string
          status?: "success" | "failed" | "duplicate"
          location?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          booking_id?: string
          scanned_by?: string
          scan_time?: string
          status?: "success" | "failed" | "duplicate"
          location?: string | null
          created_at?: string
        }
      }
      activity_logs: {
        Row: {
          id: string
          user_id: string
          action: string
          description: string
          metadata: any | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          action: string
          description: string
          metadata?: any | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          action?: string
          description?: string
          metadata?: any | null
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
