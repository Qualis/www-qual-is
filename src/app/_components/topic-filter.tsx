"use client";

import { useState, useRef, useLayoutEffect } from "react";
import { Post } from "@/interfaces/post";
import { HeroPost } from "./hero-post";
import { MoreStories } from "./more-stories";
import styles from "./topic-filter.module.css";

type TopicFilterProps = {
  topics: string[];
  allPosts: Post[];
};

export function TopicFilter({ topics, allPosts }: TopicFilterProps) {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([...topics]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(allPosts);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (containerRef.current) {
      const buttons = containerRef.current.querySelectorAll("button");
      let maxWidth = 0;

      buttons.forEach((button) => {
        button.style.width = "auto";
        const buttonWidth = button.getBoundingClientRect().width;
        maxWidth = Math.max(maxWidth, buttonWidth);
      });

      if (maxWidth > 0) {
        buttons.forEach((button) => {
          button.style.width = `${maxWidth}px`;
        });
      }
    }
  }, [topics]);

  const handleTopicToggle = (topic: string) => {
    let newSelectedTopics;

    if (selectedTopics.includes(topic)) {
      if (selectedTopics.length === 1 && selectedTopics[0] === topic) {
        newSelectedTopics = [...topics];
      } else {
        newSelectedTopics = selectedTopics.filter((t) => t !== topic);
      }
    } else {
      newSelectedTopics = [...selectedTopics, topic];
    }

    setSelectedTopics(newSelectedTopics);

    if (
      newSelectedTopics.length === 0 ||
      newSelectedTopics.length === topics.length
    ) {
      setFilteredPosts(allPosts);
    } else {
      const filtered = allPosts.filter((post) =>
        newSelectedTopics.includes(post.topic)
      );
      setFilteredPosts(filtered);
    }
  };

  const heroPost = filteredPosts[0];
  const morePosts = filteredPosts.slice(1);

  return (
    <>
      <div className="mb-8">
        <h2 className="text-primary mb-6 text-lg md:text-2xl font-bold tracking-tighter leading-tight text-center">
          Browse by Topic
        </h2>
        <div className="flex flex-wrap justify-center gap-3" ref={containerRef}>
          {topics.map((topic) => (
            <button
              key={topic}
              onClick={() => handleTopicToggle(topic)}
              className={`
                border transition-colors duration-200 font-bold py-2 px-5 capitalize rounded-md
                ${styles.topicButton}
                ${!selectedTopics.includes(topic) ? styles.disabled : ""}
                ${
                  selectedTopics.includes(topic)
                    ? "bg-primary border-primary text-white"
                    : "border-gray-400 text-gray-600 hover:bg-accent-1 hover:text-primary hover:border-primary"
                }
              `}
            >
              {topic}
            </button>
          ))}
        </div>
      </div>

      {heroPost && (
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
          topic={heroPost.topic}
        />
      )}

      {morePosts.length > 0 ? (
        <MoreStories posts={morePosts} />
      ) : (
        !heroPost && (
          <div className="text-center py-10">
            No posts found for the selected topics.
          </div>
        )
      )}
    </>
  );
}
