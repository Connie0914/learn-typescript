import axios from "axios";
import { useState } from "react";
import { Practice1 } from "./Practices/Practice1";
import { Practice2 } from "./Practices/Practice2";
import { Practice3 } from "./Practices/Practice3";
import { Practice4 } from "./Practices/Practice4";
import "./styles.css";
import { Todo } from "./Todo";

type TodoType = {
  userId: number;
  title: string;
  completed: boolean;
};

export default function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickFetchData = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      });
  };
  return (
    <div className="App">
      <Practice1 />
      <Practice2 />
      <Practice3 />
      <Practice4 />
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        <Todo
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}
