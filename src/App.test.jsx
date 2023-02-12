import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("App component", () => {
  it("App renders", () => {
    render(<App />);
    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getByText(/Пет проект/i)).toBeInTheDocument();
  });
  it("typing in Searchbox works", () => {
    render(<App />);
    expect(screen.queryByDisplayValue(/React/i)).toBeNull();
    userEvent.type(screen.getByRole("textbox"), "React");
    expect(screen.queryByDisplayValue(/React/i)).toBeInTheDocument();
  });
  it("search filter is working", () => {
    render(<App />);
    expect(screen.getByText(/Vue/i)).toBeInTheDocument();
    expect(screen.getByText(/Javascript/i)).toBeInTheDocument();
    userEvent.type(screen.getByRole("textbox"), "script"),
      expect(screen.queryByText(/Vue/i)).toBeNull();
    expect(screen.getByText(/Javascript/i)).toBeInTheDocument();
  });
  it("app snapshot", () => {
    const app = render(<App />);
    expect(app).toMatchSnapshot();
  });
});
