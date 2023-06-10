import { Flex, Button, useDisclosure } from "@chakra-ui/react";
import OrderDetailModal from "@components/OrderDetailModal";
import { ReactNode } from "react";

export default function OverviewScene() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const MAX_SEATS = 40;
  const seats: ReactNode[] = [];

  for (let i = 1; i <= MAX_SEATS; i++) {
    seats.push(
      <Button
        backgroundColor="#3f72af"
        color="#ffffff"
        fontSize="xl"
        width="15rem"
        height="10rem"
        _hover={{ backgroundColor: "#112d4e" }}
        onClick={onOpen}
      >
        {i}
      </Button>
    );
  }

  return (
    <>
      <Flex p="1rem" gap="1rem" width="100%" wrap="wrap" marginTop="1rem">
        {seats}
      </Flex>
      <OrderDetailModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}
