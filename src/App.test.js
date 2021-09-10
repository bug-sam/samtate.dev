import React from "react";
import { render, screen } from "@testing-library/react";
import Intro from "./components/Intro.js";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

class MockIntersectionObserver {
  constructor() { }
  observe() { }
  unobserve() { }
  disconnect() { }
};

beforeEach(() => {
  window.IntersectionObserver = MockIntersectionObserver;
});

test("renders Intro", () => {
  render(<Intro />);
  const linkElement = screen.getByText(/samuel/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders Intro", () => {
  render(<Intro />);
  const linkElement = screen.getByText(/samuel/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders About", () => {
  render(<About />);
  const linkElement = screen.getByText(/Inferno OS/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders Experience", () => {
  render(<Experience />);
  const linkElement = screen.getByText(/python client/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders Projects", () => {
  render(<Projects />);
  const linkElement = screen.getByText(/test project/i);
  expect(linkElement).toBeInTheDocument();
});
