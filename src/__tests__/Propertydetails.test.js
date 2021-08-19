import Propertycontent from "../components/property/PropertyContent";
import Header from "../components/header/header";
import Footer from "components/footer/footer";
import { render, screen, cleanup } from "@testing-library/react";

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

test("Should render Property Content Component", () => {
  render(<Propertycontent />);
  const footerElement = screen.getByTestId("property-content");
  expect(footerElement).toBeInTheDocument();
});
