"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Calendar, CreditCard, DollarSign, Activity, Wifi, CreditCardIcon as PaymentIcon } from "lucide-react"

interface OverviewSectionProps {
  role: string
}

export function OverviewSection({ role }: OverviewSectionProps) {
  // Mock data - replace with real data from your API
  const stats = {
    totalEvents: 12,
    totalBookings: 1247,
    totalRevenue: 45670,
    activeUsers: 892,
    qrScans: 3456,
    pendingApprovals: 23,
  }

  const getStatsForRole = () => {
    if (role === "admin") {
      return [
        {
          title: "Total Events",
          value: stats.totalEvents,
          description: "Active events",
          icon: Calendar,
          color: "text-purple-600",
          bgColor: "bg-purple-100",
        },
        {
          title: "Total Bookings",
          value: stats.totalBookings,
          description: "All time bookings",
          icon: CreditCard,
          color: "text-blue-600",
          bgColor: "bg-blue-100",
        },
        {
          title: "Revenue",
          value: `₹${stats.totalRevenue.toLocaleString()}`,
          description: "Total revenue",
          icon: DollarSign,
          color: "text-green-600",
          bgColor: "bg-green-100",
        },
        {
          title: "Active Users",
          value: stats.activeUsers,
          description: "Registered users",
          icon: Users,
          color: "text-orange-600",
          bgColor: "bg-orange-100",
        },
      ]
    } else if (role === "sub-admin") {
      return [
        {
          title: "Managed Events",
          value: 8,
          description: "Events under management",
          icon: Calendar,
          color: "text-purple-600",
          bgColor: "bg-purple-100",
        },
        {
          title: "Event Bookings",
          value: 856,
          description: "Bookings for your events",
          icon: CreditCard,
          color: "text-blue-600",
          bgColor: "bg-blue-100",
        },
        {
          title: "Revenue Generated",
          value: `₹${(stats.totalRevenue * 0.6).toLocaleString()}`,
          description: "From your events",
          icon: DollarSign,
          color: "text-green-600",
          bgColor: "bg-green-100",
        },
      ]
    } else if (role === "volunteer") {
      return [
        {
          title: "Events Assigned",
          value: 3,
          description: "Events you're helping with",
          icon: Calendar,
          color: "text-purple-600",
          bgColor: "bg-purple-100",
        },
        {
          title: "Hours Worked",
          value: 24,
          description: "This week",
          icon: Activity,
          color: "text-blue-600",
          bgColor: "bg-blue-100",
        },
      ]
    } else {
      // Customer - Show personal spending stats
      return [
        {
          title: "My Bookings",
          value: 5,
          description: "Total bookings made",
          icon: CreditCard,
          color: "text-purple-600",
          bgColor: "bg-purple-100",
        },
        {
          title: "Events Attended",
          value: 3,
          description: "Events you've attended",
          icon: Calendar,
          color: "text-blue-600",
          bgColor: "bg-blue-100",
        },
        {
          title: "Amount Spent",
          value: `₹${(1250).toLocaleString()}`,
          description: "Total spending",
          icon: DollarSign,
          color: "text-green-600",
          bgColor: "bg-green-100",
        },
      ]
    }
  }

  const roleStats = getStatsForRole()

  // Recent Activity based on role
  const getRecentActivity = () => {
    if (role === "customer") {
      // Customer sees only their own activity
      return [
        { action: "Booked ticket for Tech Fest 2024", time: "2 hours ago", type: "booking" },
        { action: "Payment processed for Cultural Night", time: "1 day ago", type: "payment" },
        { action: "Checked in to Sports Meet 2024", time: "3 days ago", type: "scan" },
        { action: "Cancelled booking for Workshop", time: "1 week ago", type: "booking" },
      ]
    } else {
      // Admin, Sub-Admin, Volunteer see system activity
      return [
        { action: "New booking received", time: "2 minutes ago", type: "booking" },
        { action: "Event 'Tech Fest 2024' updated", time: "1 hour ago", type: "event" },
        { action: "QR code scanned for entry", time: "3 hours ago", type: "scan" },
        { action: "Payment processed successfully", time: "5 hours ago", type: "payment" },
      ]
    }
  }

  const recentActivity = getRecentActivity()

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Overview</h2>
        <p className="text-gray-600">
          {role === "admin" && "Complete system overview and management controls"}
          {role === "sub-admin" && "Your events and management dashboard"}
          {role === "volunteer" && "Your volunteer activities and assigned tasks"}
          {role === "customer" && "Your bookings and event history"}
        </p>
      </div>

      {/* Quick Stats - Admin and Sub-Admin only, Customer gets personal stats */}
      {(role === "admin" || role === "sub-admin" || role === "customer") && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roleStats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-purple-500">
              {" "}
              {/* Added border for visual appeal */}
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
                <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={`h-4 w-4 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <p className="text-xs text-gray-500 mt-1">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Upcoming Events - All Roles */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-purple-700">
            <Calendar className="h-5 w-5" />
            <span>Upcoming Events</span>
          </CardTitle>
          <CardDescription>Events coming up soon</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { name: "Tech Fest 2024", date: "March 15, 2024", location: "Main Campus", tickets: "342/500 sold" },
              { name: "Cultural Night", date: "March 20, 2024", location: "Open Air Theatre", tickets: "156/300 sold" },
              { name: "Workshop Series", date: "March 25, 2024", location: "Conference Hall", tickets: "89/150 sold" },
            ].map((event, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-purple-50 rounded-lg border border-purple-200"
              >
                <div>
                  <p className="text-sm font-medium text-gray-900">{event.name}</p>
                  <p className="text-xs text-gray-500">
                    {event.date} • {event.location}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">{event.tickets}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Payment Gateway Status - Admin Only */}
      {role === "admin" && (
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-blue-700">
              <PaymentIcon className="h-5 w-5" />
              <span>Payment Gateway Status</span>
            </CardTitle>
            <CardDescription>Current status of payment integrations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="font-medium">Razorpay</span>
                </div>
                <span className="text-sm text-green-600">Active</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="font-medium">Stripe</span>
                </div>
                <span className="text-sm text-green-600">Active</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <span className="font-medium">PayPal</span>
                </div>
                <span className="text-sm text-yellow-600">Maintenance</span>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Integration API Status - Admin and Sub-Admin */}
      {(role === "admin" || role === "sub-admin") && (
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-green-700">
              <Wifi className="h-5 w-5" />
              <span>Integration API Status</span>
            </CardTitle>
            <CardDescription>Status of external API integrations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="font-medium">SMS Gateway</span>
                </div>
                <span className="text-sm text-green-600">Online</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="font-medium">Email Service</span>
                </div>
                <span className="text-sm text-green-600">Online</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="font-medium">QR Code API</span>
                </div>
                <span className="text-sm text-green-600">Online</span>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Recent Activity - Admin, Sub-Admin, Volunteer, and Customer (personalized) */}
      {(role === "admin" || role === "sub-admin" || role === "volunteer" || role === "customer") && (
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-orange-700">
              <Activity className="h-5 w-5" />
              <span>Recent Activity</span>
            </CardTitle>
            <CardDescription>
              {role === "customer" ? "Your recent activity" : "Latest system actions and updates"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg border border-orange-200"
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      activity.type === "booking"
                        ? "bg-green-500"
                        : activity.type === "event"
                          ? "bg-blue-500"
                          : activity.type === "scan"
                            ? "bg-purple-500"
                            : "bg-orange-500"
                    }`}
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
