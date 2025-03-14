import Avatar from "./avatar";
import { type Author } from "@/interfaces/author";

type Props = {
  date?: string;
  author: Author;
};

export function PostAuthor({ author }: Props) {
  return (
    <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-12 mb-12">
      <div className="flex items-center justify-center flex-col mb-6">
        <div>
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </div>
  );
}
