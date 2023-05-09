import React from "react";

const useModal = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalVariety, setModalVariety] = React.useState("");

  const handleModalOpen = React.useCallback((variety) => {
    setModalVariety(variety);
    setModalOpen(true);
  }, []);

  const handleModalClose = React.useCallback(() => {
    setModalOpen(false);
  }, []);

  React.useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modalOpen, handleModalClose]);

  return {
    modalOpen,
    modalVariety,
    handleModalOpen,
    handleModalClose,
  };
};

export default useModal;
