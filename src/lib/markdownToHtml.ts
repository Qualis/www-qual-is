import { remark } from "remark";
import html from "remark-html";

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(html, {
      sanitize: false,
    })
    .process(markdown);

  let htmlContent = result.toString();

  htmlContent = htmlContent.replace(
    /<h([1-6])>(.*?)<\/h\1>/g,
    (match, level, content) => {
      const id = content
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-');
      return `<h${level} id="${id}">${content}</h${level}>`;
    }
  );

  return htmlContent;
}
