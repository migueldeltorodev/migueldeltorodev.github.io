import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Loader } from "@/components/ui/loader"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ETECSA Programa de iniciación",
  description: "Construyendo el futuro digital a través de la excelencia de nuestros egresados"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </body>
    </html>
  )
}



import './globals.css'