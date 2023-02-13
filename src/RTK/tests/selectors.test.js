import { selectTodos } from "../todoSlice/Selectors";

describe("redux selectors", () => {
  it("should select todos from state object", () => {
    const todos = [{ id: 123, text: "Redux", completed: false }];
    const result = selectTodos({ todos });
    expect(result).toEqual(todos);
  });
});
