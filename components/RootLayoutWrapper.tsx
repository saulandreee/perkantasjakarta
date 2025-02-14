"use client"

import { usePathname } from "next/navigation"
import Header from "./Header"
// import Footer from "./Footer"
import type React from "react" // Added import for React

export default function RootLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isStudioPath = pathname.startsWith("/studio")

  if (isStudioPath) {
    return <>{children}</>
  }

  return (
    <>
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  )
}

