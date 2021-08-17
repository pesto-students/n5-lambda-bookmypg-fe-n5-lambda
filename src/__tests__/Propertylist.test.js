import Header from "components/header/header";
import Content from "../components/property/PropertyListContent";
import Footer from "../../components/footer/footer";
import { render, screen, cleanup } from "@testing-library/react";

test("Should render Header Component", () => {
  render(<Header />);
  const headerElement = screen.getByTestId("header");
  expect(headerElement).toBeInTheDocument();
});

test("Should render Footer Component", () => {
  render(<Footer />);
  const footerElement = screen.getByTestId("footer");
  expect(footerElement).toBeInTheDocument();
});

test("Should render Content Component", () => {
  render(<Content />);
  const contentElement = screen.getByTestId("content");
  expect(contentElement).toBeInTheDocument();
});
