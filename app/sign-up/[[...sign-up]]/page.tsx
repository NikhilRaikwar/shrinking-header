import { SignUp } from "@clerk/nextjs"

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-900">
      <div className="w-full max-w-md">
        <SignUp 
          appearance={{
            elements: {
              rootBox: "mx-auto",
              card: "bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl",
              headerTitle: "text-white",
              headerSubtitle: "text-gray-300",
              formButtonPrimary: "bg-blue-600 hover:bg-blue-700",
              formFieldInput: "bg-white/10 border-white/20 text-white placeholder-gray-400",
              formFieldLabel: "text-white",
              footerActionLink: "text-blue-400 hover:text-blue-300",
              dividerLine: "bg-white/20",
              dividerText: "text-gray-300",
              socialButtonsBlockButton: "bg-white/10 border-white/20 text-white hover:bg-white/20",
            }
          }}
          redirectUrl="/dashboard"
        />
      </div>
    </div>
  )
} 