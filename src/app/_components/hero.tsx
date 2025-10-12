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
                <span className="text-highlight dark:text-highlight-dark">
                  Decoding Complexity
                </span>{" "}
                with Code, People & Strategy
              </h1>

              <p className="text-xl md:text-2xl text-primary dark:text-primary-dark leading-relaxed mb-8">
                Need to scale your engineering capabilities and accelerate
                delivery? I help growing companies achieve faster deployments,
                build high-performing teams, and implement smart technology
                solutions that deliver measurable results.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={openContactModal}
                  className="bg-primary hover:bg-highlight dark:hover:bg-highlight-dark hover:text-accent-3 border-2 border-primary text-white font-bold py-4 px-8 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center"
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
                    <svg
                      className="w-full h-full"
                      viewBox="0 0 320 240"
                      fill="none"
                    >
                      <g stroke="currentColor" strokeWidth="1.5">
                        <g className="text-primary dark:text-primary-dark opacity-10">
                          <path d="M100 60L65 12" className="pulse-slow" />
                          <path d="M130 60L212 15" className="pulse-medium" />
                          <path d="M170 140L145 185" className="pulse-fast" />
                          <path d="M240 60L275 8" className="pulse-1" />

                          <path d="M12 25L5 75" className="pulse-2" />
                          <path d="M65 12L158 6" className="pulse-3" />
                          <path d="M212 15L158 6" className="pulse-4" />
                          <path d="M275 8L315 85" className="pulse-5" />

                          <path d="M8 125L312 115" className="pulse-1" />

                          <path d="M25 45L115 155" className="pulse-2" />
                          <path d="M175 165L185 232" className="pulse-3" />
                          <path d="M245 45L285 175" className="pulse-4" />
                          <path d="M265 210L225 225" className="pulse-5" />
                          <path d="M125 45L265 210" className="pulse-1" />
                          <path d="M175 35L312 165" className="pulse-2" />
                          <path d="M5 75L245 45" className="pulse-3" />
                          <path d="M175 165L225 225" className="pulse-4" />

                          <path d="M15 180L35 215" className="pulse-5" />
                          <path d="M35 215L75 228" className="pulse-1" />
                          <path d="M310 25L245 45" className="pulse-2" />
                          <path d="M295 235L285 175" className="pulse-3" />
                          <path d="M308 195L312 165" className="pulse-4" />

                          <path d="M118 235L145 185" className="pulse-5" />
                          <path d="M145 185L185 232" className="pulse-1" />
                          <path d="M225 225L265 210" className="pulse-2" />

                          <path d="M22 165L65 175" className="pulse-3" />
                          <path d="M12 220L308 220" className="pulse-4" />

                          <path d="M12 25L25 45" className="pulse-5" />
                          <path d="M310 25L315 85" className="pulse-1" />
                          <path d="M75 228L115 155" className="pulse-2" />

                          <path d="M118 235L295 235" className="pulse-3" />
                          <path d="M5 75L22 165" className="pulse-4" />
                          <path d="M312 115L312 165" className="pulse-5" />

                          <path d="M125 45L175 35" className="pulse-1" />
                          <path d="M15 180L65 175" className="pulse-2" />
                          <path d="M185 232L225 225" className="pulse-3" />
                          <path d="M285 175L308 195" className="pulse-4" />
                        </g>

                        <g className="text-primary dark:text-primary-dark opacity-60">
                          <path d="M100 60L80 60" />
                          <path d="M80 60L60 60" />
                          <path d="M60 60L40 80" />
                          <path d="M40 80L50 100" />
                          <path d="M50 100L70 100" />
                          <path d="M70 100L90 100" />
                          <path d="M90 100L110 120" />
                          <path d="M110 120L100 140" />
                          <path d="M100 140L80 140" />
                          <path d="M80 140L60 140" />

                          <path d="M130 60L170 140" />
                          <path d="M140 80L170 140" />
                          <path d="M150 100L170 140" />
                          <path d="M160 120L170 140" />
                          <path d="M210 60L170 140" />
                          <path d="M200 80L170 140" />
                          <path d="M190 100L170 140" />
                          <path d="M180 120L170 140" />

                          <path d="M240 60L260 60" />
                          <path d="M260 60L280 60" />
                          <path d="M280 60L300 80" />
                          <path d="M300 80L300 100" />
                          <path d="M300 100L300 120" />
                          <path d="M300 120L280 140" />
                          <path d="M280 140L260 140" />
                          <path d="M260 140L240 140" />
                          <path d="M240 140L220 120" />
                          <path d="M220 120L220 100" />
                          <path d="M220 100L220 80" />
                          <path d="M220 80L240 60" />
                        </g>

                        <g className="text-primary dark:text-primary-dark opacity-40">
                          <g fill="white" className="dark:fill-gray-900">
                            <circle
                              cx="12"
                              cy="25"
                              r="2"
                              className="pulse-slow"
                            />
                            <circle
                              cx="65"
                              cy="12"
                              r="2.5"
                              className="pulse-medium"
                            />
                            <circle
                              cx="158"
                              cy="6"
                              r="2"
                              className="pulse-fast"
                            />
                            <circle
                              cx="212"
                              cy="15"
                              r="2.5"
                              className="pulse-1"
                            />
                            <circle cx="275" cy="8" r="2" className="pulse-2" />

                            <circle
                              cx="5"
                              cy="75"
                              r="2.5"
                              className="pulse-medium"
                            />
                            <circle
                              cx="315"
                              cy="85"
                              r="2"
                              className="pulse-fast"
                            />
                            <circle
                              cx="312"
                              cy="115"
                              r="2.5"
                              className="pulse-slow"
                            />

                            <circle
                              cx="15"
                              cy="180"
                              r="2"
                              className="pulse-3"
                            />
                            <circle
                              cx="35"
                              cy="215"
                              r="2.5"
                              className="pulse-4"
                            />
                            <circle
                              cx="75"
                              cy="228"
                              r="2"
                              className="pulse-5"
                            />
                            <circle
                              cx="118"
                              cy="235"
                              r="2.5"
                              className="pulse-1"
                            />
                            <circle
                              cx="185"
                              cy="232"
                              r="2"
                              className="pulse-2"
                            />

                            <circle
                              cx="225"
                              cy="225"
                              r="2.5"
                              className="pulse-3"
                            />
                            <circle
                              cx="295"
                              cy="235"
                              r="2"
                              className="pulse-4"
                            />
                            <circle
                              cx="12"
                              cy="220"
                              r="2.5"
                              className="pulse-5"
                            />
                            <circle
                              cx="308"
                              cy="220"
                              r="2"
                              className="pulse-1"
                            />

                            <circle cx="25" cy="45" r="3" className="pulse-2" />
                            <circle
                              cx="310"
                              cy="25"
                              r="3.5"
                              className="pulse-3"
                            />
                            <circle
                              cx="308"
                              cy="195"
                              r="3"
                              className="pulse-4"
                            />

                            <circle
                              cx="125"
                              cy="45"
                              r="3.5"
                              className="pulse-5"
                            />
                            <circle
                              cx="175"
                              cy="35"
                              r="3"
                              className="pulse-1"
                            />
                            <circle
                              cx="245"
                              cy="45"
                              r="3.5"
                              className="pulse-2"
                            />

                            <circle
                              cx="22"
                              cy="165"
                              r="3"
                              className="pulse-3"
                            />
                            <circle
                              cx="312"
                              cy="165"
                              r="3.5"
                              className="pulse-4"
                            />
                            <circle
                              cx="65"
                              cy="175"
                              r="3"
                              className="pulse-5"
                            />
                            <circle
                              cx="285"
                              cy="175"
                              r="3.5"
                              className="pulse-1"
                            />

                            <circle
                              cx="115"
                              cy="155"
                              r="4"
                              className="pulse-2"
                            />
                            <circle
                              cx="145"
                              cy="185"
                              r="4.5"
                              className="pulse-slow"
                            />
                            <circle
                              cx="175"
                              cy="165"
                              r="4"
                              className="pulse-medium"
                            />
                            <circle
                              cx="265"
                              cy="210"
                              r="4.5"
                              className="pulse-fast"
                            />

                            <circle cx="8" cy="125" r="4" className="pulse-3" />
                          </g>
                          <g fill="currentColor">
                            <circle
                              cx="12"
                              cy="25"
                              r="1.5"
                              className="pulse-slow"
                            />
                            <circle
                              cx="65"
                              cy="12"
                              r="2"
                              className="pulse-medium"
                            />
                            <circle
                              cx="158"
                              cy="6"
                              r="1.5"
                              className="pulse-fast"
                            />
                            <circle
                              cx="212"
                              cy="15"
                              r="2"
                              className="pulse-1"
                            />
                            <circle
                              cx="275"
                              cy="8"
                              r="1.5"
                              className="pulse-2"
                            />

                            <circle
                              cx="5"
                              cy="75"
                              r="2"
                              className="pulse-medium"
                            />
                            <circle
                              cx="315"
                              cy="85"
                              r="1.5"
                              className="pulse-fast"
                            />
                            <circle
                              cx="312"
                              cy="115"
                              r="2"
                              className="pulse-slow"
                            />

                            <circle
                              cx="15"
                              cy="180"
                              r="1.5"
                              className="pulse-3"
                            />
                            <circle
                              cx="35"
                              cy="215"
                              r="2"
                              className="pulse-4"
                            />
                            <circle
                              cx="75"
                              cy="228"
                              r="1.5"
                              className="pulse-5"
                            />
                            <circle
                              cx="118"
                              cy="235"
                              r="2"
                              className="pulse-1"
                            />
                            <circle
                              cx="185"
                              cy="232"
                              r="1.5"
                              className="pulse-2"
                            />

                            <circle
                              cx="225"
                              cy="225"
                              r="2"
                              className="pulse-3"
                            />
                            <circle
                              cx="295"
                              cy="235"
                              r="1.5"
                              className="pulse-4"
                            />
                            <circle
                              cx="12"
                              cy="220"
                              r="2"
                              className="pulse-5"
                            />
                            <circle
                              cx="308"
                              cy="220"
                              r="1.5"
                              className="pulse-1"
                            />

                            <circle
                              cx="25"
                              cy="45"
                              r="2.5"
                              className="pulse-2"
                            />
                            <circle
                              cx="310"
                              cy="25"
                              r="3"
                              className="pulse-3"
                            />
                            <circle
                              cx="308"
                              cy="195"
                              r="2.5"
                              className="pulse-4"
                            />

                            <circle
                              cx="125"
                              cy="45"
                              r="3"
                              className="pulse-5"
                            />
                            <circle
                              cx="175"
                              cy="35"
                              r="2.5"
                              className="pulse-1"
                            />
                            <circle
                              cx="245"
                              cy="45"
                              r="3"
                              className="pulse-2"
                            />

                            <circle
                              cx="22"
                              cy="165"
                              r="2.5"
                              className="pulse-3"
                            />
                            <circle
                              cx="312"
                              cy="165"
                              r="3"
                              className="pulse-4"
                            />
                            <circle
                              cx="65"
                              cy="175"
                              r="2.5"
                              className="pulse-5"
                            />
                            <circle
                              cx="285"
                              cy="175"
                              r="3"
                              className="pulse-1"
                            />

                            <circle
                              cx="115"
                              cy="155"
                              r="3.5"
                              className="pulse-2"
                            />
                            <circle
                              cx="145"
                              cy="185"
                              r="4"
                              className="pulse-slow"
                            />
                            <circle
                              cx="175"
                              cy="165"
                              r="3.5"
                              className="pulse-medium"
                            />
                            <circle
                              cx="265"
                              cy="210"
                              r="4"
                              className="pulse-fast"
                            />

                            <circle
                              cx="8"
                              cy="125"
                              r="3.5"
                              className="pulse-3"
                            />
                          </g>
                        </g>

                        <g className="text-primary dark:text-primary-dark">
                          <g fill="white" className="dark:fill-gray-900">
                            <circle cx="100" cy="60" r="5.5" />
                            <circle cx="80" cy="60" r="5.5" />
                            <circle cx="60" cy="60" r="5.5" />
                            <circle cx="40" cy="80" r="5.5" />
                            <circle cx="50" cy="100" r="5.5" />
                            <circle cx="70" cy="100" r="5.5" />
                            <circle cx="90" cy="100" r="5.5" />
                            <circle cx="110" cy="120" r="5.5" />
                            <circle cx="100" cy="140" r="5.5" />
                            <circle cx="80" cy="140" r="5.5" />
                            <circle cx="60" cy="140" r="5.5" />

                            <circle cx="130" cy="60" r="5.5" />
                            <circle cx="140" cy="80" r="5.5" />
                            <circle cx="150" cy="100" r="5.5" />
                            <circle cx="160" cy="120" r="5.5" />
                            <circle cx="170" cy="140" r="5.5" />
                            <circle cx="210" cy="60" r="5.5" />
                            <circle cx="200" cy="80" r="5.5" />
                            <circle cx="190" cy="100" r="5.5" />
                            <circle cx="180" cy="120" r="5.5" />

                            <circle cx="240" cy="60" r="5.5" />
                            <circle cx="260" cy="60" r="5.5" />
                            <circle cx="280" cy="60" r="5.5" />
                            <circle cx="220" cy="80" r="5.5" />
                            <circle cx="300" cy="80" r="5.5" />
                            <circle cx="220" cy="100" r="5.5" />
                            <circle cx="300" cy="100" r="5.5" />
                            <circle cx="220" cy="120" r="5.5" />
                            <circle cx="300" cy="120" r="5.5" />
                            <circle cx="240" cy="140" r="5.5" />
                            <circle cx="260" cy="140" r="5.5" />
                            <circle cx="280" cy="140" r="5.5" />
                          </g>
                          <g fill="currentColor">
                            <circle cx="100" cy="60" r="5" />
                            <circle cx="80" cy="60" r="5" />
                            <circle cx="60" cy="60" r="5" />
                            <circle cx="40" cy="80" r="5" />
                            <circle cx="50" cy="100" r="5" />
                            <circle cx="70" cy="100" r="5" />
                            <circle cx="90" cy="100" r="5" />
                            <circle cx="110" cy="120" r="5" />
                            <circle cx="100" cy="140" r="5" />
                            <circle cx="80" cy="140" r="5" />
                            <circle cx="60" cy="140" r="5" />

                            <circle cx="130" cy="60" r="5" />
                            <circle cx="140" cy="80" r="5" />
                            <circle cx="150" cy="100" r="5" />
                            <circle cx="160" cy="120" r="5" />
                            <circle cx="170" cy="140" r="5" />
                            <circle cx="210" cy="60" r="5" />
                            <circle cx="200" cy="80" r="5" />
                            <circle cx="190" cy="100" r="5" />
                            <circle cx="180" cy="120" r="5" />

                            <circle cx="240" cy="60" r="5" />
                            <circle cx="260" cy="60" r="5" />
                            <circle cx="280" cy="60" r="5" />
                            <circle cx="220" cy="80" r="5" />
                            <circle cx="300" cy="80" r="5" />
                            <circle cx="220" cy="100" r="5" />
                            <circle cx="300" cy="100" r="5" />
                            <circle cx="220" cy="120" r="5" />
                            <circle cx="300" cy="120" r="5" />
                            <circle cx="240" cy="140" r="5" />
                            <circle cx="260" cy="140" r="5" />
                            <circle cx="280" cy="140" r="5" />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
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
