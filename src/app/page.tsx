import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import { TopicFilter } from "@/app/_components/topic-filter";
import { getAllPosts, getAllTopics } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts();
  const topics = getAllTopics();

  return (
    <main>
      <Container>
        <Intro />
        {topics.length > 0 && (
          <TopicFilter topics={topics} allPosts={allPosts} />
        )}
      </Container>
    </main>
  );
}
