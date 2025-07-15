"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, TrendingDown, DollarSign, Users, Calendar, Download, BarChart3, Activity } from "lucide-react"

interface AnalyticsSectionProps {
  role: string
}

export function AnalyticsSection({ role }: AnalyticsSectionProps) {
  // Mock analytics data
  const analytics = {
    revenue: {
      total: 125670,
      growth: 12.5,
      trend: "up",
    },
    bookings: {
      total: 1247,
      growth: 8.3,
      trend: "up",
    },
    events: {
      total: 12,
      growth: -2.1,
      trend: "down",
    },
    users: {
      total: 892,
      growth: 15.7,
      trend: "up",
    },
  }

  const revenueByEvent = [
    { name: "Tech Fest 2024", revenue: 45670, bookings: 342 },
    { name: "Cultural Night", revenue: 31044, bookings: 156 },
    { name: "Sports Meet 2024", revenue: 19800, bookings: 200 },
    { name: "Workshop Series", revenue: 15600, bookings: 120 },
    { name: "Alumni Meet", revenue: 13556, bookings: 89 },
  ]

  const monthlyData = [
    { month: "Jan", revenue: 25000, bookings: 180 },
    { month: "Feb", revenue: 32000, bookings: 220 },
    { month: "Mar", revenue: 28000, bookings: 195 },
    { month: "Apr", revenue: 35000, bookings: 250 },
    { month: "May", revenue: 42000, bookings: 310 },
    { month: "Jun", revenue: 38000, bookings: 280 },
  ]

  // Corrected: getTrendIconComponent now returns the component directly
  const getTrendIconComponent = (trend: string) => {
    return trend === "up" ? TrendingUp : TrendingDown
  }

  const getTrendColor = (trend: string) => {
    return trend === "up" ? "text-green-600" : "text-red-600"
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h2>
          <p className="text-gray-600">Comprehensive insights and performance metrics</p>
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white">
          <Download className="w-4 h-4 mr-2" />
          Export Report
        </Button>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-l-4 border-purple-500 shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">₹{analytics.revenue.total.toLocaleString()}</div>
            <div className={`flex items-center text-xs ${getTrendColor(analytics.revenue.trend)}`}>
              {/* Corrected usage of getTrendIconComponent */}
              {(() => {
                const TrendIcon = getTrendIconComponent(analytics.revenue.trend)
                return <TrendIcon className="w-3 h-3 mr-1" />
              })()}
              {analytics.revenue.growth}% from last month
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-blue-500 shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Bookings</CardTitle>
            <Calendar className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{analytics.bookings.total.toLocaleString()}</div>
            <div className={`flex items-center text-xs ${getTrendColor(analytics.bookings.trend)}`}>
              {(() => {
                const TrendIcon = getTrendIconComponent(analytics.bookings.trend)
                return <TrendIcon className="w-3 h-3 mr-1" />
              })()}
              {analytics.bookings.growth}% from last month
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-green-500 shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Active Events</CardTitle>
            <Activity className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{analytics.events.total}</div>
            <div className={`flex items-center text-xs ${getTrendColor(analytics.events.trend)}`}>
              {(() => {
                const TrendIcon = getTrendIconComponent(analytics.events.trend)
                return <TrendIcon className="w-3 h-3 mr-1" />
              })()}
              {Math.abs(analytics.events.growth)}% from last month
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-orange-500 shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Users</CardTitle>
            <Users className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{analytics.users.total.toLocaleString()}</div>
            <div className={`flex items-center text-xs ${getTrendColor(analytics.users.trend)}`}>
              {(() => {
                const TrendIcon = getTrendIconComponent(analytics.users.trend)
                return <TrendIcon className="w-3 h-3 mr-1" />
              })()}
              {analytics.users.growth}% from last month
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue by Event */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-purple-700">
              <BarChart3 className="w-5 h-5" />
              <span>Revenue by Event</span>
            </CardTitle>
            <CardDescription>Top performing events by revenue</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {revenueByEvent.map((event, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-slate-800">{event.name}</span>
                      <span className="text-sm text-gray-600">₹{event.revenue.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-purple-600 h-2 rounded-full"
                        style={{ width: `${(event.revenue / revenueByEvent[0].revenue) * 100}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">{event.bookings} bookings</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Monthly Trends */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-blue-700">
              <TrendingUp className="w-5 h-5" />
              <span>Monthly Trends</span>
            </CardTitle>
            <CardDescription>Revenue and booking trends over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {monthlyData.map((data, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200"
                >
                  <div className="flex items-center space-x-4">
                    <span className="font-medium text-gray-900">{data.month}</span>
                    <div className="text-sm text-gray-600">{data.bookings} bookings</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-gray-900">₹{data.revenue.toLocaleString()}</div>
                    <div className="text-xs text-gray-500 mt-1">
                      {index > 0 && (
                        <span
                          className={data.revenue > monthlyData[index - 1].revenue ? "text-green-600" : "text-red-600"}
                        >
                          {data.revenue > monthlyData[index - 1].revenue ? "↗" : "↘"}
                          {Math.abs(
                            ((data.revenue - monthlyData[index - 1].revenue) / monthlyData[index - 1].revenue) * 100,
                          ).toFixed(1)}
                          %
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Insights */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-green-700">Performance Insights</CardTitle>
          <CardDescription>Key insights and recommendations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center space-x-2 mb-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <span className="font-medium text-green-800">Strong Growth</span>
              </div>
              <p className="text-sm text-green-700">
                Revenue increased by 12.5% this month, driven by higher ticket sales for Tech Fest 2024.
              </p>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center space-x-2 mb-2">
                <Users className="w-5 h-5 text-blue-600" />
                <span className="font-medium text-blue-800">User Engagement</span>
              </div>
              <p className="text-sm text-blue-700">
                User registration is up 15.7%, indicating strong interest in upcoming events.
              </p>
            </div>

            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
              <div className="flex items-center space-x-2 mb-2">
                <Activity className="w-5 h-5 text-orange-600" />
                <span className="font-medium text-orange-800">Optimization Opportunity</span>
              </div>
              <p className="text-sm text-orange-700">
                Consider increasing marketing for Cultural Night to boost ticket sales.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
