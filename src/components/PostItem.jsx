import React from "react";

const PostItem = React.memo(({ post }) => {
  console.log("Rendering Post:", post.id);
  return (
    <div>
      <h4>{post.title}</h4>
      <p>{post.body}</p>
    </div>
  );
});

export default PostItem;
