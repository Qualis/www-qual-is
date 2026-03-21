import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/app/lib/api";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const TOPIC_COLORS: Record<string, string> = {
  engineer: "#3B82F6",
  lead: "#8B5CF6",
  manage: "#10B981",
  think: "#F59E0B",
};

export default async function OgImage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const topicColor = TOPIC_COLORS[post.topic] ?? "#1E40AF";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px",
          background: "#0F172A",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: topicColor,
              }}
            />
            <span
              style={{
                fontSize: "20px",
                color: topicColor,
                textTransform: "uppercase",
                letterSpacing: "2px",
              }}
            >
              {post.topic}
            </span>
          </div>
          <h1
            style={{
              fontSize: "56px",
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            {post.title}
          </h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: "24px",
              color: "#94A3B8",
            }}
          >
            qual.is
          </span>
          <span
            style={{
              fontSize: "20px",
              color: "#64748B",
            }}
          >
            {post.author.name}
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}
