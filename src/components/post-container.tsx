import React from "react";
import { postAPI, postAPI2 } from "services/post-service";
import { PostItem } from "./post-item";
import { IPost } from "models";

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
      {posts && posts.map((post) => <PostItem post={post} key={post.id} />)}
    </div>
  );
};

export const PostContainer3 = () => {
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
  } = postAPI2.useFetchAllPosts2Query(
    33
    // {pollingInterval : 1000}
  );

  const [createPost, {}] = postAPI2.useCreatePostMutation();

  const handleCreate = async () => {
    const title = prompt();
    await createPost({ title, body: title } as IPost);
  };

  return (
    <div>
      <button onClick={() => handleCreate()}>Add new post</button>
      {isLoading && <h3>Идет загрузка...</h3>}
      {error && <h3>Ошибка при загрузке...</h3>}
      {posts &&
        posts.map((post, index) => <PostItem post={post} key={post.id} />)}
    </div>
  );
};
