import React from "react";
import { IPost } from "../models";

type Props = {
  post: IPost;
};

export const PostItem = (props: Props) => {
  const { post } = props;

  return (
    <div>
      {post.id} {post.title}
      <button>Удалить пост</button>
    </div>
  );
};
