import type { Metadata } from "next"
import { Inter, Kanit } from "next/font/google"
import "./globals.css"
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/navigation'

const inter = Inter({ subsets: ["latin"] })
const kanit = Kanit({ weight: ['500'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: "BizBase",
  description: "A tool for organizing & managing business cards"
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
    <body className={`${inter.className} dark`}>
    <link rel="icon" href="/bizbase-favicon.png"/>
    <header className="flex justify-center">
      <div className="px-4 max-lg:px-6 h-14 flex items-center max-[1372px]:min-w-full min-[1372px]:min-w-[1372px]">
        <Link href="/" className="flex items-center justify-center" prefetch={false}>
          <Image src="/bizbase-logo.svg" alt="BizBase logo" height={12} width={20} className="mt-[2px]"/>
          <span className="sr-only">BizBase</span>
          <span className={`ml-2 text-lg font-semibold ${kanit.className}`}>BizBase</span>
        </Link>
        <Navigation/>
      </div>
    </header>
    {children}
    </body>
    </html>
  )
}
