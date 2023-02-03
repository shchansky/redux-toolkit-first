import React from "react";
import { postAPI } from "services/post-service";
import { PostItem } from "./post-item";

export const PostContainer = () => {
  /** useFetchAllPostsQuery(5) автосгенерированные хуки на основании  описанных endpoint, 5-количество постов (передается в querry-параметры)  */
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

/** Код аналогичен PostContainer - посмотри вкладку Network- запросы не будут дублироваться, данные будут закэшированы RTK Querry*/
export const PostContainer2 = () => {
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
