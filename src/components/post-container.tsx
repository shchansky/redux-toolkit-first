import React from "react";
import { postAPI } from "services/post-service";
import { PostItem } from "./post-item";

export const PostContainer = () => {
  /** useFetchAllPostsQuery_ автосгенерированные хуки на основании  описанных endpoint */
  const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(5);

  return (
    <div>
      {isLoading && <h3>Идет загрузка...</h3>}
      {error && <h3>Ошибка при загрузке...</h3>}
      {posts &&
        posts.map((post, index) => <PostItem post={post} key={post.id} />)}
    </div>
  );
};
