import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ContactModal } from "./contact-modal";

vi.mock("react-modal", () => {
  const React = require("react");

  const MockModalComponent = ({
    isOpen,
    children,
    onRequestClose,
    onAfterOpen,
    onAfterClose,
    contentLabel,
    className,
  }: {
    isOpen: boolean;
    children: React.ReactNode;
    onRequestClose: () => void;
    onAfterOpen?: () => void;
    onAfterClose?: () => void;
    contentLabel?: string;
    className?: string;
  }) => {
    const prevIsOpenRef = React.useRef(isOpen);

    React.useEffect(() => {
      if (isOpen && onAfterOpen) {
        onAfterOpen();
      }
    }, [isOpen, onAfterOpen]);

    React.useEffect(() => {
      if (!isOpen && prevIsOpenRef.current && onAfterClose) {
        onAfterClose();
      }
      prevIsOpenRef.current = isOpen;
    }, [isOpen, onAfterClose]);

    if (!isOpen) return null;

    return (
      <div
        data-testid="modal"
        aria-label={contentLabel}
        className={className}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onRequestClose();
          }
        }}
      >
        {children}
      </div>
    );
  };

  Object.assign(MockModalComponent, {
    setAppElement: vi.fn(),
  });

  return {
    default: MockModalComponent,
  };
});

describe("ContactModal", () => {
  const mockOnClose = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    document.body.style.overflow = "";
  });

  it("should render when isOpen is true", () => {
    render(<ContactModal isOpen={true} onClose={mockOnClose} />);
    expect(screen.getByTestId("modal")).toBeInTheDocument();
  });

  it("should not render when isOpen is false", () => {
    render(<ContactModal isOpen={false} onClose={mockOnClose} />);
    expect(screen.queryByTestId("modal")).not.toBeInTheDocument();
  });

  it("should render with default title", () => {
    render(<ContactModal isOpen={true} onClose={mockOnClose} />);
    expect(screen.getByText("Reach out")).toBeInTheDocument();
  });

  it("should render with custom title", () => {
    render(
      <ContactModal isOpen={true} onClose={mockOnClose} title="Contact Us" />
    );
    expect(screen.getByText("Contact Us")).toBeInTheDocument();
  });

  it("should call onClose when X button is clicked", () => {
    render(<ContactModal isOpen={true} onClose={mockOnClose} />);
    const closeButton = screen.getByLabelText("Close");
    fireEvent.click(closeButton);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it("should call onClose when Close button is clicked", () => {
    render(<ContactModal isOpen={true} onClose={mockOnClose} />);
    const closeButtons = screen.getAllByRole("button", { name: /close/i });
    const bottomCloseButton = closeButtons.find((button) =>
      button.textContent?.includes("Close")
    );
    fireEvent.click(bottomCloseButton!);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it("should render email link with correct href", () => {
    render(<ContactModal isOpen={true} onClose={mockOnClose} />);
    const emailLink = screen.getByText("Email me directly").closest("a");
    expect(emailLink).toHaveAttribute("href", "mailto:svo@qual.is");
  });

  it("should render LinkedIn link with correct attributes", () => {
    render(<ContactModal isOpen={true} onClose={mockOnClose} />);
    const linkedInLink = screen.getByText("Connect on LinkedIn").closest("a");
    expect(linkedInLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/5v0/"
    );
    expect(linkedInLink).toHaveAttribute("target", "_blank");
    expect(linkedInLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("should have proper aria-label on close button", () => {
    render(<ContactModal isOpen={true} onClose={mockOnClose} />);
    const closeButton = screen.getByLabelText("Close");
    expect(closeButton).toBeInTheDocument();
  });

  it("should set body overflow to hidden when modal opens", () => {
    render(<ContactModal isOpen={true} onClose={mockOnClose} />);
    expect(document.body.style.overflow).toBe("hidden");
  });

  it("should reset body overflow to unset when modal closes", () => {
    const { rerender } = render(
      <ContactModal isOpen={true} onClose={mockOnClose} />
    );
    expect(document.body.style.overflow).toBe("hidden");

    rerender(<ContactModal isOpen={false} onClose={mockOnClose} />);
    expect(document.body.style.overflow).toBe("unset");
  });

  it("should have modal-dialog className", () => {
    render(<ContactModal isOpen={true} onClose={mockOnClose} />);
    const modal = screen.getByTestId("modal");
    expect(modal).toHaveClass("modal-dialog");
  });

  it("should have Contact contentLabel", () => {
    render(<ContactModal isOpen={true} onClose={mockOnClose} />);
    const modal = screen.getByTestId("modal");
    expect(modal).toHaveAttribute("aria-label", "Contact");
  });

  it("should render SVG icons", () => {
    const { container } = render(
      <ContactModal isOpen={true} onClose={mockOnClose} />
    );
    const svgs = container.querySelectorAll("svg");
    expect(svgs.length).toBeGreaterThan(0);
  });
});
