import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/posts";

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <section>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif font-bold text-stone-900">Meu Gossip Girl de TI</h1>
        <p className="text-stone-600 mt-2">
          Babados e programas — com HTML, CSS, Next.js e Tailwind.
        </p>
      </div>
      <div className="space-y-8">
        {posts.map((post) => (
          <PostCard
            key={post.slug}
            slug={post.slug}
            title={post.title}
            summary={post.summary}
            date={post.date}
          />
        ))}
      </div>
    </section>
  );
}