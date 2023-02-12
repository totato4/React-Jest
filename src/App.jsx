import "./App.css";
import React from "react";
import List from "./components/List/List";
import { Search } from "./components/Search";
const data = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Vue",
  "Angular",
  "NodeJS",
];

function App() {
  const [search, setSearch] = React.useState("");
  return (
    <div className="App">
      <div>
        Тестирование реакт приложений <br />
        Пет проект
      </div>
      <Search value={search} onChange={(e) => setSearch(e.target.value)}>
        Find course:
      </Search>
      <List items={data} />
    </div>
  );
}

export default App;
