"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { QrCode, Scan, CheckCircle, XCircle, Clock, Search, Camera } from "lucide-react"

interface QRSectionProps {
  role: string
}

export function QRSection({ role }: QRSectionProps) {
  const [scanResult, setScanResult] = useState("")
  const [isScanning, setIsScanning] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  // Mock recent scans data - visible to Admin, Sub-Admin, and Volunteer
  const recentScans = [
    {
      id: "1",
      customerName: "John Doe",
      eventName: "Tech Fest 2024",
      bookingId: "BK001",
      status: "success",
      scanTime: "2024-01-20T10:30:00Z",
      scannedBy: "Volunteer 1",
      location: "Main Gate",
    },
    {
      id: "2",
      customerName: "Jane Smith",
      eventName: "Cultural Night",
      bookingId: "BK002",
      status: "success",
      scanTime: "2024-01-20T09:15:00Z",
      scannedBy: "Admin User",
      location: "Entry Point A",
    },
    {
      id: "3",
      customerName: "Mike Johnson",
      eventName: "Sports Meet 2024",
      bookingId: "BK003",
      status: "duplicate",
      scanTime: "2024-01-20T08:45:00Z",
      scannedBy: "Sub Admin",
      location: "Gate 2",
    },
  ]

  // Mock event-wise entry data - Admin only
  const eventWiseData = [
    { name: "Tech Fest 2024", entries: 342 },
    { name: "Cultural Night", entries: 156 },
    { name: "Sports Meet 2024", entries: 200 },
    { name: "Workshop Series", entries: 89 },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "success":
        return "bg-green-100 text-green-800"
      case "failed":
        return "bg-red-100 text-red-800"
      case "duplicate":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "success":
        return CheckCircle
      case "failed":
        return XCircle
      case "duplicate":
        return Clock
      default:
        return Clock
    }
  }

  const handleManualScan = () => {
    if (scanResult.trim()) {
      setIsScanning(true)
      setTimeout(() => {
        setIsScanning(false)
        alert(`QR Code ${scanResult} processed successfully!`)
        setScanResult("")
      }, 2000)
    }
  }

  const handleScanQR = () => {
    console.log("Open QR scanner")
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">QR Code Scanning</h2>
        <p className="text-gray-600">
          {role === "volunteer"
            ? "Scan QR codes for event entry verification"
            : "Monitor and manage QR code scanning activities"}
        </p>
      </div>

      {/* QR Scanner - All Roles */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <QrCode className="w-5 h-5" />
              <span>QR Code Scanner</span>
            </CardTitle>
            <CardDescription>Scan or manually enter QR codes</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-center h-48 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300">
              <div className="text-center">
                <Camera className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500">Camera scanner would appear here</p>
                <Button className="mt-2 bg-transparent" variant="outline" onClick={handleScanQR}>
                  <Camera className="w-4 h-4 mr-2" />
                  Start Camera
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Manual QR Code Entry</label>
              <div className="flex space-x-2">
                <Input
                  placeholder="Enter QR code manually"
                  value={scanResult}
                  onChange={(e) => setScanResult(e.target.value)}
                />
                <Button onClick={handleManualScan} disabled={isScanning || !scanResult.trim()}>
                  {isScanning ? (
                    <>
                      <Clock className="w-4 h-4 mr-2 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Scan className="w-4 h-4 mr-2" />
                      Scan
                    </>
                  )}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Today's Statistics - All Roles */}
        <Card>
          <CardHeader>
            <CardTitle>Today's Statistics</CardTitle>
            <CardDescription>QR scanning activity for today</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-medium">Successful Scans</span>
                </div>
                <span className="text-2xl font-bold text-green-600">234</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <XCircle className="w-5 h-5 text-red-600" />
                  <span className="font-medium">Failed Scans</span>
                </div>
                <span className="text-2xl font-bold text-red-600">12</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-yellow-600" />
                  <span className="font-medium">Duplicate Attempts</span>
                </div>
                <span className="text-2xl font-bold text-yellow-600">8</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Metrics and Event Wise Entry Data - Admin Only */}
      {role === "admin" && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Overall Metrics</CardTitle>
              <CardDescription>Complete QR scanning metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">3,456</div>
                  <div className="text-sm text-blue-600">Total Scans</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">3,234</div>
                  <div className="text-sm text-green-600">Successful</div>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <div className="text-2xl font-bold text-red-600">156</div>
                  <div className="text-sm text-red-600">Failed</div>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600">66</div>
                  <div className="text-sm text-yellow-600">Duplicates</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Event-wise Entry Data</CardTitle>
              <CardDescription>Entries per event</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {eventWiseData.map((event, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">{event.name}</span>
                    <span className="text-lg font-bold text-blue-600">{event.entries}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Recent Scans - Admin, Sub-Admin, and Volunteer */}
      {(role === "admin" || role === "sub-admin" || role === "volunteer") && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Recent Scans</CardTitle>
                <CardDescription>Recent QR code scanning activity</CardDescription>
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search scans..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentScans.map((scan) => {
                const StatusIcon = getStatusIcon(scan.status)
                return (
                  <div
                    key={scan.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex items-center space-x-4">
                      <StatusIcon
                        className={`w-5 h-5 ${
                          scan.status === "success"
                            ? "text-green-600"
                            : scan.status === "failed"
                              ? "text-red-600"
                              : "text-yellow-600"
                        }`}
                      />
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-medium">{scan.customerName}</span>
                          <Badge className={getStatusColor(scan.status)}>{scan.status}</Badge>
                        </div>
                        <div className="text-sm text-gray-500 space-x-4">
                          <span>{scan.eventName}</span>
                          <span>•</span>
                          <span>{scan.bookingId}</span>
                          <span>•</span>
                          <span>{scan.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right text-sm text-gray-500">
                      <div>{new Date(scan.scanTime).toLocaleString()}</div>
                      <div>by {scan.scannedBy}</div>
                    </div>
                  </div>
                )
              })}
            </div>

            {recentScans.length === 0 && (
              <div className="text-center py-8">
                <QrCode className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No scans found</h3>
                <p className="text-gray-600">
                  {searchTerm ? "Try adjusting your search criteria" : "No QR codes have been scanned yet"}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
}
