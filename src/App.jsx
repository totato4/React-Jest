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
  const [items, setItems] = React.useState(data);
  React.useEffect(() => {
    setItems(
      data.filter((el) => el.toLowerCase().includes(search.toLowerCase()))
    );
  }, [search]);

  return (
    <div className="App">
      <div>
        Тестирование реакт приложений <br />
        Пет проект
      </div>
      <Search value={search} onChange={(e) => setSearch(e.target.value)}>
        Find course:
      </Search>
      <List items={items} />
    </div>
  );
}

export default App;
