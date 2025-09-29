"use client";

import Link from "next/link";
import React from "react";
import { ContactModal } from "./modal/contact-modal";

export function Hero() {
  const [isContactModalOpen, setIsContactModalOpen] = React.useState(false);

  function openContactModal() {
    setIsContactModalOpen(true);
  }

  function closeContactModal() {
    setIsContactModalOpen(false);
  }

  return (
    <>
      <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary dark:text-primary-dark leading-tight mb-6">
              Connecting the Dots:{" "}
              <span className="text-accent-3 dark:text-accent-1">Decoding Complexity</span>{" "}
              with Code, People & Strategy
            </h1>

            <p className="text-xl md:text-2xl text-primary dark:text-primary-dark leading-relaxed mb-8">
              Need to scale your engineering capabilities and accelerate delivery? I help growing companies achieve faster deployments, build high-performing teams, and implement smart technology solutions that deliver measurable results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={openContactModal}
                className="bg-primary hover:bg-accent-1 hover:text-primary border-2 border-primary text-white font-bold py-4 px-8 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center"
              >
                Reach out →
              </button>

              <Link
                href="/#services"
                className="border-2 border-primary text-primary dark:text-primary-dark hover:bg-primary hover:text-white font-bold py-4 px-8 text-lg rounded-full transition-all duration-300 text-center"
              >
                Services on offer
              </Link>
            </div>

          </div>

          <div className="lg:pl-12">
            <div className="relative">
              <div className="relative bg-gradient-to-br from-primary/10 to-accent-3/10 dark:from-accent-1/10 dark:to-primary/10 rounded-2xl p-8 lg:p-12">

                <div className="relative z-10">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-primary/20 rounded-xl p-6 flex items-center justify-center">
                      <svg className="w-12 h-12 text-primary dark:text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>

                    <div className="bg-accent-3/20 dark:bg-accent-1/20 rounded-xl p-6 flex items-center justify-center">
                      <svg className="w-12 h-12 text-primary dark:text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>

                    <div className="bg-accent-1/20 rounded-xl p-6 flex items-center justify-center">
                      <svg className="w-12 h-12 text-primary dark:text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>

                    <div className="bg-primary/20 rounded-xl p-6 flex items-center justify-center">
                      <svg className="w-12 h-12 text-primary dark:text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="absolute top-4 right-4 w-20 h-20 bg-primary/5 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-accent-3/5 dark:bg-accent-1/5 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>

      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </>
  );
}
