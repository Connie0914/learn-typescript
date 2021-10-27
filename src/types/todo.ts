export type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  // ?をつけることで、必須じゃなくてもいい。オプション扱いになる。
  // completed?: boolean;
};
