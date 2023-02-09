import React from "react";
import { dbJsonApi } from "api/api";
import { PostItem2 } from "../../components/post-item";
import { IPost } from "models";

export const MutatedPostContainer = () => {
  /**
   * useFetchAllPostsQuery(33) автосгенерированные хуки на основании  описанных endpoint, 5-количество постов (передается в querry-параметры)
   * refetch - функция для обновления данных
   * {pollingInterval : 1000} -  каждые 1000 мс будет  выполняться get-запрос (для чартов, уведомлений - своего рода аналог webSocket)
   */
  const {
    data: posts,

    error,
    isLoading,
    refetch,
  } = dbJsonApi.useFetchAllPosts2Query(
    33
    // {pollingInterval : 1000}
  );

  /** 1й элемент массива это ф-ия создания поста, 2й эдемент массива это объект с ошибкой и т.д. */
  const [createPost, { error: createError, isLoading: createLoading }] =
    dbJsonApi.useCreatePostMutation();

  const [updatePost] = dbJsonApi.useUpdatePostMutation();
  const [deletePost] = dbJsonApi.useDeletePostMutation();

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
      <h3>Posts mutation with RTK Qerry</h3>
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
    </div>
  );
};