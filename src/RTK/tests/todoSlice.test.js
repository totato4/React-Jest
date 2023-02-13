import todoReducer, {
  addTodo,
  toggleComplete,
  removeTodo,
} from "../todoSlice/todoSlice";

describe("todoSlice", () => {
  it("should return default state when passed an empty action", () => {
    const result = todoReducer(undefined, { type: "" });
    expect(result).toEqual([]);
  });
  it('should add new todo item with "addTodo" action', () => {
    const action = { type: addTodo.type, payload: "Redux" };
    const result = todoReducer([], action);
    expect(result[0].text).toBe("Redux");
    expect(result[0].completed).toBe(false);
  });

  it("should toggle todo completed status with 'toggleComplete' action", () => {
    const todos = [{ id: 1234, text: "Redux", completed: false }];
    const action = { type: toggleComplete.type, payload: 1234 };
    const result = todoReducer(todos, action);
    expect(result[0].completed).toBe(true);
    expect(result[0].id).toBe(1234);
  });
  it('should remove todo by id with "removeTodo" action', () => {
    const todos = [{ id: 1234, text: "Redux", completed: false }];
    const action = { type: removeTodo.type, payload: 1234 };
    const result = todoReducer(todos, action);
    expect(result).toEqual([]);
  });
});
