import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { ContactModal } from "@/app/_components/modal/contact-modal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fractional CTO Services | Sean Van Osselaer",
  description:
    "Fractional CTO services: AI-driven development, scalable architecture, team scaling. Proven results in technical strategy and optimization.",
  keywords:
    "Fractional CTO, Sean Van Osselaer, SVO, CTO services, AI-driven development, engineering leadership, software architecture, team scaling, technical strategy",
  openGraph: {
    title: "Fractional CTO Services | Sean Van Osselaer",
    description:
      "Fractional CTO services: AI-driven development, scalable architecture, team scaling. Proven results in technical strategy and optimization.",
    url: "https://qual.is/svo",
    type: "profile",
  },
};

export default function AboutPage() {
  return (
    <main>
      <Container>
        <Header />
        <article
          className="prose dark:prose-invert lg:prose-xl mx-auto max-w-4xl py-12"
          itemScope
          itemType="https://schema.org/Person"
        >
          <meta itemProp="name" content="Sean Van Osselaer" />
          <meta itemProp="alternateName" content="SVO" />
          <meta itemProp="url" content="https://qual.is" />

          <div className="text-center mb-12">
            <img
              src="/assets/blog/authors/svo.png"
              alt="Sean Van Osselaer (SVO)"
              className="w-48 h-48 rounded-full mx-auto mb-6"
              itemProp="image"
            />
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              SVO - Sean Van Osselaer
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6">
              CTO - Fractional
            </p>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto">
              I help growing companies build scalable engineering organizations, implement AI-driven development practices,
              and create technical strategies that align with business objectives. With proven experience scaling teams,
              optimizing processes, and delivering measurable improvements in engineering performance.
            </p>
          </div>

          <div className="text-lg leading-relaxed">
            <h2 className="text-3xl font-bold mt-12 mb-8 text-center">
              Core Services
            </h2>

            <div className="grid md:grid-cols-1 gap-8 mb-12">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-2xl font-bold mb-3">Engineering Leadership & Team Scaling</h3>
                <p>
                  Build and scale high-performing engineering teams through strategic hiring, mentoring programs,
                  and cultural development. I've successfully replaced larger contractor teams with smaller,
                  more efficient in-house teams while improving all key metrics including deployment speed,
                  system reliability, and recovery time.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-2xl font-bold mb-3">AI-Driven Development Strategy</h3>
                <p>
                  Implement generative AI tools and practices that deliver measurable improvements in
                  lead time for changes, deployment frequency, and change failure rates. Design architectures that leverage AI for enhanced
                  decision-making and streamlined workflows.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-2xl font-bold mb-3">Software Architecture & Technical Strategy</h3>
                <p>
                  Design scalable microservices, cloud-native architectures, and high-availability systems.
                  Expertise in Domain-Driven Design, Hexagonal Architecture, and implementing technical
                  strategies that support long-term scalability and maintainability while remaining
                  compatible with emerging AI development tools.
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-2xl font-bold mb-3">Process Excellence & Delivery Optimization</h3>
                <p>
                  Implement adaptive engineering processes that combine agile, post-agile, and lean approaches.
                  Establish DevOps practices, infrastructure as code, and quality frameworks that improve
                  efficiency and product delivery while maintaining team engagement and reducing burnout.
                </p>
              </div>

              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-2xl font-bold mb-3">Strategic Technology Planning</h3>
                <p>
                  Align technology decisions with business objectives through stakeholder collaboration,
                  technical due diligence, and strategic roadmap development. Bridge the gap between
                  engineering and product strategy using structured decision-making frameworks and
                  architectural decision records.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-center">
              Technical Expertise
            </h2>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">Technical Expertise</h3>
              <ul className="grid md:grid-cols-2 gap-2">
                <li>Python, Java, Clojure, Ruby, ...</li>
                <li>React, Angular, React Native, Flutter, ...</li>
                <li>AWS, GCP, Infrastructure as Code, ...</li>
                <li>Terraform, Ansible, Docker, Kubernetes, ...</li>
                <li>Microservices, APIs, Distributed Systems, ...</li>
                <li>Machine Learning, Graph Neural Networks, ...</li>
                <li>DevOps, CI/CD, Monitoring, ...</li>
                <li>Agile, Lean, Post-Agile Methodologies, ...</li>
              </ul>
            </div>


            <h2 className="text-3xl font-bold mt-12 mb-6 text-center">
              Approach & Philosophy
            </h2>

            <p className="mb-6">
              My leadership approach combines deep technical expertise with strategic thinking and philosophical depth.
              I believe in fostering engineering environments that balance structure with flexibility, emphasizing
              communication and collaboration as essential elements of productive teams.
            </p>

            <p className="mb-6">
              Through this site, I share insights on technical architecture, leadership strategies, process improvement,
              and hands-on software engineering practices. You'll find posts covering everything from decision frameworks
              and team scaling to AI-driven development and the philosophical underpinnings of technology choices.
            </p>

            <p className="mb-8">
              I leverage technical innovation, philosophical concepts, and psychological understanding to create sustainable engineering
              cultures that deliver exceptional results while supporting team growth and wellbeing.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <div className="mb-12 space-y-8">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-bold mb-3">What is a Fractional CTO?</h3>
                <p>
                  A Fractional CTO is a part-time Chief Technology Officer who provides strategic technical leadership
                  to growing companies without the full-time commitment and cost. I work with multiple clients to deliver
                  the same high-level technical strategy, team leadership, and architectural guidance that a full-time
                  CTO would provide, but on a flexible engagement model that scales with your needs.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-bold mb-3">How does fractional CTO work vs full-time hiring?</h3>
                <p>
                  Fractional CTO services offer immediate expertise without the 6-12 month hiring process.
                  You get proven technical leadership from day one, with the flexibility to
                  scale engagement up or down based on your company's growth stage and needs. This approach is ideal for
                  companies that need senior technical guidance but aren't ready for a full-time executive hire.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-bold mb-3">What size companies benefit most from fractional CTO services?</h3>
                <p>
                  Growing companies with 10-100 employees typically see the greatest value from fractional CTO services.
                  This includes startups scaling beyond their founding team, established companies launching digital
                  initiatives, and businesses experiencing technical bottlenecks that impact growth. If you have
                  engineering challenges but can't justify a full-time CTO salary, fractional services bridge that gap perfectly.
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-bold mb-3">How do you measure success in a fractional CTO engagement?</h3>
                <p>
                  Success is measured through concrete improvements: faster deployment cycles, reduced system downtime,
                  improved team performance metrics, and alignment between technical strategy and business objectives.
                  I establish clear OKRs at engagement start, including lead time for changes, deployment frequency,
                  mean time to recovery, and team satisfaction scores. Regular reviews ensure we're delivering measurable value.
                </p>
              </div>

              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-xl font-bold mb-3">What's the typical engagement timeline and process?</h3>
                <p>
                  Engagements typically start with a 2-week assessment to understand your technical landscape, team dynamics,
                  and growth objectives. From there, we establish ongoing strategic guidance that might include weekly leadership
                  meetings, monthly architecture reviews, quarterly strategic planning, and as-needed project oversight.
                  Engagements are flexible and can evolve from intensive implementation phases to ongoing advisory relationships.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Engineering Organization?</h2>
              <p className="mb-6 text-lg">
                Let's discuss how I can help you build scalable systems, implement AI-driven development practices,
                and create high-performing engineering teams.
              </p>
            </div>
          </div>
        </article>
      </Container>
    </main>
  );
}