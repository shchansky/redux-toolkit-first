import React from "react";
import { postAPI } from "services/post-service";
import { PostItem } from "./post-item";

export const PostContainer = () => {
  /** useFetchAllPostsQuery_ автосгенерированные хуки на основании  описанных endpoint */
  const { data: posts } = postAPI.useFetchAllPostsQuery(5);

  return (
    <div>
      {posts &&
        posts.map((post, index) => <PostItem post={post} key={post.id} />)}
    </div>
  );
};
