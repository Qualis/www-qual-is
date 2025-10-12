import { Metadata } from "next";
import { TopicFilter } from "../_components/topic-filter";
import { getAllPosts, getAllTopics } from "@/app/lib/api";

export const metadata: Metadata = {
  title: "Engineering Blog | Sean Van Osselaer",
  description:
    "Insights on technical architecture, leadership strategies, process improvement, and hands-on software engineering practices. Complete with working code and real-world examples from scaling engineering teams.",
  keywords:
    "Engineering blog, technical architecture, leadership strategies, software engineering, team scaling, process improvement, Sean Van Osselaer, SVO",
  openGraph: {
    title: "Engineering Blog | Sean Van Osselaer",
    description:
      "Insights on technical architecture, leadership strategies, process improvement, and hands-on software engineering practices. Complete with working code and real-world examples from scaling engineering teams.",
    url: "https://qual.is/blog",
    type: "website",
  },
};

export default function BlogPage() {
  const allPosts = getAllPosts();
  const topics = getAllTopics();

  return (
    <main>
      <section className="pt-20 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary dark:text-primary-dark mb-6">
              Engineering Musings
            </h1>
            <p className="text-xl text-accent-3 dark:text-accent-1 leading-relaxed max-w-4xl mx-auto">
              Insights on technical architecture, leadership strategies, process
              improvement, and hands-on software engineering practices. Complete
              with working code and real-world examples from scaling engineering
              teams.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20 bg-accent-1/30 dark:bg-accent-3/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {topics.length > 0 && (
            <TopicFilter topics={topics} allPosts={allPosts} />
          )}
        </div>
      </section>
    </main>
  );
}
