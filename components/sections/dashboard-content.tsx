"use client"

import { useAuth } from "@/components/auth/auth-provider"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Calendar, CreditCard, QrCode, BarChart3, Settings, Shield, TrendingUp } from "lucide-react"
import { OverviewSection } from "./dashboard/overview-section"
import { EventsSection } from "./dashboard/events-section"
import { BookingsSection } from "./dashboard/bookings-section"
import { QRSection } from "./dashboard/qr-section"
import { AnalyticsSection } from "./dashboard/analytics-section"
import { UsersSection } from "./dashboard/users-section"

export function DashboardContent() {
  const { user, profile, loading } = useAuth()

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600"></div>
      </div>
    )
  }

  if (!user || !profile) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Access Denied</h3>
              <p className="text-sm text-gray-600">Please sign in to access the dashboard.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  const getRoleColor = (role: string) => {
    switch (role) {
      case "admin":
        return "bg-red-100 text-red-800"
      case "sub-admin":
        return "bg-orange-100 text-orange-800"
      case "volunteer":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  // Define available tabs based on role according to your agenda
  const getAvailableTabs = () => {
    const baseTabs = [{ id: "overview", label: "Overview", icon: BarChart3 }]

    if (profile.role === "admin") {
      return [
        ...baseTabs,
        { id: "events", label: "Events", icon: Calendar },
        { id: "bookings", label: "Bookings", icon: CreditCard },
        { id: "qr-scanning", label: "QR Code", icon: QrCode },
        { id: "analytics", label: "Analytics", icon: TrendingUp },
        { id: "users", label: "Users", icon: Users },
      ]
    } else if (profile.role === "sub-admin") {
      return [
        ...baseTabs,
        { id: "events", label: "Events", icon: Calendar },
        { id: "bookings", label: "Bookings", icon: CreditCard },
        { id: "qr-scanning", label: "QR Code", icon: QrCode },
        { id: "analytics", label: "Analytics", icon: TrendingUp },
      ]
    } else if (profile.role === "volunteer") {
      return [
        ...baseTabs,
        { id: "events", label: "Events", icon: Calendar },
        { id: "bookings", label: "Bookings", icon: CreditCard },
        { id: "qr-scanning", label: "QR Code", icon: QrCode },
      ]
    } else {
      // Customer
      return [
        ...baseTabs,
        { id: "events", label: "Events", icon: Calendar },
        { id: "bookings", label: "My Bookings", icon: CreditCard },
        { id: "qr-scanning", label: "QR Code", icon: QrCode },
      ]
    }
  }

  const availableTabs = getAvailableTabs()

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <div className="flex items-center gap-2 mt-1">
              <p className="text-gray-600">Welcome back, {profile.full_name || profile.email}</p>
              <Badge className={getRoleColor(profile.role)}>
                <Shield className="w-3 h-3 mr-1" />
                {profile.role.charAt(0).toUpperCase() + profile.role.slice(1)}
              </Badge>
              <Button
                variant="outline"
                size="sm"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
              >
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Tabs */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 bg-gray-100 rounded-lg p-1">
          {availableTabs.map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className="flex items-center space-x-2 data-[state=active]:bg-purple-600 data-[state=active]:text-white data-[state=active]:shadow-md data-[state=active]:font-semibold transition-all duration-200 hover:bg-purple-50 hover:text-purple-700"
            >
              <tab.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{tab.label}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="overview">
          <OverviewSection role={profile.role} />
        </TabsContent>

        {availableTabs.find((tab) => tab.id === "events") && (
          <TabsContent value="events">
            <EventsSection role={profile.role} />
          </TabsContent>
        )}

        {availableTabs.find((tab) => tab.id === "bookings") && (
          <TabsContent value="bookings">
            <BookingsSection role={profile.role} />
          </TabsContent>
        )}

        {availableTabs.find((tab) => tab.id === "qr-scanning") && (
          <TabsContent value="qr-scanning">
            <QRSection role={profile.role} />
          </TabsContent>
        )}

        {availableTabs.find((tab) => tab.id === "analytics") && (
          <TabsContent value="analytics">
            <AnalyticsSection role={profile.role} />
          </TabsContent>
        )}

        {availableTabs.find((tab) => tab.id === "users") && (
          <TabsContent value="users">
            <UsersSection role={profile.role} />
          </TabsContent>
        )}
      </Tabs>
    </div>
  )
}
