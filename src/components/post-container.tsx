import React from "react";
import { postAPI } from "services/post-service";
import { PostItem } from "./post-item";

export const PostContainer = () => {
  /**
   * useFetchAllPostsQuery(5) автосгенерированные хуки на основании  описанных endpoint, 5-количество постов (передается в querry-параметры)
   * refetch - функция для обновления данных
   * {pollingInterval : 1000} -  каждые 1000 мс будет  выполняться get-запрос (для чартов, уведомлений - своего рода аналог wedSocket)
   */
  const {
    data: posts,
    error,
    isLoading,
    refetch,
  } = postAPI.useFetchAllPostsQuery(
    5
    // {pollingInterval : 1000}
  );

  return (
    <div>
      <button onClick={() => refetch()}>Обновить</button>
      {isLoading && <h3>Идет загрузка...</h3>}
      {error && <h3>Ошибка при загрузке...</h3>}
      {posts &&
        posts.map((post, index) => <PostItem post={post} key={post.id} />)}
    </div>
  );
};

/** Код идентичен PostContainer - посмотри вкладку Network- запросы не будут дублироваться, данные будут закэшированы RTK Querry*/
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