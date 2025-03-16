"use client";

import React from "react";
import Iframe from "react-iframe";
import Modal from "react-modal";

Modal.setAppElement("#__next");

const ContactModal = () => {
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
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        onAfterOpen={() => {
          document.body.style.overflow = "hidden";
        }}
        onAfterClose={() => {
          document.body.style.overflow = "unset";
        }}
        className="modal-dialog"
        contentLabel="Contact"
      >
        <Iframe
          url="https://docs.google.com/forms/d/e/1FAIpQLScJBVr6_vCYt0Nz4jgNBJ6f6-qpcRLM6jFtNtOoqVWhmvf7ng/viewform?embedded=true"
          width="100%"
          height="600"
          display="block"
          position="relative"
          className="border-solid border-4 border-primary"
        />
        <button
          type="button"
          onClick={closeModal}
          className="float-right focus:outline-none text-white bg-highlight hover:bg-red-500 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-red-900"
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export { ContactModal };
