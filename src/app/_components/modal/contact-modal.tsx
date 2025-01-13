'use client';

import React from 'react';
import Iframe from 'react-iframe';
import Modal from 'react-modal';

const modalStyle = {
  content: {
    width: '70%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#__next');

const ContactModal = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button type="button" onClick={openModal} className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0">Contact</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyle}
        contentLabel="Contact"
      >
        <Iframe
          url="https://docs.google.com/forms/d/e/1FAIpQLScJBVr6_vCYt0Nz4jgNBJ6f6-qpcRLM6jFtNtOoqVWhmvf7ng/viewform?embedded=true"
          width="100%"
          height="640"
          display="block"
          position="relative"
        />
          <button type="button" onClick={closeModal} className="float-right focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Close</button>
      </Modal>
    </div>
  );
};

export { ContactModal };
