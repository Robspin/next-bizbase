import React from 'react'
import ContactForm from '@/components/contact-form'
import { Kanit } from 'next/font/google'

const kanit = Kanit({ weight: ['500'], subsets: ['latin'] });

type Props = {}

export default function Page({}: Props) {
    return (
        <div className="flex justify-center items-center px-8">
            <div className="w-full flex flex-col items-center py-12 md:py-24 lg:py-32 space-y-12 max-[1372px]:min-w-full min-[1372px]:min-w-[1372px]">
                <h1 className={`text-3xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none ${kanit.className}`}>
                    Contact us
                </h1>
                <div className="w-full flex justify-center">
                    <div className="inline-block">
                        <ContactForm/>
                    </div>
                </div>
            </div>
    </div>
)
}
