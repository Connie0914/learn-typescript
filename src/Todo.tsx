import { TodoType } from "./types/todo";

export const Todo = (props: Omit<TodoType, "id">) => {
  // export const Todo = (props: Pick<TodoType, "userId" | "title" | "completed">) => {
type TodoType = {
  userId: number;
  title: string;
  id?: number;
  completed?: boolean;
};

export const Todo = (props: TodoType) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark} ${title}(ユーザー:${userId})`}</p>;
};
