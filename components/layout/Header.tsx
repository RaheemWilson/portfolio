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
  Heading,
} from "@chakra-ui/react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

export default function Header({ children }: any) {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box bg={useColorModeValue("white", "#1111111")} width="100%">
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Link
          fontSize={"xl"}
          href="/"
          fontWeight={700}
          _hover={{
            textDecoration: "none",
          }}
        >
          Raheem Wilson
        </Link>

        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={7}>
            <Button onClick={toggleColorMode} variant="ghost">
              {colorMode === "light" ? <BsMoonFill /> : <BsSunFill />}
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
}
