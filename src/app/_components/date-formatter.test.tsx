import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import DateFormatter from "./date-formatter";

describe("DateFormatter", () => {
  it("should render a formatted date", () => {
    render(<DateFormatter dateString="2025-01-08" />);

    const timeElement = screen.getByText("January 8, 2025");
    expect(timeElement).toBeInTheDocument();
    expect(timeElement.tagName).toBe("TIME");
  });

  it("should have correct datetime attribute", () => {
    render(<DateFormatter dateString="2025-01-08" />);

    const timeElement = screen.getByText("January 8, 2025");
    expect(timeElement).toHaveAttribute("datetime", "2025-01-08");
  });

  it("should handle different date formats", () => {
    render(<DateFormatter dateString="2024-12-25" />);

    expect(screen.getByText("December 25, 2024")).toBeInTheDocument();
  });

  it("should format dates with single-digit days correctly", () => {
    render(<DateFormatter dateString="2025-03-01" />);

    expect(screen.getByText("March 1, 2025")).toBeInTheDocument();
  });
});
