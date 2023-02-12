import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Search from "./Search";

const onChange = jest.fn();
describe("Search component", () => {
  it("renders Search component", () => {
    render(
      <Search value="" onChange={onChange}>
        Find:
      </Search>
    );
    expect(screen.getByText(/Find/i)).toBeInTheDocument();
  });

  it("render without children", () => {
    render(<Search value="" onChange={onChange} />);
    expect(screen.debug());
    expect(screen.getByText(/search/i)).toBeInTheDocument();
  });
  it("render without placeholder", () => {
    render(<Search value="" onChange={onChange} />);
    expect(screen.getByPlaceholderText(/search.../i)).toBeInTheDocument();
  });
  it("custom placeholder works correctly", () => {
    render(<Search value="" onChange={onChange} placeholder="find post" />);
    expect(screen.getByPlaceholderText(/find post/i)).toBeInTheDocument();
  });
  it("onChange works", () => {
    render(
      <Search value="" onChange={onChange}>
        Find:
      </Search>
    );
    userEvent.type(screen.getByRole("textbox"), "React");
    expect(onChange).toHaveBeenCalledTimes(5);
  });
  it("dinamyc styles works", () => {
    render(<Search value="abc" onChange={onChange} />);
    expect(screen.getByRole("textbox")).toHaveClass("input");
    expect(screen.getByRole("textbox")).toHaveClass("filled");
    expect(screen.getByText("Search")).toHaveClass("label");
  });
  it("search snapshot", () => {
    const search = render(
      <Search value="" onChange={onChange}>
        Find:
      </Search>
    );
    expect(search).toMatchSnapshot();
  });
  it("search snapshot empty", () => {
    const search = render(<Search value="">Find:</Search>);
    expect(search).toMatchSnapshot();
  });
});

//  i означает без учета регистра (большие маленькие буквы все равно)

// it это утверждение что будет именно так, можно несколько it'ов внутри describe , внутри it находится
// один элемент, может для этого оно и надо, чтобы несколько элементов в одном describe проверять
// через it(внутри которых разные элементы проверяются)

//  render рендерит компонент

//  expect означает что он ожидает что есть текст find (getbytext) , и что он есть
//  если в it утверждении есть render, то можно вызвать то что он рендерит через screen
//  тоесть идет утверждение expect в него через screen пробрасывается элемент и проверяется getbytext
//  типа есть ли текст find  (внутри tobeinthedocument, именно! внутри этого элемента)

// screen.debug() вывести в консоль результат рендера элемента render который находится в screen
