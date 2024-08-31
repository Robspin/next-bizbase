import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Kanit } from 'next/font/google'
import FloatingCardsHero from '@/components/landing/floating-cards'
import Navigation from '@/components/navigation'
import Image from 'next/image'

const kanit = Kanit({ weight: ['500'], subsets: ['latin'] });


export default function Page() {

  return (
      <div className="flex flex-col min-h-[100dvh]">
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] relative">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h1 className={`text-3xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none ${kanit.className}`}>
                      Secure and Organized Business Cards
                    </h1>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                      Store, share, and manage your business cards with ease. Our cloud-based platform keeps your
                      contacts
                      organized and accessible from anywhere.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link
                        href="#"
                        className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        prefetch={false}
                    >
                      Get Started
                    </Link>
                    <Button
                        variant="outline"
                        className="border-primary text-primary hover:text-white hover:bg-primary hover:opacity-80"
                    >
                      Sign in
                    </Button>
                  </div>
                </div>
                <div className="flex justify-center items-center max-lg:my-20">
                  <FloatingCardsHero/>
                </div>
                {/*<img*/}
                {/*    src="/placeholder.svg"*/}
                {/*    width="550"*/}
                {/*    height="550"*/}
                {/*    alt="Hero"*/}
                {/*    className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"*/}
                {/*/>*/}
              </div>
            </div>
          </section>
          <div className="bg-muted">
            <div className="h-20 w-full bg-background rounded-bl-[60%] rounded-br-[60%]"/>
          </div>
          <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted relative">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2 mb-6">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-primary">Key Features</div>
                  <h2 className={`text-3xl font-bold tracking-tight sm:text-5xl ${kanit.className}`}>
                    Organize and Secure Your Business Cards
                  </h2>
                  <div className="w-full flex justify-center">
                    <p className="max-w-[600px] xl:max-w-[800px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                      Our cloud-based platform helps you store, share, and manage your business cards with ease. Access
                      your
                      contacts from anywhere, anytime.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                <div className="flex flex-col justify-center space-y-4">
                  <ul className="grid gap-6">
                    <li>
                      <Card className="p-4">
                        <div className="grid gap-1">
                          <h3 className={`text-2xl font-bold ${kanit.className}`}>Fast AI image parsing</h3>
                          <p className="text-muted-foreground text-sm">
                            Take a picture of your business card and the data is ready for storage.
                            No additional steps required.
                          </p>
                        </div>
                      </Card>
                    </li>
                    <li>
                      <Card className="p-4">
                        <div className="grid gap-1">
                          <h3 className={`text-2xl font-bold ${kanit.className}`}>Powerful Organization</h3>
                          <p className="text-muted-foreground text-sm">
                            Easily search, filter, and sort your business cards to find the right contact.
                          </p>
                        </div>
                      </Card>
                    </li>
                    <li>
                      <Card className="p-4">
                        <div className="grid gap-1">
                          <h3 className={`text-2xl font-bold ${kanit.className}`}>Secure Storage</h3>
                          <p className="text-muted-foreground text-sm">
                            Keep your business cards safe and secure in our cloud-based storage.
                          </p>
                        </div>
                      </Card>
                    </li>
                    <li>
                      <Card className="p-4">
                        <div className="grid gap-1">
                          <h3 className={`text-2xl font-bold ${kanit.className}`}>Easy Sharing</h3>
                          <p className="text-muted-foreground text-sm">
                            Share your contacts with colleagues and clients with a few clicks.
                          </p>
                        </div>
                      </Card>
                    </li>
                  </ul>
                </div>
                <Image
                    src="/smiling-girl-business-card.png"
                    width={1024}
                    height={800}
                    alt="smiling-girl-business-card"
                    className="mx-auto overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                />
              </div>
            </div>
          </section>
          <div className="bg-muted">
            <div className="h-20 w-full bg-background rounded-tl-[60%] rounded-tr-[60%]"/>
          </div>
          <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Pricing</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Affordable Plans for Every
                    Business</h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center">
                    Get started for free
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                <Card className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Free</h3>
                    <p className="text-4xl font-bold">$0</p>
                    <p className="text-muted-foreground">per month</p>
                  </div>
                  <ul className="grid gap-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 text-primary"/>
                      10 business cards
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 text-primary"/>
                      10 AI photo uploads a month
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 text-primary"/>
                      Limited sharing
                    </li>
                  </ul>
                  <Button className="w-full">Get Started</Button>
                </Card>
                <Card className="p-6 space-y-4 border-primary bg-rose-50 dark:bg-card">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Pro</h3>
                    <p className="text-4xl font-bold">$20</p>
                    <p>per year</p>
                  </div>
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4"/>
                      500 business cards
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4"/>
                      500 AI photo uploads a month
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4"/>
                      Unlimited sharing
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4"/>
                      Support
                    </li>
                  </ul>
                  <Button className="w-full">Get Pro</Button>
                </Card>
                <Card className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Enterprise</h3>
                    <p className="text-4xl font-bold">Custom</p>
                    <p className="text-muted-foreground">pricing</p>
                  </div>
                  <ul className="grid gap-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 text-primary"/>
                      Customized storage and sharing
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 text-primary"/>
                      Advanced analytics and reporting
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 text-primary"/>
                      Dedicated account management
                    </li>
                  </ul>
                  <Link href="/contact">
                    <Button className="w-full mt-2">Contact Sales</Button>
                  </Link>
                </Card>
              </div>
            </div>
          </section>
          <section id="contact" className="w-full py-12 md:py-24 lg:py-32 border-t bg-muted">
            <div className="container px-4 md:px-6">
              <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-primary">Contact Us</div>
                  <h2 className={`lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] ${kanit.className}`}>
                    Have a question? Get in touch.
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                    Our team is here to help you get the most out of Biz Card. Contact us with any questions or
                    feedback.
                  </p>
                </div>
                <div className="flex items-center justify-center">
                    <Link href="/contact">
                      <Button>
                        Open the contact form
                      </Button>
                    </Link>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 border-t">
            <div className="container px-4 md:px-6 flex items-center justify-center">
              <div>BizBase</div>
            </div>
          </section>
        </main>
      </div>
  )
}

function CheckIcon(props: any) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
  )
}


function CreditCardIcon(props: any) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <rect width="20" height="14" x="2" y="5" rx="2" />
        <line x1="2" x2="22" y1="10" y2="10" />
      </svg>
  )
}