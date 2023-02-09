import { jsonPlaceholderApi } from "api";
import { PostItem } from "../../components/post-item";

export const UnmutatedContent = () => {
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
  } = jsonPlaceholderApi.useFetchAllPostsQuery(
    5
    // {pollingInterval : 1000}
  );

  return (
    <div>
      <div>
        <button onClick={() => refetch()}>Обновить</button>
        {isLoading && <h3>Идет загрузка...</h3>}
        {error && <h3>Ошибка при загрузке...</h3>}
        {posts && posts.map((post) => <PostItem post={post} key={post.id} />)}
      </div>
    </div>
  );
};
