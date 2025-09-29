"use client";

import Link from "next/link";
import React from "react";
import { ContactModal } from "./modal/contact-modal";

const challenges = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Engineering has become your growth bottleneck",
    description: "Your product roadmap is delayed, features take months to ship, and technical decisions slow business growth. I help identify bottlenecks, streamline processes, and create scalable development practices that align engineering velocity with business objectives."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Scaling beyond your founding technical team",
    description: "Your original developers are overwhelmed, code quality is declining, and new hires struggle to contribute effectively. I establish scalable team structures, mentoring programs, and development practices that maintain quality while growing fast."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    ),
    title: "Technical debt is slowing everything down",
    description: "Simple changes take weeks, bugs multiply faster than fixes, and your system feels increasingly fragile. I create pragmatic technical debt reduction strategies that balance immediate business needs with long-term maintainability and system health."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Need CTO-level strategy without full-time investment",
    description: "You need senior technical leadership to guide architecture decisions, technology choices, and team development, but can't justify a full-time executive hire. I provide strategic oversight and tactical guidance scaled to your current needs and growth stage."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Preparing technology for your next growth phase",
    description: "Fundraising, acquisition discussions, or rapid scaling demand technical due diligence and architecture that can handle 10x growth. I assess current systems, identify scaling risks, and implement the technical foundation needed for your next milestone."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Deployments are risky and block feature delivery",
    description: "Every release requires careful coordination, rollbacks are painful, and the fear of deployment slows feature delivery. Manual processes and fragile infrastructure create bottlenecks that directly impact business velocity and team confidence. I implement automated CI/CD pipelines, safe deployment strategies, and monitoring that makes releases predictable, frequent, and low-risk."
  }
];

export function Services() {
  const [isContactModalOpen, setIsContactModalOpen] = React.useState(false);

  function openContactModal() {
    setIsContactModalOpen(true);
  }

  function closeContactModal() {
    setIsContactModalOpen(false);
  }

  return (
    <>
      <section id="services" className="py-12 bg-accent-1/50 dark:bg-accent-3/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Services
          </h2>
          <p className="text-xl text-accent-3 dark:text-accent-1 leading-relaxed">
            For the complex technical problems fast-paced growing companies face when scaling their engineering capabilities. Here's how I help solve them through strategic leadership and proven solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 lg:max-w-5xl lg:mx-auto">
          {challenges.map((challenge, index) => (
            <div key={index} className="bg-white dark:bg-accent-3/10 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="bg-primary/10 rounded-lg p-3 w-fit mb-4 text-primary">
                {challenge.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                {challenge.title}
              </h3>
              <p className="text-accent-3 dark:text-accent-1 leading-relaxed">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center bg-primary/5 dark:bg-accent-1/5 rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Ready to scale your engineering team?
          </h3>
          <p className="text-lg text-accent-3 dark:text-accent-1 mb-8 max-w-2xl mx-auto">
            Let's discuss how to accelerate your growth and
            help you build the high-performing engineering organization you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openContactModal}
              className="bg-primary hover:bg-accent-1 hover:text-primary border-2 border-primary text-white font-bold py-4 px-8 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center"
            >
              Reach out →
            </button>
            <Link
              href="/about"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-4 px-8 text-lg rounded-full transition-all duration-300 text-center"
            >
              About
            </Link>
          </div>
        </div>
      </div>
      </section>

      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </>
  );
}
