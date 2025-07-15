"use client"

import { Phone, Mail, MapPin, Clock, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Contact Details */}
      <Card className="card-professional border-l-4 border-l-slate-900 shadow-xl overflow-hidden bg-white/95 backdrop-blur-sm">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Get in Touch</h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 text-white rounded-lg flex items-center justify-center">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Phone</h4>
                <p className="text-slate-600">+91 78985 75626</p>
                <p className="text-slate-600">+91 80179 70125</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 text-white rounded-lg flex items-center justify-center">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
                <p className="text-slate-600">info@tapnex.tech</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 text-white rounded-lg flex items-center justify-center">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Address</h4>
                <div className="text-slate-600 text-sm">
                  <div className="mb-2">
                    <strong>Registered:</strong>
                    <br />
                    770/2 Ankur Colony, Makroniya
                    <br />
                    Sagar (M.P) 470004
                  </div>
                  <div>
                    <strong>Operations:</strong>
                    <br />
                    Harohalli, Bengaluru
                    <br />
                    Karnataka 562112
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-500 text-white rounded-lg flex items-center justify-center">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Business Hours</h4>
                <p className="text-slate-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-slate-600">Saturday: 10:00 AM - 4:00 PM</p>
                <p className="text-slate-600">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Google Calendar */}
      <Card className="border-2 border-slate-900 shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <Calendar className="h-6 w-6 text-blue-600" />
            Book a Demo
          </CardTitle>
        </CardHeader>
        <CardContent>
          <iframe
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ18bbt_azdPUekL8ZfqoyDZPLiFECTjxYyKJrsE6wPf18ibzDLV-phLuc3U9tlnKAqGw9FdF09F?gv=true"
            style={{ border: 0 }}
            width="100%"
            height="400"
            frameBorder="0"
            className="rounded-lg border-2 border-slate-900"
          />
        </CardContent>
      </Card>
    </div>
  )
}
