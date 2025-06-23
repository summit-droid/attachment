import Link from "next/link"
import { Globe } from "lucide-react"
import { SignUpForm } from "@/components/auth/signup-form"

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <Link href="/" className="flex items-center justify-center gap-2 font-semibold text-2xl">
            <Globe className="h-8 w-8 text-primary" />
            <span>TourManager</span>
          </Link>
          <p className="mt-2 text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-primary hover:underline">
              Sign in
            </Link>
          </p>
        </div>
        <SignUpForm />
      </div>
    </div>
  )
}
