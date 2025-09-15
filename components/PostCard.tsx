import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type PostCardProps = {
  slug: string;
  title: string;
  summary: string;
  date: string;
};

export default function PostCard({ slug, title, summary, date }: PostCardProps) {
  return (
    <Link href={`/posts/${slug}`}>
      <article className="group p-6 border rounded-2xl hover:bg-stone-50 transition-colors duration-300">
        <p className="text-xs text-stone-500 mb-2">{date}</p>
        <h2 className="text-xl font-serif font-bold text-stone-800 group-hover:text-indigo-600 transition-colors mb-2">{title}</h2>
        <p className="text-stone-600 text-sm leading-relaxed mb-4">{summary}</p>
        <div className="flex items-center text-sm font-medium text-indigo-600">
          Ler mais
          <ArrowUpRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </div>
      </article>
    </Link>
  );
}