import { render, screen, cleanup } from "@testing-library/react";

import Header from "../user/components/header/header";
import Content from "../user/components/home/Content";
import Footer from "../components/footer/footer";

test("Should render Header Component", () => {
  render(<Header />);
  const headerElement = screen.getByTestId("user-header");
  expect(headerElement).toBeInTheDocument();
});

test("Should render Footer Component", () => {
  render(<Footer />);
  const footerElement = screen.getByTestId("user-Footer");
  expect(footerElement).toBeInTheDocument();
});

test("Should render Content Component", () => {
  render(<Content />);
  const contentElement = screen.getByTestId("user-content");
  expect(contentElement).toBeInTheDocument();
});
