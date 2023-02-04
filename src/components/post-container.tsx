import React from "react";
import { postAPI, postAPI2 } from "services/post-service";
import { PostItem, PostItem2 } from "./post-item";
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
   * {pollingInterval : 1000} -  каждые 1000 мс будет  выполняться get-запрос (для чартов, уведомлений - своего рода аналог webSocket)
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

  /** 1й элемент массива это ф-ия создания постаб 2й эдемент массива это объект с ошибкой и т.д. */
  const [createPost, { error: createError, isLoading: createLoading }] =
    postAPI2.useCreatePostMutation();

  const [updatePost] = postAPI2.useUpdatePostMutation();
  const [deletePost] = postAPI2.useDeletePostMutation();

  const handleCreate = async () => {
    const title = prompt();
    await createPost({ title, body: title } as IPost);
  };

  const handleRemove = (post: IPost) => {
    deletePost(post);
  };

  const handleUpdate = (post: IPost) => {
    updatePost(post);
  };

  return (
    <div>
      <button onClick={() => handleCreate()}>Add new post</button>
      {isLoading && <h3>Идет загрузка...</h3>}
      {error && <h3>Ошибка при загрузке...</h3>}
      {posts &&
        posts.map((post, index) => (
          <PostItem2
            post={post}
            key={post.id}
            remove={handleRemove}
            update={handleUpdate}
          />
        ))}
    </div>
  );
};
