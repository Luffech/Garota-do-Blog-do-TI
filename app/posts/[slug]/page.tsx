// app/posts/[slug]/page.tsx
import { notFound } from "next/navigation";
import { getPostBySlug } from "../../../lib/posts";
import LikeButton from "../../../components/LikeButton";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;               
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();                                
  }

  return (
    <article>
      <div className="text-center mb-8">
        <p className="text-sm text-stone-500">{post.date}</p>
        <h1 className="text-4xl font-serif font-bold text-stone-900 mt-2">
          {post.title}
        </h1>
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
