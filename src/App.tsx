import axios from "axios";
import { Practice1 } from "./Practices/Practice1";
import { Practice2 } from "./Practices/Practice2";
import { Practice3 } from "./Practices/Practice3";
import { Practice4 } from "./Practices/Practice4";
import "./styles.css";

export default function App() {
  const onClickFetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      console.log(res);
    });
  };
  return (
    <div className="App">
      <Practice1 />
      <Practice2 />
      <Practice3 />
      <Practice4 />
      <button onClick={onClickFetchData}>データ取得</button>
    </div>
  );
}
