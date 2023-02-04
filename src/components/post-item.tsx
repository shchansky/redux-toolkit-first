import React from "react";
import { IPost } from "../models";

type Props = {
  post: IPost;
};

type Props2 = {
  post: IPost;
  remove: (post: IPost) => void;
  update: (post: IPost) => void;
};

export const PostItem = (props: Props) => {
  const { post } = props;

  return (
    <div>
      {post.id} {post.title}
    </div>
  );
};

export const PostItem2 = (props: Props2) => {
  const { post, remove, update } = props;

  const handleRemove = (event: React.MouseEvent) => {
    remove(post);
  };

  const handleUpdate = (event: React.MouseEvent) => {
    const title = prompt() || "";
    update({ ...post, title });
  };

  return (
    <div>
      {post.id} {post.title}
      <button onClick={handleRemove}>Удалить пост</button>
      <button onClick={handleUpdate}>Обновить пост</button>
    </div>
  );
};
