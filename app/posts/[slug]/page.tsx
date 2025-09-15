import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/posts";
import LikeButton from "@/components/LikeButton";

export default function PostPage({ params }: { params: { slug:string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <article>
      <div className="text-center mb-8">
        <p className="text-sm text-stone-500">{post.date}</p>
        <h1 className="text-4xl font-serif font-bold text-stone-900 mt-2">{post.title}</h1>
      </div>
      <div className="text-stone-700 leading-relaxed space-y-5">
        <p>{post.content}</p>
      </div>
      <div className="mt-10 flex justify-center">
        <LikeButton />
      </div>
    </article>
  );
}