"use client"
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

type Props = {}

export default function Navigation({}: Props) {
    const handleNavClick = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <nav className="ml-auto flex items-center gap-4 sm:gap-6">
            <button onClick={() => handleNavClick('features')}
                  className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer">
                Features
            </button>
            <button  onClick={() => handleNavClick('pricing')}
                  className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer">
                Pricing
            </button>
            <button onClick={() => handleNavClick('contact')}
                 className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer">
                Contact
            </button>
            <Button variant="ghost" className="text-primary hover:text-primary">
                Sign in
            </Button>
        </nav>
    )
}
