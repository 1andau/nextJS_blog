"use client"

import './globals.css'
import { Inter } from 'next/font/google'
import { draftMode } from "next/headers";
import Container from './components/container';
import Footer from './components/Footer';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <div className="min-h-screen">
          <main>
            <Container>{children}</Container>
          </main>
        </div>
        <Footer />
      </body>
    </html>
  )
}
