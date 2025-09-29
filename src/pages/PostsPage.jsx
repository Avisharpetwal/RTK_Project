import React, { useState, useMemo, useCallback } from "react";
import { useGetPostsQuery } from "../features/apiSlice";
import PostItem from "../components/PostItem";

export default function PostsPage() {
  const { data: posts = [], isLoading } = useGetPostsQuery();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const itemsPerPage = 10;

  // useMemo to filter + paginate
  const filteredPosts = useMemo(() => {
    return posts
      .filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))
      .slice((page - 1) * itemsPerPage, page * itemsPerPage);
  }, [posts, search, page]);

  // useCallback to avoid recreating function
  const handleSearch = useCallback((e) => {
    setSearch(e.target.value);
    setPage(1);
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Posts</h2>
      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={handleSearch}
      />

      {filteredPosts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
      <button onClick={() => setPage((p) => p - 1)} disabled={page === 1}>
        Prev
      </button>
      
      <button
        onClick={() => setPage((p) => p + 1)}
        disabled={page * itemsPerPage >= posts.length}
      >
        Next
      </button>
    </div>
  );
}
