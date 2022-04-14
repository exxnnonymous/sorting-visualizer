import { render, screen } from "@testing-library/react";
import App from "App";
import Header from "./Header";

const MockHeader = () => {
  return (
    <App>
      <Header />
    </App>
  );
};

describe("testing header", () => {
  describe("when page is initialized", () => {
    it("renders logo", () => {
      render(<MockHeader />);
      const logoElement = screen.getByText(/sorting visualizer/i);
      expect(logoElement).toBeInTheDocument();
    });

    it("renders sorting toptions", () => {
      render(<MockHeader />);
      const sortOptionsElement = screen.getAllByTestId("sorting-options");
      expect(sortOptionsElement).toHaveLength(5);
    });

    it("renders new array button", () => {
      render(<MockHeader />);
      const newBtnElement = screen.getByText(/New Array/i);
      expect(newBtnElement).toBeInTheDocument();
    });
  });
});
