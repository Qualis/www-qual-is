"use client";

import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#__next");

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export function ContactModal({ isOpen, onClose, title = "Reach out" }: ContactModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      onAfterOpen={() => {
        document.body.style.overflow = "hidden";
      }}
      onAfterClose={() => {
        document.body.style.overflow = "unset";
      }}
      className="modal-dialog"
      contentLabel="Contact"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
    >
      <div className="p-6 rounded-lg bg-accent-1 dark:bg-accent-3 shadow-xl w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-primary dark:text-primary-dark">
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="text-accent-3 dark:text-accent-1 hover:text-highlight bg-transparent rounded-full p-1"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-primary">
            <div className="grid gap-4">
              <a
                href="mailto:svo@qual.is"
                className="flex items-center text-accent-3 dark:text-accent-1 hover:text-primary px-4 py-3 rounded-md border border-gray-200 dark:border-gray-700 hover:border-primary transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Email me directly
              </a>

              <a
                href="https://www.linkedin.com/in/5v0/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-accent-3 dark:text-accent-1 hover:text-primary px-4 py-3 rounded-md border border-gray-200 dark:border-gray-700 hover:border-primary transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="bg-primary hover:bg-accent-1 hover:text-primary text-white font-medium py-2 px-6 rounded-lg border border-primary transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
}

const FooterContactModal = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button
        type="button"
        onClick={openModal}
        className="mx-2 bg-primary hover:bg-accent-1 hover:text-primary border border-primary text-white font-bold py-2 px-8 lg:px-6 duration-200 transition-colors mb-4 lg:mb-0"
      >
        Contact
      </button>
      <ContactModal isOpen={isOpen} onClose={closeModal} title="Contact" />
    </div>
  );
};

export default FooterContactModal;