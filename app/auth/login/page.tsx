import { LoginForm } from "@/components/auth/login-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sign In | TapNex",
  description: "Sign in to your TapNex account to manage events and access your dashboard.",
}

export default function LoginPage() {
  return <LoginForm />
}
