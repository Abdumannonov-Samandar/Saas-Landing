"use client"

import { CtaSection, Faq, Features, Hero, HowToWork, Logos, Pricing, Testimonials } from '@/components/common'

export default function LandingPage() { 
  return (
      <main className="flex-1">

        {/* Hero Section */}
        <Hero />

        {/* Logos Section */}
        <Logos />

        {/* Features Section */}
        <Features />

        {/* How It Works Section */}
        <HowToWork />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Pricing Section */}
        <Pricing />

        {/* FAQ Section */}
        <Faq />

        {/* CTA Section */}
        <CtaSection />
      </main>
  )
}
