"use client";

import Image from "next/image";
import React from "react";
import { ContactModal } from "../_components/modal/contact-modal";

const faqs = [
  {
    question: "What is a Fractional CTO?",
    answer:
      "A Fractional CTO is a part-time Chief Technology Officer who provides strategic technical leadership to growing companies without the full-time commitment and cost. I work with multiple clients to deliver the same high-level technical strategy, team leadership, and architectural guidance that a full-time CTO would provide, but on a flexible engagement model that scales with your needs.",
  },
  {
    question: "How does fractional CTO work vs full-time hiring?",
    answer:
      "Fractional CTO services offer immediate expertise without the 6-12 month hiring process. You get proven technical leadership from day one, with the flexibility to scale engagement up or down based on your company's growth stage and needs. This approach is ideal for companies that need senior technical guidance but aren't ready for a full-time executive hire.",
  },
  {
    question: "What size companies benefit most from fractional CTO services?",
    answer:
      "Growing companies with 10-100 employees typically see the greatest value from fractional CTO services. This includes startups scaling beyond their founding team, established companies launching digital initiatives, and businesses experiencing technical bottlenecks that impact growth.",
  },
  {
    question: "How do you measure success in a fractional CTO engagement?",
    answer:
      "Success is measured through concrete improvements: faster deployment cycles, reduced system downtime, improved team performance metrics, and alignment between technical strategy and business objectives. I establish clear OKRs at engagement start, including things like lead time for changes, deployment frequency, mean time to recovery, change failure rate, and team satisfaction scores.",
  },
  {
    question: "What's the typical engagement timeline and process?",
    answer:
      "Engagements typically start with an assessment to understand your technical landscape, team dynamics, and growth objectives. From there, we establish ongoing strategic guidance that might include weekly leadership meetings, monthly architecture reviews, quarterly strategic planning, and as-needed project oversight.",
  },
];

export default function AboutPage() {
  const [isContactModalOpen, setIsContactModalOpen] = React.useState(false);

  function openContactModal() {
    setIsContactModalOpen(true);
  }

  function closeContactModal() {
    setIsContactModalOpen(false);
  }

  return (
    <>
      <main>
        <section className="pt-20 pb-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="mb-8">
                <Image
                  src="/assets/blog/authors/svo.png"
                  alt="Sean Van Osselaer (SVO)"
                  width={192}
                  height={192}
                  className="w-48 h-48 rounded-full mx-auto shadow-lg"
                />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary dark:text-primary-dark mb-4">
                Sean Van Osselaer (SVO) - Fractional CTO
              </h1>
              <p className="text-2xl text-accent-3 dark:text-accent-1 mb-8">
                Technical Strategy & Team Scaling
              </p>
              <div className="max-w-4xl mx-auto space-y-6">
                <p className="text-lg text-primary dark:text-primary-dark leading-relaxed">
                  Growing companies face challenges when scaling their
                  engineering capabilities - from startups moving beyond their
                  founding team to established companies launching digital
                  initiatives. As a fractional CTO, I provide the strategic
                  technical leadership needed to navigate rapid growth
                  successfully.
                </p>

                <p className="text-lg text-primary dark:text-primary-dark leading-relaxed">
                  My expertise spans AI-driven development practices,
                  cloud-native architectures, team scaling strategies, and
                  process optimization. I focus on practical solutions that
                  align technical strategy with business objectives, delivering
                  measurable improvements in engineering performance and
                  sustainable growth.
                </p>

                <p className="text-lg text-primary dark:text-primary-dark leading-relaxed">
                  With extensive experience building high-performing engineering
                  teams, I help companies transform their technical challenges
                  into competitive advantages through proven methodologies and
                  data-driven approaches.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary dark:text-primary-dark mb-6">
                Technical Expertise
              </h2>
            </div>

            <div className="bg-accent-1/30 dark:bg-accent-3/10 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-primary dark:text-primary-dark mb-3">
                    Languages & Frameworks
                  </h3>
                  <ul className="space-y-1 text-accent-3 dark:text-accent-1">
                    <li>Python, TypeScript, Clojure, ...</li>
                    <li>React, Angular, Node.js, ...</li>
                    <li>React Native, Flutter, ...</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary dark:text-primary-dark mb-3">
                    Cloud & Infrastructure
                  </h3>
                  <ul className="space-y-1 text-accent-3 dark:text-accent-1">
                    <li>AWS, GCP, Azure, ...</li>
                    <li>Terraform, Ansible, ...</li>
                    <li>Docker, Kubernetes, ...</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary dark:text-primary-dark mb-3">
                    Architecture & Systems
                  </h3>
                  <ul className="space-y-1 text-accent-3 dark:text-accent-1">
                    <li>Microservices, APIs, ...</li>
                    <li>Distributed Systems, ...</li>
                    <li>Event-Driven Architecture, ...</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary dark:text-primary-dark mb-3">
                    Process & Leadership
                  </h3>
                  <ul className="space-y-1 text-accent-3 dark:text-accent-1">
                    <li>Agile, Lean, DevOps, ...</li>
                    <li>CI/CD, Monitoring, ...</li>
                    <li>Team Scaling, Mentoring, ...</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-accent-1/30 dark:bg-accent-3/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-primary dark:text-primary-dark mb-6">
                Approach & Philosophy
              </h2>
              <p className="text-xl text-accent-3 dark:text-accent-1 mb-8">
                Connecting Technical & Human Systems
              </p>

              <div className="space-y-6 text-lg text-primary dark:text-primary-dark leading-relaxed">
                <p>
                  My approach centers on connecting seemingly disconnected
                  technical challenges to reveal the underlying patterns that
                  drive engineering success. I start with systematic assessment
                  - analyzing deployment pipelines, team communication flows,
                  and system architecture to identify the bottlenecks that
                  compound into business problems.
                </p>

                <p>
                  Every engagement follows a data-driven methodology: establish
                  baseline metrics, implement targeted improvements, and measure
                  results against clear success criteria. Whether it's reducing
                  deployment risk through automated testing pipelines or scaling
                  teams through improved onboarding processes, the focus is
                  always on measurable outcomes that align with business
                  objectives.
                </p>

                <p>
                  I translate complex technical challenges into strategic
                  solutions by bridging the gap between engineering capabilities
                  and business needs. This means not just identifying what's
                  broken, but understanding why it matters to growth, revenue,
                  and competitive advantage - then building sustainable
                  practices that deliver consistent results as companies scale.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary dark:text-primary-dark mb-6">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-accent-3/10 rounded-xl p-6 shadow-sm"
                >
                  <h3 className="text-xl font-semibold text-primary dark:text-primary-dark mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-accent-3 dark:text-accent-1 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-accent-1/30 dark:bg-accent-3/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center bg-primary/5 dark:bg-accent-1/5 rounded-2xl p-8 lg:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-primary-dark mb-6">
                Ready to transform your engineering organization?
              </h2>
              <p className="text-xl text-accent-3 dark:text-accent-1 mb-8 max-w-3xl mx-auto">
                Let's discuss how I can help you build scalable systems,
                implement smart technology solutions, and create high-performing
                engineering teams.
              </p>
              <div className="flex justify-center">
                <button
                  onClick={openContactModal}
                  className="bg-primary hover:bg-highlight dark:hover:bg-highlight-dark hover:text-accent-3 border-2 border-primary text-white font-bold py-4 px-8 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center"
                >
                  Reach out →
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </>
  );
}
