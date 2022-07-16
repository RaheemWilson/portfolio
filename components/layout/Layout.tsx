import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  VStack,
} from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: any) {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      px={[4, 8]}
      flexDirection="column"
      alignItems="center"
      justifyContent={"flex-start"}
      width={"full"}
      height="full"
    >
      <Header />
      <Box as="main" p="4">
        {children}
      </Box>
      <Footer />
    </Flex>
  );
}
