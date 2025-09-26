import { useGetPostsQuery } from "../features/apiSlice";

export default function PostsPage() {
  const { data: posts = [], isLoading } = useGetPostsQuery();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Posts</h2>
      {posts.slice(0, 20).map((post) => (
        <div key={post.id}>
          {post.title}
        </div>
      ))}
    </div>
  );
}
