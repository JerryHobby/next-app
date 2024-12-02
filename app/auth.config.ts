import type { NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const authConfig = {
  providers: [
    Credentials({
      async authorize(credentials) {
        // Add your authentication logic here
        // This is just a basic example
        if (credentials.username === "admin" && credentials.password === "admin") {
          return {
            id: "1",
            name: "Admin",
            email: "admin@example.com",
          }
        }
        return null
      }
    })
  ],
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard')
      if (isOnDashboard) {
        if (isLoggedIn) return true
        return false // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl))
      }
      return true
    },
  },
} satisfies NextAuthConfig
