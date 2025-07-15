"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, UserPlus, Edit, Trash2, Shield, Mail, Calendar, MoreHorizontal } from "lucide-react"

interface UsersSectionProps {
  role: string
}

export function UsersSection({ role }: UsersSectionProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [roleFilter, setRoleFilter] = useState("all")

  // Mock users data
  const users = [
    {
      id: "1",
      email: "niruwu2006@gmail.com",
      fullName: "Admin User",
      role: "admin",
      createdAt: "2024-01-01T00:00:00Z",
      lastLogin: "2024-01-20T10:30:00Z",
      status: "active",
    },
    {
      id: "2",
      email: "subadmin@tapnex.com",
      fullName: "Sub Admin",
      role: "sub-admin",
      createdAt: "2024-01-05T00:00:00Z",
      lastLogin: "2024-01-19T15:20:00Z",
      status: "active",
    },
    {
      id: "3",
      email: "volunteer1@tapnex.com",
      fullName: "John Volunteer",
      role: "volunteer",
      createdAt: "2024-01-10T00:00:00Z",
      lastLogin: "2024-01-18T09:45:00Z",
      status: "active",
    },
    {
      id: "4",
      email: "customer1@example.com",
      fullName: "Jane Customer",
      role: "customer",
      createdAt: "2024-01-15T00:00:00Z",
      lastLogin: "2024-01-17T14:30:00Z",
      status: "active",
    },
    {
      id: "5",
      email: "customer2@example.com",
      fullName: "Mike Customer",
      role: "customer",
      createdAt: "2024-01-16T00:00:00Z",
      lastLogin: "2024-01-16T16:00:00Z",
      status: "inactive",
    },
  ]

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesRole = roleFilter === "all" || user.role === roleFilter

    return matchesSearch && matchesRole
  })

  const getRoleColor = (role: string) => {
    switch (role) {
      case "admin":
        return "bg-red-100 text-red-800"
      case "sub-admin":
        return "bg-orange-100 text-orange-800"
      case "volunteer":
        return "bg-blue-100 text-blue-800"
      case "customer":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusColor = (status: string) => {
    return status === "active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
  }

  const userStats = {
    total: users.length,
    admins: users.filter((u) => u.role === "admin").length,
    subAdmins: users.filter((u) => u.role === "sub-admin").length,
    volunteers: users.filter((u) => u.role === "volunteer").length,
    customers: users.filter((u) => u.role === "customer").length,
    active: users.filter((u) => u.status === "active").length,
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">User Management</h2>
          <p className="text-gray-600">Manage users and their roles</p>
        </div>
        <Button>
          <UserPlus className="w-4 h-4 mr-2" />
          Add User
        </Button>
      </div>

      {/* User Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-gray-900">{userStats.total}</div>
            <p className="text-xs text-gray-500">Total Users</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-red-600">{userStats.admins}</div>
            <p className="text-xs text-gray-500">Admins</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-orange-600">{userStats.subAdmins}</div>
            <p className="text-xs text-gray-500">Sub-Admins</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-blue-600">{userStats.volunteers}</div>
            <p className="text-xs text-gray-500">Volunteers</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-gray-600">{userStats.customers}</div>
            <p className="text-xs text-gray-500">Customers</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-green-600">{userStats.active}</div>
            <p className="text-xs text-gray-500">Active</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <select
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Roles</option>
          <option value="admin">Admin</option>
          <option value="sub-admin">Sub-Admin</option>
          <option value="volunteer">Volunteer</option>
          <option value="customer">Customer</option>
        </select>
      </div>

      {/* Users Table */}
      <Card>
        <CardHeader>
          <CardTitle>Users</CardTitle>
          <CardDescription>Manage user accounts and permissions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredUsers.map((user) => (
              <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-gray-600">
                      {user.fullName
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-gray-900">{user.fullName}</span>
                      <Badge className={getRoleColor(user.role)}>
                        <Shield className="w-3 h-3 mr-1" />
                        {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                      </Badge>
                      <Badge className={getStatusColor(user.status)}>{user.status}</Badge>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Mail className="w-3 h-3" />
                        <span>{user.email}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>Joined {new Date(user.createdAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="outline">
                    <Edit className="w-4 h-4 mr-1" />
                    Edit
                  </Button>
                  {user.role !== "admin" && (
                    <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700 bg-transparent">
                      <Trash2 className="w-4 h-4 mr-1" />
                      Delete
                    </Button>
                  )}
                  <Button size="sm" variant="ghost">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {filteredUsers.length === 0 && (
            <div className="text-center py-8">
              <Shield className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No users found</h3>
              <p className="text-gray-600">
                {searchTerm || roleFilter !== "all"
                  ? "Try adjusting your search or filter criteria"
                  : "No users have been created yet"}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
