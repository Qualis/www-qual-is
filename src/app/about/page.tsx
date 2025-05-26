import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Sean Van Osselaer | The Quality of Quality",
  description:
    "Learn more about Sean Van Osselaer (SVO), a software engineering leader and architect with deep expertise in scalable systems, AI-driven development, and team leadership.",
  keywords:
    "Sean Van Osselaer, Van Osselaer, SVO, software engineering, leadership, architecture, AI, DevOps",
  openGraph: {
    title: "About Sean Van Osselaer | The Quality of Quality",
    description:
      "Learn more about Sean Van Osselaer (SVO), a software engineering leader and architect with deep expertise in scalable systems, AI-driven development, and team leadership.",
    url: "https://qual.is/about",
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

          <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center">
            Sean Van Osselaer
          </h1>

          <img
            src="/assets/blog/authors/svo.png"
            alt="Sean Van Osselaer (SVO)"
            className="w-48 h-48 rounded-full mx-auto md:mx-0 md:float-right md:ml-8 mb-8"
            itemProp="image"
          />

          <div className="text-lg leading-relaxed">
            <p>
              I'm Sean Van Osselaer (SVO), Head of Engineering at{" "}
              <a
                href="https://on.life"
                target="_blank"
                rel="noopener noreferrer"
              >
                Onlife
              </a>
              . I'm a software engineering leader, architect and engineer with
              extensive experience building scalable, high-performance systems
              and nurturing high-performing teams.
            </p>

            <p>
              This site is for sharing insights on technical architecture,
              leadership strategies, process improvement, and hands-on software
              engineering practices; complete with working code and real-world
              examples. You'll find posts on decision frameworks, team scaling,
              cloud-native architectures, and more.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-center">
              Expertise
            </h2>
            <ul>
              <li>Engineering leadership and team building</li>
              <li>Software architecture and microservices</li>
              <li>DevOps, CI/CD, and infrastructure as code</li>
              <li>Agile, Lean, and adaptive methodologies</li>
              <li>Cloud platforms</li>
              <li>AI/ML integration and data-driven engineering</li>
            </ul>
          </div>
        </article>
      </Container>
    </main>
  );
}
