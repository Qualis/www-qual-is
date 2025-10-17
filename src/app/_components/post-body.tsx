import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <div className="w-full post-gradient-bg">
      <section
        aria-label="Article content"
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
        itemScope
        itemType="https://schema.org/Article"
      />
    </div>
  );
}
