import { Modal, ModalBody, ModalContent, ModalOverlay } from "@chakra-ui/react";

const CustomModal = ({ children, isOpen, onClose, mt, bg, isCentered }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered={isCentered}>
      <ModalOverlay bg={bg && bg} />
      <ModalContent
        maxW={"fit-content"}
        mt={mt && mt}
        bg={"#fff"}
        borderRadius={"20px"}
      >
        <ModalBody p={"0"}>{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
