"use client"

import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Contact() {
  return (
    <>
      <div className="h-[4.6vh]">
        <Header />
      </div>
      <main className="h-[90vh] flex items-center justify-center">

        <ContactForm />

      </main>
      <div className="h-[5vh]">
        <Footer />
      </div>
    </>
  )
}