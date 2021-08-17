import { render, screen, cleanup } from "@testing-library/react";

import Header from "components/header/header";
import Content from "../components/home/content";
import VerticalBar from "../components/Charts/VerticalBar";
import Footer from "../../components/footer/footer";
import PieChart from "../components/Charts/Piechart";

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

test("Should render Vertical Bar Component", () => {
  render(<VerticalBar />);
  const contentElement = screen.getByTestId("vertical-bar");
  expect(contentElement).toBeInTheDocument();
});

test("Should render Pie Chart Component", () => {
  render(<PieChart />);
  const contentElement = screen.getByTestId("pie-chart");
  expect(contentElement).toBeInTheDocument();
});
