import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import { type Author } from "@/interfaces/author";

type Props = {
  date: string;
  author: Author;
};

export function PostAuthor({ date, author }: Props) {
  return (
    <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-12 mb-12">
      <div className="flex items-center justify-center flex-col mb-6">
        <div className="mb-4">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="text-lg text-center">
          <p className="text-gray-500 dark:text-gray-400">
            Published on <DateFormatter dateString={date} />
          </p>
        </div>
      </div>
    </div>
  );
}
