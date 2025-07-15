import { AuthGuard } from "@/components/auth/auth-guard"
import { DashboardContent } from "@/components/sections/dashboard-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dashboard | TapNex",
  description: "Manage your events, bookings, and analytics with TapNex dashboard.",
}

export default function DashboardPage() {
  return (
    <AuthGuard>
      <DashboardContent />
    </AuthGuard>
  )
}
