import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const portalRoot = document.getElementById('portal-root');

function Modal({ children, isOpen, onClose }) {
  const modalRoot = document.createElement('div');

  const renderModal = () => {
    return children;
  }
  useEffect(() => {
    portalRoot.appendChild(modalRoot);
    return () => {
      portalRoot.removeChild(modalRoot);
    }
  });

  return (
    ReactDOM.createPortal(renderModal(), modalRoot)
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  uncontrolled: PropTypes.bool,
}

Modal.defaultProps = {
  uncontrolled: false,
}

export default Modal;