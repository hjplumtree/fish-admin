import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";

interface Props {
  // TODO: Detail 요소들 확정시 타입 지정
  orderDetails?: any;
  isOpen: boolean;
  onClose: () => void;
}

export default function OrderDetailModal({
  orderDetails,
  isOpen,
  onClose,
}: Props) {
  console.log(orderDetails);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>헤더</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>ModalBody Text</Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
