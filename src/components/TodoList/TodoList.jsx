import React from "react";
import { selectTodos } from "../../RTK/todoSlice/Selectors";

const TodoList = () => {
  const todos = useSelector(selectTodos);

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};

export default TodoList;
