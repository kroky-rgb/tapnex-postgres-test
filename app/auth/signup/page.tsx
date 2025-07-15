import { SignupForm } from "@/components/auth/signup-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sign Up | TapNex",
  description: "Create a TapNex account to start managing your events with our NFC payment system.",
}

export default function SignupPage() {
  return <SignupForm />
}
