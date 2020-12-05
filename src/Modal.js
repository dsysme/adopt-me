import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = function Modal({ children }) {
  const elRef = useRef(null);
  if (!elRef.current) {
    const div = document.createElement("div");
    elRef.current = div;
  }

  useEffect(function setModalRoot() {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);

    return function cleanupModal() {
      modalRoot.removeChild(elRef.current);
    };
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
