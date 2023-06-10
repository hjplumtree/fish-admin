import { Box, Flex, Image, Heading, Spacer } from "@chakra-ui/react";

interface Props {
  logoUrl: string;
  companyName: string;
  owner: string;
}

export default function Header({ logoUrl, companyName, owner }: Props) {
  return (
    <Flex align="center" bg="#112d4e" p="1rem">
      <Image src={logoUrl} boxSize="4rem" />
      <Box paddingLeft="1rem">
        <Heading size="md" color="#fff">
          {companyName}
        </Heading>
      </Box>
      <Spacer />
      <Box>
        <Heading size="md" color="#fff">
          대표: {owner}
        </Heading>
      </Box>
    </Flex>
  );
}
