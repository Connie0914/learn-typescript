import { VFC } from "react";
import { TodoType } from "./types/todo";

export const Todo: VFC<Omit<TodoType, "id">> = (props) =>
  // Pick = 使うものだけ抽出する。 Omit = 使わないものを省略する
  // props: Pick<TodoType, "userId" | "title" | "completed">
  // props: Omit<TodoType, "id">
  {
    const { title, userId, completed = false } = props;
    const completeMark = completed ? "[完]" : "[未]";
    return <p>{`${completeMark} ${title}(ユーザー:${userId})`}</p>;
  };