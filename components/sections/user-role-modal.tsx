"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { UserPlus, Shield, Users, UserCheck } from "lucide-react"

interface UserRoleModalProps {
  trigger?: React.ReactNode
  user?: {
    id?: number
    name: string
    email: string
    role: string
    status: string
    permissions?: string[]
  }
  onSave?: (userData: any) => void
}

const rolePermissions = {
  admin: [
    "Create/Edit/Delete Events",
    "Manage All Bookings",
    "User Management",
    "Financial Reports",
    "System Settings",
    "QR Code Management",
    "Export Data",
    "Analytics Access",
  ],
  "sub-admin": [
    "Create/Edit Events",
    "Manage Event Bookings",
    "View User Data",
    "Basic Reports",
    "QR Code Management",
    "Export Event Data",
  ],
  volunteer: ["QR Code Scanning", "Entry Management", "View Event Details", "Basic Attendee Info"],
  user: ["Book Tickets", "View My Bookings", "Download QR Codes", "Update Profile"],
}

export function UserRoleModal({ trigger, user, onSave }: UserRoleModalProps) {
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: "",
    role: user?.role || "user",
    status: user?.status || "active",
    sendWelcomeEmail: true,
  })

  const [isOpen, setIsOpen] = useState(false)

  const handleSave = () => {
    onSave?.(formData)
    setIsOpen(false)
    // Reset form if creating new user
    if (!user?.id) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        role: "user",
        status: "active",
        sendWelcomeEmail: true,
      })
    }
  }

  const getRoleIcon = (role: string) => {
    switch (role) {
      case "admin":
        return <Shield className="h-4 w-4" />
      case "sub-admin":
        return <UserCheck className="h-4 w-4" />
      case "volunteer":
        return <Users className="h-4 w-4" />
      default:
        return <Users className="h-4 w-4" />
    }
  }

  const getRoleColor = (role: string) => {
    switch (role) {
      case "admin":
        return "bg-purple-100 text-purple-800"
      case "sub-admin":
        return "bg-blue-100 text-blue-800"
      case "volunteer":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button className="bg-gradient-to-r from-green-600 to-green-700">
            <UserPlus className="h-4 w-4 mr-2" />
            Add User
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {user?.id ? "Edit User" : "Add New User"}
            {user?.id && (
              <Badge className={getRoleColor(formData.role)}>
                {getRoleIcon(formData.role)}
                <span className="ml-1 capitalize">{formData.role}</span>
              </Badge>
            )}
          </DialogTitle>
          <DialogDescription>
            {user?.id
              ? "Update user information and role permissions."
              : "Create a new user account and assign appropriate role permissions."}
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-6 py-4">
          {/* Basic Information */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter full name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Enter email address"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="Enter phone number"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="status">Account Status</Label>
              <Select value={formData.status} onValueChange={(value) => setFormData({ ...formData, status: value })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                  <SelectItem value="suspended">Suspended</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Role Selection */}
          <div className="space-y-2">
            <Label htmlFor="role">User Role *</Label>
            <Select value={formData.role} onValueChange={(value) => setFormData({ ...formData, role: value })}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="admin">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-purple-600" />
                    Admin - Full System Access
                  </div>
                </SelectItem>
                <SelectItem value="sub-admin">
                  <div className="flex items-center gap-2">
                    <UserCheck className="h-4 w-4 text-blue-600" />
                    Sub-Admin - Event Management
                  </div>
                </SelectItem>
                <SelectItem value="volunteer">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-green-600" />
                    Volunteer - Entry Management
                  </div>
                </SelectItem>
                <SelectItem value="user">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-gray-600" />
                    End User - Booking Only
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Role Permissions Preview */}
          <div className="space-y-3">
            <Label>Role Permissions</Label>
            <div className="p-4 bg-slate-50 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                {getRoleIcon(formData.role)}
                <span className="font-medium capitalize">{formData.role} Permissions:</span>
              </div>
              <div className="grid grid-cols-1 gap-2">
                {rolePermissions[formData.role as keyof typeof rolePermissions]?.map((permission, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-slate-700">{permission}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Options */}
          {!user?.id && (
            <div className="flex items-center space-x-2">
              <Checkbox
                id="welcome-email"
                checked={formData.sendWelcomeEmail}
                onCheckedChange={(checked) => setFormData({ ...formData, sendWelcomeEmail: checked as boolean })}
              />
              <Label htmlFor="welcome-email" className="text-sm">
                Send welcome email with login instructions
              </Label>
            </div>
          )}
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave} className="bg-gradient-to-r from-blue-600 to-purple-600">
            {user?.id ? "Update User" : "Create User"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
