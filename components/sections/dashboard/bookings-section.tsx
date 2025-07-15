"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Download, Eye, Calendar, User, Mail, Phone, CreditCard, QrCode } from "lucide-react"

interface BookingsSectionProps {
  role: string
}

export function BookingsSection({ role }: BookingsSectionProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  // Mock bookings data - Admin sees all, Customer sees only their own
  const allBookings = [
    {
      id: "BK001",
      eventName: "Tech Fest 2024",
      customerName: "John Doe",
      customerEmail: "john@example.com",
      customerPhone: "+91 9876543210",
      tickets: 2,
      amount: 598,
      status: "confirmed",
      paymentMethod: "UPI",
      transactionId: "TXN123456789",
      qrCode: "QR001",
      bookingDate: "2024-01-15T10:30:00Z",
      isCurrentUser: false,
    },
    {
      id: "BK002",
      eventName: "Cultural Night",
      customerName: "Jane Smith",
      customerEmail: "jane@example.com",
      customerPhone: "+91 9876543211",
      tickets: 1,
      amount: 199,
      status: "checked-in",
      paymentMethod: "Card",
      transactionId: "TXN123456790",
      qrCode: "QR002",
      bookingDate: "2024-01-16T14:20:00Z",
      isCurrentUser: false,
    },
    {
      id: "BK003",
      eventName: "Sports Meet 2024",
      customerName: "Current User", // This would be the logged-in customer
      customerEmail: "customer@example.com",
      customerPhone: "+91 9876543212",
      tickets: 3,
      amount: 297,
      status: "cancelled",
      paymentMethod: "UPI",
      transactionId: "TXN123456791",
      qrCode: "QR003",
      bookingDate: "2024-01-17T09:15:00Z",
      isCurrentUser: true,
    },
    {
      id: "BK004",
      eventName: "Workshop Series",
      customerName: "Current User", // This would be the logged-in customer
      customerEmail: "customer@example.com",
      customerPhone: "+91 9876543212",
      tickets: 1,
      amount: 150,
      status: "confirmed",
      paymentMethod: "Card",
      transactionId: "TXN123456792",
      qrCode: "QR004",
      bookingDate: "2024-01-18T11:20:00Z",
      isCurrentUser: true,
    },
  ]

  // Filter bookings based on role
  const getBookingsForRole = () => {
    if (role === "customer") {
      // Customer sees only their own bookings
      return allBookings.filter((booking) => booking.isCurrentUser)
    } else {
      // Admin sees all bookings
      return allBookings
    }
  }

  const bookings = getBookingsForRole()

  const filteredBookings = bookings.filter((booking) => {
    const matchesSearch =
      booking.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.customerEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.eventName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.id.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || booking.status === statusFilter

    return matchesSearch && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-blue-100 text-blue-800"
      case "checked-in":
        return "bg-green-100 text-green-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
      case "refunded":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            {role === "customer" ? "My Bookings" : "Bookings Management"}
          </h2>
          <p className="text-gray-600">
            {role === "customer" ? "View your event bookings and tickets" : "Manage all event bookings"}
          </p>
        </div>
        <Button>
          <Download className="w-4 h-4 mr-2" />
          Export
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search bookings..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Status</option>
          <option value="confirmed">Confirmed</option>
          <option value="checked-in">Checked In</option>
          <option value="cancelled">Cancelled</option>
          <option value="refunded">Refunded</option>
        </select>
      </div>

      {/* Bookings List */}
      <div className="space-y-4">
        {filteredBookings.map((booking) => (
          <Card key={booking.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                <div className="flex-1 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{booking.eventName}</h3>
                      <p className="text-sm text-gray-500">Booking ID: {booking.id}</p>
                    </div>
                    <Badge className={getStatusColor(booking.status)}>
                      {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                    {/* Show customer details only for admin */}
                    {role === "admin" && (
                      <>
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4 text-gray-400" />
                          <span>{booking.customerName}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="w-4 h-4 text-gray-400" />
                          <span>{booking.customerEmail}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="w-4 h-4 text-gray-400" />
                          <span>{booking.customerPhone}</span>
                        </div>
                      </>
                    )}
                    <div className="flex items-center space-x-2">
                      <CreditCard className="w-4 h-4 text-gray-400" />
                      <span>
                        ₹{booking.amount} ({booking.tickets} tickets)
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span>{new Date(booking.bookingDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <QrCode className="w-4 h-4 text-gray-400" />
                      <span>{booking.qrCode}</span>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">
                    <Eye className="w-4 h-4 mr-1" />
                    View
                  </Button>
                  {role === "admin" && booking.status === "confirmed" && <Button size="sm">Check In</Button>}
                  {booking.status === "confirmed" && (
                    <Button size="sm" variant="outline" className="text-red-600 bg-transparent">
                      Cancel
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredBookings.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <CreditCard className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No bookings found</h3>
            <p className="text-gray-600">
              {searchTerm || statusFilter !== "all"
                ? "Try adjusting your search or filter criteria"
                : role === "customer"
                  ? "You haven't made any bookings yet"
                  : "No bookings have been made yet"}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
