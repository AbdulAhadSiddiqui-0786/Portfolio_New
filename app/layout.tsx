import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "Abdul Ahad Siddiqui | Full Stack Developer",
  description: "Portfolio of Abdul Ahad Siddiqui, a Full Stack Web Developer specializing in the MERN stack.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-slate-900 text-slate-400 selection:bg-teal-300/30 selection:text-teal-300`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
